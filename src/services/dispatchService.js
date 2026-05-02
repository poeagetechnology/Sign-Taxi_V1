import {
  collection,
  doc,
  updateDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
  onSnapshot,
} from 'firebase/firestore'
import { db } from './firebase'

/**
 * Dispatch Queue Item Structure:
 * {
 *   driverId: string,
 *   distance: number (km),
 *   status: 'pending' | 'sent' | 'accepted' | 'rejected' | 'timeout',
 *   sentAt: timestamp,
 *   respondedAt: timestamp | null,
 *   rating: number (0-5)
 * }
 */

const DISPATCH_TIMEOUT_MS = 10000 // 10 seconds per driver
const MAX_QUEUE_SIZE = 10

export const createDispatchQueue = async (rideId, nearbyDrivers) => {
  /**
   * Creates an ordered dispatch queue sorted by:
   * 1. Distance (nearest first)
   * 2. Availability
   * 3. Rating (highest first)
   */
  if (!nearbyDrivers || nearbyDrivers.length === 0) {
    throw new Error('No drivers available in this area')
  }

  const sortedDrivers = nearbyDrivers
    .sort((a, b) => {
      // Primary: distance
      if (a.distance !== b.distance) {
        return a.distance - b.distance
      }
      // Secondary: rating
      return (b.rating || 0) - (a.rating || 0)
    })
    .slice(0, MAX_QUEUE_SIZE) // Limit to top 10

  // Create queue structure
  const dispatchQueue = sortedDrivers.map((driver, index) => ({
    driverId: driver.id,
    distance: driver.distance,
    status: 'pending',
    sentAt: null,
    respondedAt: null,
    rating: driver.rating || 0,
    order: index,
  }))

  return dispatchQueue
}

export const sendDispatchToDriver = async (rideId, driverId) => {
  /**
   * SIMPLIFIED: Send ride request to specific driver
   * Updates ride with currentDriverId
   * Driver's subscribeToDriverRequests listener will pick it up
   */
  try {
    await updateDoc(doc(db, 'rides', rideId), {
      currentDriverId: driverId,
      status: 'requested',
      updatedAt: serverTimestamp(),
    })
    return { success: true, driverId }
  } catch (err) {
    console.error('Error sending dispatch to driver:', err)
    throw err
  }
}

export const updateDispatchStatus = async (rideId, driverId, response) => {
  /**
   * Update dispatch status when driver accepts/rejects
   * response: 'accepted' | 'rejected'
   */
  try {
    await updateDoc(doc(db, 'rides', rideId), {
      [`dispatchLog.${driverId}`]: {
        status: response,
        respondedAt: serverTimestamp(),
      },
      updatedAt: serverTimestamp(),
    })
  } catch (err) {
    console.error('Error updating dispatch status:', err)
    throw err
  }
}

export const getDispatchQueuePosition = async (rideId, driverId) => {
  /**
   * Get driver's position in the dispatch queue
   */
  const rideDoc = await getDocs(
    query(collection(db, 'rides'), where('__name__', '==', rideId))
  )

  if (rideDoc.empty) return -1

  const ride = rideDoc.docs[0].data()
  const queue = ride.dispatchQueue || []

  return queue.findIndex(item => item.driverId === driverId)
}

export const subscribeToDispatchStatus = (rideId, callback) => {
  /**
   * Real-time listener for dispatch queue updates
   */
  return onSnapshot(doc(db, 'rides', rideId), doc => {
    if (doc.exists()) {
      const ride = doc.data()
      callback({
        status: ride.status,
        currentDriver: ride.dispatchLog?.currentDriver,
        dispatchQueue: ride.dispatchQueue || [],
      })
    }
  })
}

export const subscribeToDriverRequests = (driverId, callback) => {
  /**
   * SIMPLIFIED: Driver listens for incoming requests
   * Query rides where:
   * - status = 'requested' (ride is looking for drivers)
   * - currentDriverId = driverId (driver is next in queue)
   */
  if (!driverId) {
    console.error('subscribeToDriverRequests: driverId is required')
    return () => {}
  }

  console.log(`[Driver ${driverId}] Listening for incoming requests...`)

  return onSnapshot(
    query(
      collection(db, 'rides'),
      where('status', '==', 'requested'),
      where('currentDriverId', '==', driverId)
    ),
    snapshot => {
      const requests = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data(),
      }))
      console.log(`[Driver ${driverId}] Got ${requests.length} incoming request(s)`)
      callback(requests)
    },
    error => {
      console.error('Error in driver requests listener:', error)
      callback([])
    }
  )
}
