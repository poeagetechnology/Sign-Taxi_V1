import { BASE_FARE, FARE_PER_KM, MIN_FARE, DRIVER_BATA, FARE_STRUCTURE } from './constants'

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
 * Calculate estimated fare with trip type and vehicle type
 * @param {number} pickupLat - Pickup latitude
 * @param {number} pickupLng - Pickup longitude
 * @param {number} dropLat - Drop latitude
 * @param {number} dropLng - Drop longitude
 * @param {string} vehicleType - Vehicle type (sedan, suv, etc)
 * @param {string} tripType - Trip type (oneway, round_trip)
 */
export const calculateFareWithTrip = (pickupLat, pickupLng, dropLat, dropLng, vehicleType = 'sedan', tripType = 'oneway') => {
  const distanceKm = haversineDistance(pickupLat, pickupLng, dropLat, dropLng)
  const fareConfig = FARE_STRUCTURE[vehicleType]?.[tripType]
  
  if (!fareConfig) {
    // Fallback to default calculation
    return calculateFare(pickupLat, pickupLng, dropLat, dropLng)
  }
  
  const fare = fareConfig.driverBata + distanceKm * fareConfig.perKm
  return Math.max(fareConfig.driverBata, Math.round(fare * 100) / 100)
}

/**
 * Calculate estimated fare (legacy - default one-way sedan)
 */
export const calculateFare = (pickupLat, pickupLng, dropLat, dropLng) => {
  const distanceKm = haversineDistance(pickupLat, pickupLng, dropLat, dropLng)
  const fare = BASE_FARE + distanceKm * FARE_PER_KM
  return Math.max(MIN_FARE, Math.round(fare * 100) / 100)
}

/**
 * Calculate from Google Maps distance (meters)
 * @param {number} distanceMeters - Distance in meters
 * @param {string} vehicleType - Vehicle type (sedan, suv, etc)
 * @param {string} tripType - Trip type (oneway, round_trip)
 */
export const calculateFareFromDistance = (distanceMeters, vehicleType = 'sedan', tripType = 'oneway') => {
  const distanceKm = distanceMeters / 1000
  const fareConfig = FARE_STRUCTURE[vehicleType]?.[tripType]
  
  if (!fareConfig) {
    // Fallback to default calculation
    const fare = BASE_FARE + distanceKm * FARE_PER_KM
    return Math.max(MIN_FARE, Math.round(fare * 100) / 100)
  }
  
  const fare = fareConfig.driverBata + distanceKm * fareConfig.perKm
  return Math.max(fareConfig.driverBata, Math.round(fare * 100) / 100)
}
