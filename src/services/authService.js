import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from './firebase'

export const registerUser = async ({ email, password, name, role = 'user' }) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  const user = userCredential.user

  await updateProfile(user, { displayName: name })

  const userData = {
    id: user.uid,
    name,
    email,
    phone: '',
    photoURL: '',
    role,
    status: 'active',
    createdAt: serverTimestamp(),
  }

  await setDoc(doc(db, 'users', user.uid), userData)

  return { user, userData }
}

export const loginUser = async ({ email, password }) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  const user = userCredential.user

  let userDoc
  try {
    userDoc = await getDoc(doc(db, 'users', user.uid))
  } catch (err) {
    if (err.code === 'permission-denied') {
      throw new Error(`Missing or insufficient permissions (${err.code}). Check Firestore security rules and the user profile document for UID ${user.uid}.`)
    }
    throw err
  }

  if (!userDoc.exists()) {
    // Auto-create a user profile if Auth user exists but Firestore document was removed.
    const userData = {
      id: user.uid,
      name: user.displayName || '',
      email: user.email || '',
      phone: '',
      photoURL: user.photoURL || '',
      role: 'user',
      status: 'active',
      createdAt: serverTimestamp(),
    }

    await setDoc(doc(db, 'users', user.uid), userData)
    return { user, userData }
  }

  const userData = userDoc.data()

  if (userData.status === 'blocked') {
    await signOut(auth)
    throw new Error('Your account has been blocked. Please contact support.')
  }

  return { user, userData }
}

export const logoutUser = async () => {
  await signOut(auth)
}

export const getCurrentUserData = async (uid) => {
  const userDoc = await getDoc(doc(db, 'users', uid))
  if (userDoc.exists()) {
    return userDoc.data()
  }
  return null
}

export const subscribeToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, callback)
}

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  const result = await signInWithPopup(auth, provider)
  const user = result.user

  let userDoc
  try {
    userDoc = await getDoc(doc(db, 'users', user.uid))
  } catch (err) {
    if (err.code === 'permission-denied') {
      throw new Error(`Missing or insufficient permissions. Check Firestore security rules.`)
    }
    throw err
  }

  if (!userDoc.exists()) {
    // Auto-create a user profile for first-time Google login
    const userData = {
      id: user.uid,
      name: user.displayName || '',
      email: user.email || '',
      phone: '',
      photoURL: user.photoURL || '',
      role: 'user',
      status: 'active',
      createdAt: serverTimestamp(),
    }
    await setDoc(doc(db, 'users', user.uid), userData)
    return { user, userData }
  }

  const userData = userDoc.data()

  if (userData.status === 'blocked') {
    await signOut(auth)
    throw new Error('Your account has been blocked. Please contact support.')
  }

  return { user, userData }
}

export const registerWithGoogle = async (role = 'user') => {
  const provider = new GoogleAuthProvider()
  const result = await signInWithPopup(auth, provider)
  const user = result.user

  const userData = {
    id: user.uid,
    name: user.displayName || '',
    email: user.email || '',
    phone: '',
    photoURL: user.photoURL || '',
    role,
    status: 'active',
    createdAt: serverTimestamp(),
  }

  // Check if user already exists
  const userDoc = await getDoc(doc(db, 'users', user.uid))
  if (!userDoc.exists()) {
    await setDoc(doc(db, 'users', user.uid), userData)
  }

  return { user, userData }
}
