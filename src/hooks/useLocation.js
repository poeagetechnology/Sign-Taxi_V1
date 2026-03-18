import { useState, useEffect } from 'react'
import { getCurrentPosition } from '../services/locationService'

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
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { location, error, loading }
}
