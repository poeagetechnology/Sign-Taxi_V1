import {
  doc,
  setDoc,
  onSnapshot,
  collection,
  query,
  where,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from './firebase'

const locationIntervals = new Map()

const persistDriverLocation = async (driverId, location, extra = {}) => {
  await setDoc(doc(db, 'driver_locations', driverId), {
    driverId,
    lat: location.lat,
    lng: location.lng,
    address: location.address || null,
    isOnline: extra.isOnline ?? true,
    source: extra.source || 'gps',
    updatedAt: serverTimestamp(),
  }, { merge: true })
}

export const updateDriverLocation = async (driverId, location, extra = {}) => {
  if (!driverId || typeof location?.lat !== 'number' || typeof location?.lng !== 'number') {
    throw new Error('A valid driver location is required')
  }

  await persistDriverLocation(driverId, location, extra)
}

export const startLocationBroadcast = (driverId, onError, options = {}) => {
  if (!navigator.geolocation) {
    onError?.('Geolocation is not supported by your browser.')
    return
  }

  if (locationIntervals.has(driverId)) {
    clearInterval(locationIntervals.get(driverId))
  }

  const broadcast = async () => {
    const overrideLocation = options.getOverrideLocation?.()

    if (overrideLocation?.lat && overrideLocation?.lng) {
      try {
        await persistDriverLocation(driverId, overrideLocation, {
          isOnline: true,
          source: 'manual',
        })
        options.onLocationUpdate?.(overrideLocation)
      } catch (err) {
        console.error('Manual location broadcast error:', err)
        onError?.(err.message)
      }
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude: lat, longitude: lng } = position.coords
        try {
          const nextLocation = { lat, lng }
          await persistDriverLocation(driverId, nextLocation, {
            isOnline: true,
            source: 'gps',
          })
          options.onLocationUpdate?.(nextLocation)
        } catch (err) {
          console.error('Location broadcast error:', err)
        }
      },
      (error) => {
        console.error('Geolocation error:', error)
        onError?.(error.message)
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 5000 }
    )
  }

  broadcast()
  const intervalId = setInterval(broadcast, 7000)
  locationIntervals.set(driverId, intervalId)
}

export const stopLocationBroadcast = async (driverId) => {
  if (locationIntervals.has(driverId)) {
    clearInterval(locationIntervals.get(driverId))
    locationIntervals.delete(driverId)
  }
  try {
    await setDoc(doc(db, 'driver_locations', driverId), {
      driverId,
      isOnline: false,
      updatedAt: serverTimestamp(),
    }, { merge: true })
  } catch (err) {
    console.error('Stop broadcast error:', err)
  }
}

export const subscribeToOnlineDriverLocations = (callback) => {
  const q = query(
    collection(db, 'driver_locations'),
    where('isOnline', '==', true)
  )
  return onSnapshot(q, (snapshot) => {
    const locations = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    callback(locations)
  })
}

export const subscribeToDriverLocation = (driverId, callback) => {
  return onSnapshot(doc(db, 'driver_locations', driverId), (docSnap) => {
    if (docSnap.exists()) {
      callback(docSnap.data())
    }
  })
}

export const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation not supported'))
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => reject(err),
      { enableHighAccuracy: true, timeout: 10000 }
    )
  })
}

export const reverseGeocode = async (lat, lng, apiKey) => {
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
    )
    const data = await res.json()
    if (data.results && data.results.length > 0) {
      return data.results[0].formatted_address
    }
    return `${lat.toFixed(5)}, ${lng.toFixed(5)}`
  } catch {
    return `${lat.toFixed(5)}, ${lng.toFixed(5)}`
  }
}

export const geocodeAddress = async (address, apiKey) => {
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`
    )
    const data = await res.json()
    const match = data.results?.[0]

    if (!match?.geometry?.location) {
      return null
    }

    return {
      lat: match.geometry.location.lat,
      lng: match.geometry.location.lng,
      address: match.formatted_address,
    }
  } catch {
    return null
  }
}
