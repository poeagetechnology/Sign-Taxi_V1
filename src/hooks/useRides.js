import { useEffect } from 'react'
import { subscribeToUserActiveRide, subscribeToPendingRides } from '../services/rideService'
import useRideStore from '../store/rideStore'

export const useUserActiveRide = (userId) => {
  const { activeRide, setActiveRide } = useRideStore()

  useEffect(() => {
    if (!userId) return
    const unsubscribe = subscribeToUserActiveRide(userId, (ride) => {
      setActiveRide(ride)
    })
    return () => unsubscribe()
  }, [userId, setActiveRide])

  return activeRide
}

export const usePendingRides = () => {
  const { pendingRides, setPendingRides } = useRideStore()

  useEffect(() => {
    const unsubscribe = subscribeToPendingRides((rides) => {
      setPendingRides(rides)
    })
    return () => unsubscribe()
  }, [setPendingRides])

  return pendingRides
}
