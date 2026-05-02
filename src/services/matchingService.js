import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from './firebase'

/**
 * NEARBY DRIVER MATCHING SERVICE
 * Finds drivers within specified radius using haversine formula
 */

const EARTH_RADIUS_KM = 6371

const toRad = (degrees) => (degrees * Math.PI) / 180

export const calculateDistance = (lat1, lng1, lat2, lng2) => {
  /**
   * Haversine formula to calculate distance between two coordinates
   * Returns distance in kilometers
   */
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return EARTH_RADIUS_KM * c
}

export const findNearbyDrivers = async (pickupLat, pickupLng, radiusKm = 3) => {
  /**
   * Find all available drivers within radius
   * Note: Firestore doesn't have native geo-queries, so we fetch all
   * available drivers and filter client-side
   *
   * TODO: Implement GeoHash for better performance in production
   * 
   * FIX 4: Check both isOnline AND isBusy status
   */
  try {
    // Fetch all online, available drivers (NOT on active rides)
    const q = query(
      collection(db, 'driver_locations'),
      where('isOnline', '==', true)
    )

    const snapshot = await getDocs(q)
    const nearbyDrivers = []

    for (const doc of snapshot.docs) {
      const driver = doc.data()
      
      // FIX 4: Skip drivers who are busy (on another ride)
      if (driver.isBusy === true) {
        console.log(`[Matching] Skipping driver ${driver.driverId} - currently busy`)
        continue
      }
      
      const distance = calculateDistance(
        pickupLat,
        pickupLng,
        driver.lat,
        driver.lng
      )

      // Only include drivers within radius
      if (distance <= radiusKm) {
        nearbyDrivers.push({
          id: driver.driverId,
          lat: driver.lat,
          lng: driver.lng,
          distance,
          isAvailable: driver.isAvailable !== false,
          updatedAt: driver.updatedAt,
        })
      }
    }

    return nearbyDrivers
      .sort((a, b) => a.distance - b.distance) // Sort by distance
  } catch (err) {
    console.error('Error finding nearby drivers:', err)
    throw err
  }
}

export const getDriverRating = async (driverId) => {
  /**
   * Get average driver rating from completed rides
   */
  try {
    const q = query(
      collection(db, 'rides'),
      where('driverId', '==', driverId),
      where('status', '==', 'completed')
    )

    const snapshot = await getDocs(q)
    if (snapshot.empty) return 5.0 // Default for new drivers

    let totalRating = 0
    snapshot.docs.forEach(doc => {
      totalRating += doc.data().driverRating || 0
    })

    return totalRating / snapshot.size
  } catch (err) {
    console.error('Error getting driver rating:', err)
    return 5.0
  }
}

export const enrichDriversWithRating = async (drivers) => {
  /**
   * Add driver ratings to driver list
   */
  const enrichedDrivers = await Promise.all(
    drivers.map(async (driver) => ({
      ...driver,
      rating: await getDriverRating(driver.id),
    }))
  )

  return enrichedDrivers
}

export const calculateETA = (distanceKm, averageSpeed = 40) => {
  /**
   * Calculate estimated time of arrival in minutes
   * averageSpeed: km/h (default 40 for city traffic)
   */
  const hours = distanceKm / averageSpeed
  return Math.ceil(hours * 60) // Return in minutes
}

export const getDriverAcceptanceRate = async (driverId) => {
  /**
   * Calculate driver's acceptance rate
   * High acceptance rate = more reliable driver
   */
  try {
    const requestsSnapshot = await getDocs(
      query(
        collection(db, 'rides'),
        where('dispatchLog.currentDriver', '==', driverId)
      )
    )

    if (requestsSnapshot.empty) return 1.0 // New driver = 100%

    let acceptedCount = 0
    requestsSnapshot.forEach(doc => {
      if (doc.data().status !== 'cancelled' && doc.data().driverId === driverId) {
        acceptedCount++
      }
    })

    return acceptedCount / requestsSnapshot.size
  } catch (err) {
    console.error('Error calculating acceptance rate:', err)
    return 1.0
  }
}

export const rankDriversByScore = async (drivers) => {
  /**
   * Rank drivers by composite score:
   * Score = (1 - normalizedDistance) * 0.5 + rating/5 * 0.3 + acceptanceRate * 0.2
   */
  const maxDistance = Math.max(...drivers.map(d => d.distance)) || 1
  const ratings = await Promise.all(drivers.map(d => getDriverRating(d.id)))
  const acceptanceRates = await Promise.all(
    drivers.map(d => getDriverAcceptanceRate(d.id))
  )

  return drivers
    .map((driver, index) => ({
      ...driver,
      rating: ratings[index],
      acceptanceRate: acceptanceRates[index],
      score:
        (1 - driver.distance / maxDistance) * 0.5 +
        (ratings[index] / 5) * 0.3 +
        acceptanceRates[index] * 0.2,
    }))
    .sort((a, b) => b.score - a.score)
}
