import { BASE_FARE, FARE_PER_KM, MIN_FARE } from './constants'

/**
 * Haversine distance between two lat/lng points (km)
 */
export const haversineDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

/**
 * Calculate estimated fare
 */
export const calculateFare = (pickupLat, pickupLng, dropLat, dropLng) => {
  const distanceKm = haversineDistance(pickupLat, pickupLng, dropLat, dropLng)
  const fare = BASE_FARE + distanceKm * FARE_PER_KM
  return Math.max(MIN_FARE, Math.round(fare * 100) / 100)
}

/**
 * Calculate from Google Maps distance (meters)
 */
export const calculateFareFromDistance = (distanceMeters) => {
  const distanceKm = distanceMeters / 1000
  const fare = BASE_FARE + distanceKm * FARE_PER_KM
  return Math.max(MIN_FARE, Math.round(fare * 100) / 100)
}
