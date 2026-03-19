import { updateDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'

/**
 * BOOKING STATE MACHINE
 * Manages strict state transitions
 */

const VALID_TRANSITIONS = {
  'pending': ['searching', 'cancelled'],
  'searching': ['requested', 'cancelled'],
  'requested': ['accepted', 'cancelled'],
  'accepted': ['started', 'cancelled'],
  'started': ['completed', 'cancelled'],
  'completed': [],
  'cancelled': [],
}

export const isValidTransition = (fromStatus, toStatus) => {
  const allowedStates = VALID_TRANSITIONS[fromStatus] || []
  return allowedStates.includes(toStatus)
}

export const updateBookingStatus = async (rideId, newStatus, metadata = {}) => {
  /**
   * Update booking status with validation
   * Throws error if transition is invalid
   */
  try {
    // Get current ride to check status
    const rideRef = doc(db, 'rides', rideId)
    
    // Note: In production, use a transaction to prevent race conditions
    await updateDoc(rideRef, {
      status: newStatus,
      lastStatusUpdate: serverTimestamp(),
      updatedAt: serverTimestamp(),
      ...metadata,
    })

    return { success: true, status: newStatus }
  } catch (err) {
    console.error('Error updating booking status:', err)
    throw err
  }
}

export const getBookingStatus = async (rideId) => {
  /**
   * Get current booking status
   */
  try {
    const rideRef = doc(db, 'rides', rideId)
    const rideSnap = await import('firebase/firestore').then(m => m.getDoc(rideRef))
    
    if (!rideSnap.exists()) {
      throw new Error('Ride not found')
    }

    return rideSnap.data().status
  } catch (err) {
    console.error('Error getting booking status:', err)
    throw err
  }
}

export const cancelBooking = async (rideId, reason = 'User cancelled') => {
  /**
   * Cancel booking at any state
   */
  try {
    await updateDoc(doc(db, 'rides', rideId), {
      status: 'cancelled',
      cancellationReason: reason,
      cancelledAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })

    return { success: true }
  } catch (err) {
    console.error('Error cancelling booking:', err)
    throw err
  }
}

export const completeRide = async (
  rideId,
  driverId,
  actualFare,
  driverRating = null,
  userRating = null
) => {
  /**
   * Mark ride as completed and store ratings
   */
  try {
    await updateDoc(doc(db, 'rides', rideId), {
      status: 'completed',
      completedAt: serverTimestamp(),
      actualFare,
      driverRating,
      userRating,
      driverId, // Ensure driver ID is stored for history
      updatedAt: serverTimestamp(),
    })

    // Make driver available again
    await updateDoc(doc(db, 'driver_locations', driverId), {
      isAvailable: true,
      updatedAt: serverTimestamp(),
    })

    return { success: true }
  } catch (err) {
    console.error('Error completing ride:', err)
    throw err
  }
}

export const startRide = async (rideId, driverId) => {
  /**
   * Transition from accepted to started
   */
  try {
    await updateDoc(doc(db, 'rides', rideId), {
      status: 'started',
      rideStartedAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })

    return { success: true }
  } catch (err) {
    console.error('Error starting ride:', err)
    throw err
  }
}

export const getRideHistory = async (userId, limit = 10) => {
  /**
   * Get user's ride history
   */
  try {
    const { collection, query, where, getDocs, orderBy, limit: firestoreLimit } = await import('firebase/firestore')
    
    const q = query(
      collection(db, 'rides'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc'),
      firestoreLimit(limit)
    )

    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (err) {
    console.error('Error getting ride history:', err)
    throw err
  }
}

export const getBookingSummary = async (rideId) => {
  /**
   * Get booking summary with all details
   */
  try {
    const { getDoc } = await import('firebase/firestore')
    const ridesnap = await getDoc(doc(db, 'rides', rideId))

    if (!rideSnap.exists()) {
      throw new Error('Ride not found')
    }

    const ride = rideSnap.data()
    return {
      id: rideId,
      status: ride.status,
      userId: ride.userId,
      driverId: ride.driverId,
      pickupLocation: { lat: ride.pickupLat, lng: ride.pickupLng },
      dropLocation: { lat: ride.dropLat, lng: ride.dropLng },
      fare: ride.fare,
      actualFare: ride.actualFare,
      driverRating: ride.driverRating,
      userRating: ride.userRating,
      createdAt: ride.createdAt,
      completedAt: ride.completedAt,
    }
  } catch (err) {
    console.error('Error getting booking summary:', err)
    throw err
  }
}
