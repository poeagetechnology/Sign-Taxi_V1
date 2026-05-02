const TRIP_TYPES = {
  ONEWAY: 'oneway',
  ROUND_TRIP: 'round_trip',
  HOURLY_RENTAL: 'hourly_rental',
  AIRPORT: 'airport',
  OUTSTATION: 'outstation',
}

const TRIP_TYPE_INFO = {
  oneway: {
    label: 'Oneway Trip',
    description: 'Quick ride from point A to B',
    icon: '🚗',
    color: 'from-blue-500 to-blue-600',
  },
  round_trip: {
    label: 'Round Trip',
    description: 'Go and come back',
    icon: '↔️',
    color: 'from-purple-500 to-purple-600',
  },
  hourly_rental: {
    label: 'Hourly Rental',
    description: '1h - 12h rentals',
    icon: '⏱️',
    color: 'from-green-500 to-green-600',
  },
  airport: {
    label: 'Airport Taxi',
    description: 'Punctual airport service',
    icon: '✈️',
    color: 'from-orange-500 to-orange-600',
  },
  outstation: {
    label: 'Outstation',
    description: 'Long distance trips',
    icon: '🛣️',
    color: 'from-red-500 to-red-600',
  },
}

const VEHICLE_TYPES = {
  MINI: 'mini',
  SEDAN: 'sedan',
  SUV: 'suv',
  PREMIUM: 'premium',
  TRAVELLER: 'traveller',
  URBANIA: 'urbania',
}

const VEHICLE_INFO = {
  mini: {
    label: 'Mini',
    description: 'Economy Class Ride',
    capacity: '4 seats',
    icon: '🚗',
    color: 'from-blue-400 to-blue-500',
    fares: '₹12-14/km',
  },
  sedan: {
    label: 'Sedan',
    description: 'Business Class Ride',
    capacity: '4 seats',
    icon: '🚙',
    color: 'from-slate-700 to-slate-800',
    fares: '₹13-14/km',
  },
  suv: {
    label: 'SUV',
    description: 'Premium Comfort',
    capacity: '6 seats',
    icon: '🚐',
    color: 'from-amber-600 to-amber-700',
    fares: '₹17-19/km',
  },
  premium: {
    label: 'Premium',
    description: 'Luxury Experience',
    capacity: '4 seats',
    icon: '🏎️',
    color: 'from-purple-600 to-purple-700',
    fares: '₹22-25/km',
  },
  traveller: {
    label: 'Traveller',
    description: 'Family Trips',
    capacity: '8-9 seats',
    icon: '🚌',
    color: 'from-green-600 to-green-700',
    fares: '₹20-22/km',
  },
  urbania: {
    label: 'Urbania',
    description: 'Luxury Van',
    capacity: '7 seats',
    icon: '🚐',
    color: 'from-red-600 to-red-700',
    fares: '₹18-20/km',
  },
}

export { TRIP_TYPES, TRIP_TYPE_INFO, VEHICLE_TYPES, VEHICLE_INFO }
