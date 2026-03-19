import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from './firebase'

export const createRide = async (data) => {
  const rideData = {
    userId: data.userId,
    driverId: null,
    pickupLat: data.pickupLat,
    pickupLng: data.pickupLng,
    pickupAddress: data.pickupAddress,
    dropLat: data.dropLat,
    dropLng: data.dropLng,
    dropAddress: data.dropAddress,
    fare: data.fare,
    status: 'searching', // Start in 'searching' status for dispatch system
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }
  const docRef = await addDoc(collection(db, 'rides'), rideData)
  return { id: docRef.id, ...rideData }
}

export const getRideById = async (rideId) => {
  const docRef = doc(db, 'rides', rideId)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() }
  }
  return null
}

export const getAllRides = async () => {
  const q = query(collection(db, 'rides'), orderBy('createdAt', 'desc'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const getUserRides = async (userId) => {
  const q = query(
    collection(db, 'rides'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const getDriverRides = async (driverId) => {
  const q = query(
    collection(db, 'rides'),
    where('driverId', '==', driverId),
    orderBy('createdAt', 'desc')
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const getPendingRides = async () => {
  const q = query(
    collection(db, 'rides'),
    where('status', '==', 'requested'),
    orderBy('createdAt', 'desc')
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const updateRideStatus = async (rideId, status, extra = {}) => {
  await updateDoc(doc(db, 'rides', rideId), {
    status,
    ...extra,
    updatedAt: serverTimestamp(),
  })
}

export const acceptRide = async (rideId, driverId) => {
  await updateDoc(doc(db, 'rides', rideId), {
    driverId,
    status: 'accepted',
    updatedAt: serverTimestamp(),
  })
}

export const subscribeToRide = (rideId, callback) => {
  return onSnapshot(doc(db, 'rides', rideId), (docSnap) => {
    if (docSnap.exists()) {
      callback({ id: docSnap.id, ...docSnap.data() })
    }
  })
}

export const subscribeToPendingRides = (callback) => {
  const q = query(
    collection(db, 'rides'),
    where('status', '==', 'requested'),
    orderBy('createdAt', 'desc')
  )
  return onSnapshot(q, (snapshot) => {
    const rides = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    callback(rides)
  })
}

export const subscribeToUserActiveRide = (userId, callback) => {
  const q = query(
    collection(db, 'rides'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  )
  return onSnapshot(q, (snapshot) => {
    if (!snapshot.empty) {
      const activeRide = snapshot.docs.find(doc => {
        const status = doc.data().status
        return ['requested', 'accepted', 'started'].includes(status)
      })
      if (activeRide) {
        callback({ id: activeRide.id, ...activeRide.data() })
      } else {
        callback(null)
      }
    } else {
      callback(null)
    }
  })
}

export const cancelRide = async (rideId) => {
  await updateDoc(doc(db, 'rides', rideId), {
    status: 'cancelled',
    updatedAt: serverTimestamp(),
  })
}
