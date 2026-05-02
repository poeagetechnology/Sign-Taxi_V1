import React, { useState, useEffect, memo } from 'react'
import { DirectionsRenderer, DirectionsService, Polyline } from '@react-google-maps/api'
import toast from 'react-hot-toast'

const getDistanceMeters = (origin, destination) => {
  if (!origin || !destination) return 0
  const toRad = (v) => (v * Math.PI) / 180
  const R = 6371000 // earth radius in meters
  const dLat = toRad(destination.lat - origin.lat)
  const dLng = toRad(destination.lng - origin.lng)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(origin.lat)) * Math.cos(toRad(destination.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

const formatDistanceText = (meters) => {
  if (meters < 1000) return `${Math.round(meters)} m`
  return `${(meters / 1000).toFixed(1)} km`
}

const formatDurationText = (meters) => {
  const avgSpeedKmh = 30 // fallback average speed
  const hours = (meters / 1000) / avgSpeedKmh
  const minutes = Math.max(1, Math.round(hours * 60))
  return `${minutes} min`
}

const Directions = memo(({ origin, destination, onResult }) => {
  const [directions, setDirections] = useState(null)
  const [requested, setRequested] = useState(false)

  useEffect(() => {
    setDirections(null)
    setRequested(false)
  }, [origin?.lat, origin?.lng, destination?.lat, destination?.lng])

  if (!origin || !destination) return null

  const fallback = () => {
    const distance = getDistanceMeters(origin, destination)
    const distanceText = formatDistanceText(distance)
    const duration = formatDurationText(distance)
    setRequested(true)
    if (onResult) {
      onResult({ distance, duration, distanceText })
    }
  }

  const handleDirections = (result, status) => {
    if (status === 'OK' && result) {
      setDirections(result)
      setRequested(true)
      if (onResult) {
        const route = result.routes[0]
        const leg = route.legs[0]
        onResult({
          distance: leg.distance.value,
          duration: leg.duration.text,
          distanceText: leg.distance.text,
        })
      }
    } else {
      toast.error(`Directions lookup failed (${status}). Using straight-line fallback.`)
      fallback()
    }
  }

  return (
    <>
      {!requested && (
        <DirectionsService
          options={{
            origin: { lat: origin.lat, lng: origin.lng },
            destination: { lat: destination.lat, lng: destination.lng },
            travelMode: 'DRIVING',
          }}
          callback={handleDirections}
        />
      )}
      {directions && (
        <DirectionsRenderer
          directions={directions}
          options={{
            suppressMarkers: true,
            polylineOptions: {
              strokeColor: '#f59e0b',
              strokeWeight: 4,
              strokeOpacity: 0.85,
            },
          }}
        />
      )}

      {/* Fallback line when directions service blocked by key restrictions */}
      {!directions && requested && (
        <Polyline
          path={[{ lat: origin.lat, lng: origin.lng }, { lat: destination.lat, lng: destination.lng }]}
          options={{
            strokeColor: '#f59e0b',
            strokeWeight: 3,
            strokeOpacity: 0.8,
            strokeDasharray: '8 4',
          }}
        />
      )}
    </>
  )
})

Directions.displayName = 'Directions'

export default Directions
