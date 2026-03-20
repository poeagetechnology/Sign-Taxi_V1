import { updateDoc, doc, serverTimestamp, onSnapshot } from 'firebase/firestore'
import { db } from './firebase'
import { sendDispatchToDriver, updateDispatchStatus } from './dispatchService'
import { findNearbyDrivers, enrichDriversWithRating } from './matchingService'

/**
 * REAL-TIME DISPATCH MANAGER
 * Handles automatic driver rotation with timeouts
 */

const DISPATCH_TIMEOUT_MS = 10000 // 10 seconds per driver
const MAX_RETRIES = 3

export class DispatchManager {
  constructor(rideId, dispatchQueue) {
    this.rideId = rideId
    this.dispatchQueue = dispatchQueue
    this.currentIndex = 0
    this.timeoutIds = []
    this.onStatusChange = null
    this.unsubscribeRideListener = null
  }

  async startDispatching(onStatusChange) {
    /**
     * Start dispatching to drivers in queue automatically
     * onStatusChange: callback when status changes
     */
    this.onStatusChange = onStatusChange

    try {
      // Listen for ride status changes (e.g., when driver accepts)
      this._setupRideStatusListener()
      
      await this._dispatchToNextDriver()
    } catch (err) {
      console.error('Error starting dispatch:', err)
      throw err
    }
  }

  _setupRideStatusListener() {
    /**
     * Listen for ride status changes in real-time
     * If ride becomes 'accepted', stop the dispatch process
     */
    const rideRef = doc(db, 'rides', this.rideId)
    
    this.unsubscribeRideListener = onSnapshot(rideRef, (snapshot) => {
      if (!snapshot.exists()) return
      
      const rideData = snapshot.data()
      
      // If ride was accepted by a driver, stop dispatching
      if (rideData.status === 'accepted') {
        this._clearAllTimeouts()
      }
      
      // If ride was cancelled externally, stop dispatching
      if (rideData.status === 'cancelled' && this.timeoutIds.length > 0) {
        this._clearAllTimeouts()
      }
    })
  }

  _clearAllTimeouts() {
    /**
     * Clear all pending timeouts
     */
    this.timeoutIds.forEach(id => clearTimeout(id))
    this.timeoutIds = []
  }

  async _dispatchToNextDriver() {
    /**
     * Internal: dispatch to next driver in queue
     */
    if (this.currentIndex >= this.dispatchQueue.length) {
      // No more drivers available
      await this._handleNoDriversAvailable()
      return
    }

    const currentDriver = this.dispatchQueue[this.currentIndex]

    try {
      // Send request to driver
      await sendDispatchToDriver(this.rideId, currentDriver.driverId)

      // Update ride status
      await updateDoc(doc(db, 'rides', this.rideId), {
        status: 'searching',
        currentDriverId: currentDriver.driverId, // Ensure currentDriverId is set
        dispatchAttempt: this.currentIndex + 1,
        updatedAt: serverTimestamp(),
      })

      this.onStatusChange?.({
        status: 'searching',
        currentDriver: currentDriver.driverId,
        attempt: this.currentIndex + 1,
      })

      // Set timeout for this driver
      const timeoutId = setTimeout(async () => {
        await this._handleDispatchTimeout(currentDriver.driverId)
      }, DISPATCH_TIMEOUT_MS)

      this.timeoutIds.push(timeoutId)
    } catch (err) {
      console.error('Error dispatching to driver:', err)
      await this._handleDispatchError()
    }
  }

  async _handleDispatchTimeout(driverId) {
    /**
     * Handle timeout: move to next driver
     */
    // Update dispatch status
    await updateDispatchStatus(this.rideId, driverId, 'timeout')

    // Clear timeout and move to next
    this.currentIndex++
    await this._dispatchToNextDriver()
  }

  async _handleNoDriversAvailable() {
    /**
     * No drivers available: set ride status to cancelled/failed
     */
    await updateDoc(doc(db, 'rides', this.rideId), {
      status: 'cancelled',
      cancellationReason: 'No drivers available',
      updatedAt: serverTimestamp(),
    })

    this.onStatusChange?.({
      status: 'cancelled',
      reason: 'No drivers available',
    })
  }

  async _handleDispatchError() {
    /**
     * Handle dispatch error: move to next driver or cancel
     */
    this.currentIndex++

    if (this.currentIndex >= this.dispatchQueue.length) {
      await this._handleNoDriversAvailable()
    } else {
      await this._dispatchToNextDriver()
    }
  }

  confirmAcceptance(driverId) {
    /**
     * Driver accepted: clear all timeouts
     */
    this._clearAllTimeouts()
  }

  rejectByDriver(driverId) {
    /**
     * Driver rejected: move to next automatically
     */
    // Clear all timeouts for rejection flow
    this._clearAllTimeouts()

    this.currentIndex++
    this._dispatchToNextDriver()
  }

  cancel() {
    /**
     * Cancel dispatch process and clear timeouts
     */
    this._clearAllTimeouts()
    
    // Unsubscribe from ride status listener
    if (this.unsubscribeRideListener) {
      this.unsubscribeRideListener()
      this.unsubscribeRideListener = null
    }
    
    this.onStatusChange = null
  }
}

export const initializeDispatch = async (
  rideId,
  pickupLat,
  pickupLng,
  radiusKm = 3
) => {
  /**
   * Initialize dispatch for a new ride
   * 1. Find nearby drivers
   * 2. Rank them
   * 3. Create dispatch queue
   * 4. Start dispatcher
   */
  try {
    // Find nearby drivers
    const nearbyDrivers = await findNearbyDrivers(pickupLat, pickupLng, radiusKm)

    if (nearbyDrivers.length === 0) {
      throw new Error('No drivers available in this area')
    }

    // Enrich with ratings
    const enrichedDrivers = await enrichDriversWithRating(nearbyDrivers)

    // Create dispatch queue
    const dispatchQueue = enrichedDrivers.slice(0, 10).map((driver, index) => ({
      driverId: driver.id,
      distance: driver.distance,
      rating: driver.rating,
      order: index,
      status: 'pending',
    }))

    // Store queue in ride document
    await updateDoc(doc(db, 'rides', rideId), {
      dispatchQueue,
      searchRadius: radiusKm,
      availableDriverCount: enrichedDrivers.length,
      updatedAt: serverTimestamp(),
    })

    // Create and start dispatcher
    const dispatcher = new DispatchManager(rideId, dispatchQueue)

    return {
      dispatcher,
      driverCount: enrichedDrivers.length,
      dispatchQueue,
    }
  } catch (err) {
    console.error('Error initializing dispatch:', err)
    throw err
  }
}
