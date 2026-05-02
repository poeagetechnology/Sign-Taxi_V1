export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  DRIVER: 'driver',
}

export const RIDE_STATUS = {
  SEARCHING: 'searching',
  REQUESTED: 'requested',
  ACCEPTED: 'accepted',
  STARTED: 'started',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
}

export const RIDE_STATUS_LABELS = {
  searching: 'Searching',
  requested: 'Requested',
  accepted: 'Accepted',
  started: 'In Progress',
  completed: 'Completed',
  cancelled: 'Cancelled',
}

export const RIDE_STATUS_COLORS = {
  searching: 'badge-info',
  requested: 'badge-warning',
  accepted: 'badge-info',
  started: 'badge-info',
  completed: 'badge-success',
  cancelled: 'badge-error',
}

export const USER_STATUS = {
  ACTIVE: 'active',
  BLOCKED: 'blocked',
}

// Driver Bata (Base Charge)
export const DRIVER_BATA = 400

// Fare structure by vehicle type and trip type
export const FARE_STRUCTURE = {
  sedan: {
    oneway: { perKm: 14, driverBata: 400, toll: 'One Way Toll' },
    round_trip: { perKm: 13, driverBata: 400, toll: 'Two Way Toll' },
  },
  suv: {
    oneway: { perKm: 19, driverBata: 400, toll: 'One Way Toll' },
    round_trip: { perKm: 17, driverBata: 400, toll: 'Two Way Toll' },
  },
  urbania: {
    oneway: { perKm: 20, driverBata: 400, toll: 'One Way Toll' },
    round_trip: { perKm: 18, driverBata: 400, toll: 'Two Way Toll' },
  },
  mini: {
    oneway: { perKm: 12, driverBata: 400, toll: 'One Way Toll' },
    round_trip: { perKm: 10, driverBata: 400, toll: 'Two Way Toll' },
  },
  premium: {
    oneway: { perKm: 25, driverBata: 400, toll: 'One Way Toll' },
    round_trip: { perKm: 22, driverBata: 400, toll: 'Two Way Toll' },
  },
  traveller: {
    oneway: { perKm: 22, driverBata: 400, toll: 'One Way Toll' },
    round_trip: { perKm: 20, driverBata: 400, toll: 'Two Way Toll' },
  },
}

// Legacy fare constants (default one-way sedan)
export const BASE_FARE = 400
export const FARE_PER_KM = 14
export const MIN_FARE = 400

export const GOOGLE_MAPS_LIBRARIES = ['places', 'geometry']

export const DEFAULT_MAP_CENTER = { lat: 40.7128, lng: -74.006 }
export const DEFAULT_MAP_ZOOM = 13
