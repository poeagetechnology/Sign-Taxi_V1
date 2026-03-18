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

let locationInterval = null

export const startLocationBroadcast = (driverId, onError) => {
  if (!navigator.geolocation) {
    onError?.('Geolocation is not supported by your browser.')
    return
  }

  const broadcast = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude: lat, longitude: lng } = position.coords
        try {
          await setDoc(doc(db, 'driver_locations', driverId), {
            driverId,
            lat,
            lng,
            isOnline: true,
            updatedAt: serverTimestamp(),
          })
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
  locationInterval = setInterval(broadcast, 7000)
}

export const stopLocationBroadcast = async (driverId) => {
  if (locationInterval) {
    clearInterval(locationInterval)
    locationInterval = null
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
