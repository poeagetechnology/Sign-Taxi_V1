import { updateDoc, doc, serverTimestamp } from 'firebase/firestore'
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
  }

  async startDispatching(onStatusChange) {
    /**
     * Start dispatching to drivers in queue automatically
     * onStatusChange: callback when status changes
     */
    this.onStatusChange = onStatusChange

    try {
      await this._dispatchToNextDriver()
    } catch (err) {
      console.error('Error starting dispatch:', err)
      throw err
    }
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
    console.log(`[Dispatch] Sending to driver ${currentDriver.driverId} (${this.currentIndex + 1}/${this.dispatchQueue.length})`)

    try {
      // Send request to driver
      await sendDispatchToDriver(this.rideId, currentDriver.driverId)
      console.log(`[Dispatch] ✅ Request sent to ${currentDriver.driverId}`)

      // Update ride status
      await updateDoc(doc(db, 'rides', this.rideId), {
        status: 'searching',
        currentDriverId: currentDriver.driverId, // Ensure currentDriverId is set
        dispatchAttempt: this.currentIndex + 1,
        updatedAt: serverTimestamp(),
      })
      console.log(`[Dispatch] ✅ Ride updated with currentDriverId=${currentDriver.driverId}`)

      this.onStatusChange?.({
        status: 'searching',
        currentDriver: currentDriver.driverId,
        attempt: this.currentIndex + 1,
      })

      // Set timeout for this driver
      const timeoutId = setTimeout(async () => {
        console.log(`Dispatch timeout for driver ${currentDriver.driverId}`)
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
    console.log(`Moving to next driver (timeout: ${driverId})`)

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
    this.timeoutIds.forEach(id => clearTimeout(id))
    this.timeoutIds = []

    console.log(`Ride ${this.rideId} accepted by driver ${driverId}`)
  }

  rejectByDriver(driverId) {
    /**
     * Driver rejected: move to next automatically
     */
    console.log(`Driver ${driverId} rejected ride`)

    // Clear timeout for this driver
    this.timeoutIds.forEach(id => clearTimeout(id))
    this.timeoutIds = []

    this.currentIndex++
    this._dispatchToNextDriver()
  }

  cancel() {
    /**
     * Cancel dispatch process and clear timeouts
     */
    this.timeoutIds.forEach(id => clearTimeout(id))
    this.timeoutIds = []
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
    console.log('Initializing dispatch for ride:', rideId)

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
