import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from './firebase'

export const createDriverProfile = async (userId, data) => {
  const driverData = {
    id: userId,
    userId,
    name: data.name,
    phone: data.phone,
    vehicleDetails: {
      make: data.vehicleMake || '',
      model: data.vehicleModel || '',
      plate: data.vehiclePlate || '',
    },
    isApproved: false,
    isOnline: false,
    documents: {
      licenseURL: '',
      idURL: '',
    },
    createdAt: serverTimestamp(),
  }
  await setDoc(doc(db, 'drivers', userId), driverData)
  return driverData
}

export const getDriverById = async (driverId) => {
  const docRef = doc(db, 'drivers', driverId)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() }
  }
  return null
}

export const getAllDrivers = async () => {
  const q = query(collection(db, 'drivers'), orderBy('createdAt', 'desc'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const getOnlineDrivers = async () => {
  const q = query(
    collection(db, 'drivers'),
    where('isOnline', '==', true),
    where('isApproved', '==', true)
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const updateDriverProfile = async (driverId, data) => {
  await updateDoc(doc(db, 'drivers', driverId), { ...data, updatedAt: serverTimestamp() })
}

export const approveDriver = async (driverId) => {
  await updateDoc(doc(db, 'drivers', driverId), { isApproved: true })
  await updateDoc(doc(db, 'users', driverId), { status: 'active' })
}

export const rejectDriver = async (driverId) => {
  await updateDoc(doc(db, 'drivers', driverId), { isApproved: false })
}

export const toggleDriverOnlineStatus = async (driverId, isOnline) => {
  // FIX 2: Update both drivers collection AND driver_locations to keep them synced
  await updateDoc(doc(db, 'drivers', driverId), { 
    isOnline,
    updatedAt: serverTimestamp(),
  })
  
  // Also update driver_locations to prevent race conditions
  try {
    await updateDoc(doc(db, 'driver_locations', driverId), {
      isOnline,
      updatedAt: serverTimestamp(),
    })
  } catch (err) {
    console.warn('Could not update driver_locations isOnline status:', err)
    // This is non-fatal - location broadcast will sync it eventually
  }
}

export const uploadDriverDocument = async (driverId, file, docType) => {
  const storageRef = ref(storage, `drivers/${driverId}/${docType}.jpg`)
  await uploadBytes(storageRef, file)
  const downloadURL = await getDownloadURL(storageRef)
  const field = docType === 'license' ? 'documents.licenseURL' : 'documents.idURL'
  await updateDoc(doc(db, 'drivers', driverId), { [field]: downloadURL })
  return downloadURL
}
