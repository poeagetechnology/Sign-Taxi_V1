import { useEffect } from 'react'
import { subscribeToOnlineDriverLocations } from '../services/locationService'
import useDriverStore from '../store/driverStore'

export const useOnlineDrivers = () => {
  const { onlineDriverLocations, setOnlineDriverLocations } = useDriverStore()

  useEffect(() => {
    const unsubscribe = subscribeToOnlineDriverLocations((locations) => {
      setOnlineDriverLocations(locations)
    })
    return () => unsubscribe()
  }, [setOnlineDriverLocations])

  return onlineDriverLocations
}
