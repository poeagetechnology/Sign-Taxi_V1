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

export const BASE_FARE = 2.5
export const FARE_PER_KM = 1.8
export const MIN_FARE = 5.0

export const GOOGLE_MAPS_LIBRARIES = ['places', 'geometry']

export const DEFAULT_MAP_CENTER = { lat: 40.7128, lng: -74.006 }
export const DEFAULT_MAP_ZOOM = 13
