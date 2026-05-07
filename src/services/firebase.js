import { initializeApp } from 'firebase/app'
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Validate configuration
if (!firebaseConfig.apiKey || firebaseConfig.apiKey.startsWith('undefined')) {
  console.error('Firebase API key is missing or invalid. Please check your .env file.')
}

let app
try {
  app = initializeApp(firebaseConfig)
} catch (error) {
  console.error('Firebase initialization error:', error)
  throw new Error(`Firebase initialization failed: ${error.message}`)
}

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

// Set persistence to local storage for better UX
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.warn('Error setting Firebase persistence:', error)
})

export default app
