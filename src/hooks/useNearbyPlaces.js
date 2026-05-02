import { useEffect, useState } from 'react'
import { useCurrentLocation } from './useLocation'

export const useNearbyPlaces = (radius = 1000) => {
  const { location } = useCurrentLocation()
  const [places, setPlaces] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const mapRef = useState(null)[1]

  useEffect(() => {
    if (!location) {
      setLoading(false)
      return
    }

    // Wait for Google Maps API to be available
    if (!window.google?.maps?.places) {
      const timer = setTimeout(() => {
        // Retry after a delay
      }, 500)
      return () => clearTimeout(timer)
    }

    setLoading(true)
    setError(null)

    try {
      // Create a temporary map instance for PlacesService
      const map = new window.google.maps.Map(document.createElement('div'), {
        center: { lat: location.lat, lng: location.lng },
        zoom: 15,
      })

      const service = new window.google.maps.places.PlacesService(map)

      const request = {
        location: new window.google.maps.LatLng(location.lat, location.lng),
        radius: radius,
        fields: ['name', 'geometry', 'formatted_address', 'rating', 'types', 'place_id'],
      }

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
          // Get top 5 places
          const topPlaces = results
            .filter(place => place.geometry && place.geometry.location)
            .slice(0, 5)
            .map((place, index) => ({
              id: place.place_id || index,
              name: place.name || 'Unknown Place',
              address: place.formatted_address || 'Address not available',
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
              types: place.types || [],
              rating: place.rating || null,
              photos: place.photos,
            }))

          setPlaces(topPlaces)
          setError(null)
        } else if (status === window.google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
          setPlaces([])
          setError(null)
        } else if (status !== window.google.maps.places.PlacesServiceStatus.INVALID_REQUEST) {
          console.error('Places Service Error:', status)
          setError('Could not fetch nearby places. Please try again.')
        }
        setLoading(false)
      })
    } catch (err) {
      console.error('Error initializing Places Service:', err)
      setError('Error fetching nearby places')
      setLoading(false)
    }
  }, [location, radius])

  return { places, loading, error }
}
