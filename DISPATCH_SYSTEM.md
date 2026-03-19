# Real-Time Dispatch System Documentation

## Overview
This document describes the new real-time driver dispatch system for the Sign-Taxi application, similar to Uber/Ola architecture.

## Architecture

### Core Components

#### 1. **dispatchService.js** - Queue Management
- `createDispatchQueue()` - Create prioritized driver queue
- `sendDispatchToDriver()` - Send request to specific driver
- `updateDispatchStatus()` - Track dispatch status
- `subscribeToDispatchStatus()` - Real-time dispatch status listener
- `subscribeToDriverRequests()` - Driver request listener

#### 2. **matchingService.js** - Driver Matching
- `findNearbyDrivers()` - Find drivers within radius (3km default)
- `calculateDistance()` - Haversine distance calculation
- `getDriverRating()` - Fetch driver's average rating
- `enrichDriversWithRating()` - Add ratings to driver list
- `rankDriversByScore()` - Score drivers by: distance (50%), rating (30%), acceptance rate (20%)

#### 3. **dispatchManager.js** - Dispatch Orchestration
- `DispatchManager` class - Manages dispatch lifecycle with timeouts
- `initializeDispatch()` - Initialize dispatch process
- Automatic failover to next driver after 10-second timeout

#### 4. **bookingStateManager.js** - State Machine
Valid state transitions:
```
pending → searching → requested → accepted → started → completed
              ↓                          ↓            ↓
           cancelled              cancelled        cancelled
```

#### 5. **useDispatch.js** - React Hooks
- `useDispatch()` - High-level booking dispatch hook
- `useDriverDispatchRequests()` - Driver receives requests
- `useBookingTracking()` - Real-time booking status

---

## Booking Flow

### User Perspective (BookRide)

```
1. User selects pickup & destination
2. Click "Book Ride"
3. System finds nearby drivers within 3km
4. Dispatch begins:
   - Send request to closest driver (10s timeout)
   - If no response → next driver
   - Repeat until acceptance or no drivers left
5. Driver accepts
6. UI shows "Driver on the way"
7. Live location tracking begins
8. Driver arrives → "Driver is here"
9. Ride starts
10. Ride completes
11. Rating & payment
```

### Driver Perspective (ActiveRequests)

```
1. Driver enables "Online" mode
2. Location broadcasts every 5 seconds
3. Driver receives incoming request notification
4. Request shows:
   - Pickup location
   - Drop location
   - Distance
   - Estimated fare
5. Driver taps "Accept" or "Reject"
   - Accept: ride status → "accepted", driver marked unavailable
   - Reject: system auto-moves to next driver
6. Route navigation to pickup
7. Start ride
8. Navigate to destination
9. Complete ride
10. Driver becomes available again
```

---

## Data Models

### Ride Document
```javascript
{
  id: "ride_id",
  userId: "user_id",
  driverId: "driver_id",  // Null until accepted
  
  // Locations
  pickupLat: 28.6329,
  pickupLng: 77.2197,
  pickupAddress: "Delhi, India",
  dropLat: 28.7041,
  dropLng: 77.1025,
  dropAddress: "Gurugram, India",
  
  // Pricing
  fare: 450,
  actualFare: 450,
  baseFare: 50,
  perKmRate: 15,
  
  // Status
  status: "completed",  // pending|searching|requested|accepted|started|completed|cancelled
  
  // Dispatch
  dispatchQueue: [{
    driverId: "driver_1",
    distance: 2.3,
    rating: 4.8,
    order: 0,
    status: "pending|sent|accepted|rejected|timeout"
  }],
  dispatchAttempt: 2,
  availableDriverCount: 15,
  searchRadius: 3,
  
  // Dispatch Log
  dispatchLog: {
    currentDriver: "driver_id",
    sentAt: timestamp,
    retries: 2
  },
  
  // Ratings
  driverRating: 5,
  userRating: 5,
  
  // Timestamps
  createdAt: timestamp,
  acceptedAt: timestamp,
  rideStartedAt: timestamp,
  completedAt: timestamp,
  cancelledAt: timestamp,
  updatedAt: timestamp
}
```

### Driver Location Document
```javascript
{
  id: "driver_id",
  driverId: "driver_id",
  lat: 28.6329,
  lng: 77.2197,
  isOnline: true,
  isAvailable: true,
  updatedAt: timestamp
}
```

---

## Key Features

### 1. **Smart Queue Management**
- Drivers ranked by distance, rating, acceptance rate
- Limited to top 10 drivers to avoid overload
- Automatic failover with 10-second timeout per driver

### 2. **Real-Time Tracking**
- Driver location broadcast every 5 seconds
- User sees live driver location
- Dynamic ETA calculation

