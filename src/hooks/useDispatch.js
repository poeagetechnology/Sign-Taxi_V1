import { useEffect, useState, useRef, useCallback } from 'react'
import { initializeDispatch } from '../services/dispatchManager'
import { updateBookingStatus, cancelBooking } from '../services/bookingStateManager'
import { subscribeToDispatchStatus, subscribeToDriverRequests, updateDispatchStatus } from '../services/dispatchService'

/**
 * HIGH-LEVEL DISPATCH HOOK
 * Manages the entire dispatch lifecycle
 */

export const useDispatch = (rideId, pickupLat, pickupLng, onDispatchStatusChange) => {
  const [dispatchState, setDispatchState] = useState({
    status: 'idle', // idle, initializing, searching, assigned, failed
    currentDriver: null,
    availableDrivers: 0,
    attemptNumber: 0,
    error: null,
  })

  const dispatcherRef = useRef(null)
  const unsubscribeRef = useRef(null)

  // Initialize dispatch and start matching
  const startDispatch = useCallback(async () => {
    try {
      setDispatchState(prev => ({ ...prev, status: 'initializing' }))

      // Find nearby drivers and create dispatch queue
      const { dispatcher, driverCount, dispatchQueue } = await initializeDispatch(
        rideId,
        pickupLat,
        pickupLng,
        3 // 3km radius
      )

      dispatcherRef.current = dispatcher

      setDispatchState(prev => ({
        ...prev,
        status: 'searching',
        availableDrivers: driverCount,
      }))

      // Start automatic dispatch to drivers
      dispatcher.startDispatching((update) => {
        setDispatchState(prev => ({
          ...prev,
          status: update.status,
          currentDriver: update.currentDriver,
          attemptNumber: update.attempt,
        }))

        onDispatchStatusChange?.(update)
      })

      // Subscribe to status changes
      unsubscribeRef.current = subscribeToDispatchStatus(rideId, (update) => {
        if (update.status === 'accepted') {
          setDispatchState(prev => ({
            ...prev,
            status: 'assigned',
            currentDriver: update.currentDriver,
          }))
        }
      })
    } catch (err) {
      console.error('Dispatch error:', err)
      setDispatchState(prev => ({
        ...prev,
        status: 'failed',
        error: err.message,
      }))

      onDispatchStatusChange?.({
        status: 'failed',
        error: err.message,
      })
    }
  }, [rideId, pickupLat, pickupLng, onDispatchStatusChange])

  // Cancel dispatch
  const stopDispatch = useCallback(async () => {
    if (dispatcherRef.current) {
      dispatcherRef.current.cancel()
    }

    if (unsubscribeRef.current) {
      unsubscribeRef.current()
    }

    try {
      await cancelBooking(rideId, 'User cancelled')
      setDispatchState(prev => ({ ...prev, status: 'cancelled' }))
    } catch (err) {
      console.error('Error cancelling dispatch:', err)
    }
  }, [rideId])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (dispatcherRef.current) {
        dispatcherRef.current.cancel()
      }
      if (unsubscribeRef.current) {
        unsubscribeRef.current()
      }
    }
  }, [])

  return {
    dispatchState,
    startDispatch,
    stopDispatch,
    dispatcher: dispatcherRef.current,
  }
}

/**
 * DRIVER REQUEST LISTENER HOOK
 * For drivers to receive incoming dispatch requests
 */

export const useDriverDispatchRequests = (driverId) => {
  const [incomingRequest, setIncomingRequest] = useState(null)
  const [isResponding, setIsResponding] = useState(false)
  const unsubscribeRef = useRef(null)

  useEffect(() => {
    if (!driverId) return

    // Subscribe to dispatch requests for this driver
    unsubscribeRef.current = subscribeToDriverRequests(driverId, (requests) => {
      if (requests.length > 0) {
        setIncomingRequest(requests[0]) // Take first request
      } else {
        setIncomingRequest(null)
      }
    })

    return () => {
      unsubscribeRef.current?.()
    }
  }, [driverId])

  const respondToRequest = useCallback(
    async (rideId, response) => {
      // response: 'accept' or 'reject'
      setIsResponding(true)

      try {
        if (response === 'accept') {
          // Update ride to accepted
          await updateBookingStatus(rideId, 'accepted', {
            driverId,
            acceptedAt: new Date(),
          })
          setIncomingRequest(null)
        } else {
          // Reject: dispatcher will auto-move to next driver
          await updateDispatchStatus(rideId, driverId, 'rejected')
          setIncomingRequest(null)
        }
      } catch (err) {
        console.error('Error responding to request:', err)
      } finally {
        setIsResponding(false)
      }
    },
    [driverId]
  )

  return {
    incomingRequest,
    isResponding,
    respondToRequest,
  }
}

/**
 * BOOKING STATUS TRACKER HOOK
 * Track real-time updates for a booking
 */

export const useBookingTracking = (rideId) => {
  const [bookingInfo, setBookingInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const unsubscribeRef = useRef(null)

  useEffect(() => {
    if (!rideId) return

    const setupListener = async () => {
      try {
        const { onSnapshot } = await import('firebase/firestore')
        const { doc } = await import('firebase/firestore')
        const { db } = await import('../services/firebase')

        unsubscribeRef.current = onSnapshot(doc(db, 'rides', rideId), (snap) => {
          if (snap.exists()) {
            const ride = snap.data()
            setBookingInfo({
              id: rideId,
              status: ride.status,
              driverId: ride.driverId,
              driverLocation: { lat: ride.driverLat, lng: ride.driverLng },
              pickupLocation: { lat: ride.pickupLat, lng: ride.pickupLng },
              dropLocation: { lat: ride.dropLat, lng: ride.dropLng },
              fare: ride.fare,
              actualFare: ride.actualFare,
              eta: ride.eta,
              dispatchAttempt: ride.dispatchAttempt,
              createdAt: ride.createdAt,
              acceptedAt: ride.acceptedAt,
              startedAt: ride.rideStartedAt,
              completedAt: ride.completedAt,
            })
          }
          setLoading(false)
        })
      } catch (err) {
        console.error('Error setting up booking listener:', err)
        setLoading(false)
      }
    }

    setupListener()

    return () => {
      unsubscribeRef.current?.()
    }
  }, [rideId])

  return { bookingInfo, loading }
}
