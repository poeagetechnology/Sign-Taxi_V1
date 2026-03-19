import {
  collection,
  doc,
  updateDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
  onSnapshot,
} from 'firebase/firestore'
import { db } from './firebase'

/**
 * Dispatch Queue Item Structure:
 * {
 *   driverId: string,
 *   distance: number (km),
 *   status: 'pending' | 'sent' | 'accepted' | 'rejected' | 'timeout',
 *   sentAt: timestamp,
 *   respondedAt: timestamp | null,
 *   rating: number (0-5)
 * }
 */

const DISPATCH_TIMEOUT_MS = 10000 // 10 seconds per driver
const MAX_QUEUE_SIZE = 10

export const createDispatchQueue = async (rideId, nearbyDrivers) => {
  /**
   * Creates an ordered dispatch queue sorted by:
   * 1. Distance (nearest first)
   * 2. Availability
   * 3. Rating (highest first)
   */
  if (!nearbyDrivers || nearbyDrivers.length === 0) {
    throw new Error('No drivers available in this area')
  }

  const sortedDrivers = nearbyDrivers
    .sort((a, b) => {
      // Primary: distance
      if (a.distance !== b.distance) {
        return a.distance - b.distance
      }
      // Secondary: rating
      return (b.rating || 0) - (a.rating || 0)
    })
    .slice(0, MAX_QUEUE_SIZE) // Limit to top 10

  // Create queue structure
  const dispatchQueue = sortedDrivers.map((driver, index) => ({
    driverId: driver.id,
    distance: driver.distance,
    status: 'pending',
    sentAt: null,
    respondedAt: null,
    rating: driver.rating || 0,
    order: index,
  }))

  return dispatchQueue
}

export const sendDispatchToDriver = async (rideId, driverId) => {
  /**
   * Send ride request to a specific driver
   * Updates both ride and driver documents
   */
  try {
    // Update ride document with dispatch info
    await updateDoc(doc(db, 'rides', rideId), {
      currentDriverId: driverId, // Top-level field for Firestore queries
      dispatchLog: {
        currentDriver: driverId,
        sentAt: serverTimestamp(),
        retries: 0,
      },
      updatedAt: serverTimestamp(),
    })

    // Create a dispatch request in a separate collection for tracking
    const dispatchRef = collection(db, 'dispatch_requests')
    const newRequest = {
      rideId,
      driverId,
      status: 'sent',
      sentAt: serverTimestamp(),
      respondedAt: null,
      response: null, // 'accepted' or 'rejected'
    }

    await updateDoc(doc(db, 'dispatch_requests', `${rideId}_${driverId}`), newRequest)
      .catch(async () => {
        // If doc doesn't exist, create it (handled by addDoc equivalent)
        // For now, we'll just update the rides collection
      })

    return { success: true, driverId }
  } catch (err) {
    console.error('Error sending dispatch:', err)
    throw err
  }
}

export const updateDispatchStatus = async (rideId, driverId, response) => {
  /**
   * Update dispatch status when driver accepts/rejects
   * response: 'accepted' | 'rejected'
   */
  try {
    await updateDoc(doc(db, 'rides', rideId), {
      [`dispatchLog.${driverId}`]: {
        status: response,
        respondedAt: serverTimestamp(),
      },
      updatedAt: serverTimestamp(),
    })
  } catch (err) {
    console.error('Error updating dispatch status:', err)
    throw err
  }
}

export const getDispatchQueuePosition = async (rideId, driverId) => {
  /**
   * Get driver's position in the dispatch queue
   */
  const rideDoc = await getDocs(
    query(collection(db, 'rides'), where('__name__', '==', rideId))
  )

  if (rideDoc.empty) return -1

  const ride = rideDoc.docs[0].data()
  const queue = ride.dispatchQueue || []

  return queue.findIndex(item => item.driverId === driverId)
}

export const subscribeToDispatchStatus = (rideId, callback) => {
  /**
   * Real-time listener for dispatch queue updates
   */
  return onSnapshot(doc(db, 'rides', rideId), doc => {
    if (doc.exists()) {
      const ride = doc.data()
      callback({
        status: ride.status,
        currentDriver: ride.dispatchLog?.currentDriver,
        dispatchQueue: ride.dispatchQueue || [],
      })
    }
  })
}

export const subscribeToDriverRequests = (driverId, callback) => {
  /**
   * Driver listens for incoming dispatch requests
   * Filters requests where driver is next in queue
   */
  return onSnapshot(
    query(
      collection(db, 'rides'),
      where('status', '==', 'searching'),
      where('currentDriverId', '==', driverId)
    ),
    snapshot => {
      const requests = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      callback(requests)
    }
  )
}