### 3. **State Validation**
- Strict state machine prevents invalid transitions
- Transaction-based updates prevent race conditions (TODO)

### 4. **Performance Optimization**
- Client-side geohashing for quick distance filtering
- Batch rating fetches to reduce Firestore reads
- Subscription-based updates instead of polling

---

## Usage Examples

### User Books a Ride

```javascript
import { useDispatch } from '../hooks/useDispatch'
import { useBookingTracking } from '../hooks/useDispatch'

function BookRide({ pickupLat, pickupLng, dropLat, dropLng }) {
  const [rideId, setRideId] = useState(null)
  
  const { dispatchState, startDispatch, stopDispatch } = useDispatch(
    rideId,
    pickupLat,
    pickupLng,
    (update) => {
      console.log('Dispatch status:', update.status)
    }
  )

  const { bookingInfo } = useBookingTracking(rideId)

  const handleBookRide = async () => {
    // Create ride document
    const ride = await createRide({
      userId,
      pickupLat,
      pickupLng,
      pickupAddress,
      dropLat,
      dropLng,
      dropAddress,
      fare: calculateFare(distance)
    })

    setRideId(ride.id)
    
    // Start dispatch
    startDispatch()
  }

  return (
    <>
      <button onClick={handleBookRide}>Book Ride</button>
      
      {dispatchState.status === 'searching' && (
        <p>Finding drivers... (Attempt {dispatchState.attemptNumber})</p>
      )}
      
      {dispatchState.status === 'assigned' && (
        <p>Driver {dispatchState.currentDriver} accepted!</p>
      )}
      
      {bookingInfo && (
        <>
          <p>Status: {bookingInfo.status}</p>
          <DriverMap position={bookingInfo.driverLocation} />
        </>
      )}
    </>
  )
}
```

### Driver Receives Requests

```javascript
import { useDriverDispatchRequests } from '../hooks/useDispatch'

function DriverRequests({ driverId }) {
  const { incomingRequest, respondToRequest } = useDriverDispatchRequests(driverId)

  if (!incomingRequest) {
    return <p>Waiting for requests...</p>
  }

  return (
    <div>
      <h3>Incoming Request</h3>
      <p>Pickup: {incomingRequest.pickupAddress}</p>
      <p>Drop: {incomingRequest.dropAddress}</p>
      <p>Distance: {incomingRequest.distance} km</p>
      <p>Fare: ₹{incomingRequest.fare}</p>
      
      <button onClick={() => respondToRequest(incomingRequest.id, 'accept')}>
        Accept
      </button>
      <button onClick={() => respondToRequest(incomingRequest.id, 'reject')}>
        Reject
      </button>
    </div>
  )
}
```

---

## Firestore Rules

```javascript
// allow drivers to see their own location
match /driver_locations/{driverId} {
  allow read: if request.auth.uid == resource.data.driverId;
  allow write: if request.auth.uid == resource.data.driverId;
}

// allow users to see their rides
match /rides/{rideId} {
  allow read: if request.auth.uid == resource.data.userId 
              || request.auth.uid == resource.data.driverId;
  allow create: if request.auth.uid == resource.data.userId;
  allow update: if request.auth.uid == resource.data.userId 
                 || request.auth.uid == resource.data.driverId;
}
```

---

## Configuration

```javascript
// dispatchManager.js
const DISPATCH_TIMEOUT_MS = 10000  // 10 seconds per driver
const MAX_QUEUE_SIZE = 10

// matchingService.js
const DEFAULT_SEARCH_RADIUS = 3    // kilometers
const DEFAULT_SPEED = 40           // km/h for ETA

// locationService.js
const LOCATION_UPDATE_INTERVAL = 5000  // 5 seconds
```

---

## TODO / Future Improvements

1. **GeoHash Indexing** - Replace client-side filtering with indexed GeoHash for massive scale
2. **Surge Pricing** - Dynamic pricing based on demand
3. **Express Rides** - Premium drivers, shared rides
4. **Ride Cancellation Penalties** - Charge users/drivers for cancellations
5. **Insurance & Safety** - Emergency alerts, ride sharing
6. **Transaction Safety** - Implement Firestore transactions for atomic updates
7. **Analytics** - Track dispatch success rate, avg wait time, driver utilization
8. **Payment Integration** - Stripe/Razorpay integration

---

## Testing Checklist

- [ ] User books ride → dispatch starts
- [ ] Driver receives request notification
- [ ] Driver accepts → ride status updates to "accepted"
- [ ] Timeout works → moves to next driver after 10s
- [ ] Driver rejects → auto-move to next driver
- [ ] No drivers available → ride cancelled
- [ ] Live tracking updates every 5s
- [ ] Ride completion works → driver becomes available
- [ ] Rating flow works after completion
