import { useState, useEffect } from 'react'
import { getCurrentPosition, subscribeToDriverLocation } from '../services/locationService'

export const useCurrentLocation = () => {
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCurrentPosition()
      .then((pos) => {
        setLocation(pos)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Geolocation error:', err.message)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { location, error, loading }
}

export const useDriverLocationRealtime = (driverId) => {
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!driverId) return

    const unsubscribe = subscribeToDriverLocation(driverId, (locData) => {
      if (locData) {
        setLocation({ lat: locData.lat, lng: locData.lng })
        setError(null)
      }
    })

    return () => unsubscribe?.()
  }, [driverId])

  return { location, error }
}
