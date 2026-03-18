import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from './firebase'

export const getUserById = async (userId) => {
  const docRef = doc(db, 'users', userId)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() }
  }
  return null
}

export const getAllUsers = async () => {
  const q = query(collection(db, 'users'), orderBy('createdAt', 'desc'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const updateUserProfile = async (userId, data) => {
  const docRef = doc(db, 'users', userId)
  await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() })
}

export const uploadUserPhoto = async (userId, file) => {
  const storageRef = ref(storage, `users/${userId}/profile.jpg`)
  await uploadBytes(storageRef, file)
  const downloadURL = await getDownloadURL(storageRef)
  await updateDoc(doc(db, 'users', userId), { photoURL: downloadURL })
  return downloadURL
}

export const blockUser = async (userId) => {
  await updateDoc(doc(db, 'users', userId), { status: 'blocked' })
}

export const unblockUser = async (userId) => {
  await updateDoc(doc(db, 'users', userId), { status: 'active' })
}
