# 🚕 SignTaxi - Real-Time Taxi Booking System

A full-stack, production-ready taxi booking application built with **React (Vite)**, **Firebase**, and **Google Maps**. Features real-time GPS tracking, role-based access control, and complete ride lifecycle management.

---

## ✨ Features

| Role | Capabilities |
|------|-------------|
| **Admin** | Dashboard stats, manage users/drivers, view all rides, driver approvals |
| **Driver** | Go online/offline, accept ride requests, live GPS tracking, ride history, earnings |
| **User** | Book rides on map, real-time driver tracking, ride history, payments |

---

## 🏗️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Zustand, React Router v6
- **Maps**: `@react-google-maps/api` with live markers, directions, real-time updates
- **Backend**: Firebase Auth, Firestore, Geolocation API
- **Real-time**: Firestore `onSnapshot` listeners for live ride & location sync

---

## 📋 Complete Workflow

### **1. User Registration & Login**

**Registration:**
```
1. Visit /register
2. Enter name, email, password
3. Select role (admin/driver/user)
4. System creates Firebase Auth user
5. Creates Firestore user document with role
6. Auto-login and redirect based on role
```

**Login:**
```
1. Enter email & password
2. Firebase authenticates
3. System fetches user role from Firestore
4. Redirect based on role:
   - Admin → /admin/dashboard
   - Driver → /driver/dashboard
   - User → /user/home
```

---

### **2. Driver Complete Flow**

**Setup:**
```
1. Register as driver at /register
2. Admin approves at /admin/drivers
3. Driver logs in
4. Go to Dashboard (/driver/dashboard)
5. Click "Go Online" toggle
6. Location broadcasts every 7 seconds
7. Receive incoming ride requests
```

**Accepting a Ride:**
```
1. Incoming request popup appears (/driver/requests)
2. See passenger pickup location on map
3. Validations:
   - Account is approved ✓
   - Driver is online ✓
   - Location available ✓
4. Click "ACCEPT" button
5. Status changes to 'accepted'
6. Auto-navigate to /driver/active
```

**Active Ride Management:**
```
1. View passenger on map with pickup location
2. Route guide shows: Current → Pickup → Dropoff
3. Driver info and contact details visible
4. Click "START RIDE" when arriving at pickup
5. Route guide updates to: Current → Dropoff
6. Click "COMPLETE RIDE" when reaching dropoff
7. Rate passenger (optional)
8. Earnings added to dashboard
9. Ride moved to history
```

---

### **3. Passenger/User Complete Flow**

**Booking a Ride:**
```
1. Go to /user/book
2. Select pickup location:
   - Manual tap on map OR
   - Click "Use My Location" for current position
3. Select drop location (tap on map)
4. System calculates:
   - Distance & route
   - Estimated fare
5. Review and click "CONFIRM RIDE"
6. Dispatch system engages:
   - Finds 10 nearby online drivers (3km radius)
   - Sends requests sequentially
   - 10-second timeout per driver
   - First to accept gets the ride
7. User sees "Searching for drivers..." message
```

**Tracking Active Ride:**
```
1. Auto-navigate to /user/track/{rideId}
2. See live map with:
   - Passenger (blue marker) at pickup
   - Driver (red marker) with real-time location
   - Route: Driver → Pickup location
3. Driver info displayed:
   - Name, phone, vehicle details
   - Call button (tel: link)
4. Status shown: "Driver is on the way..."
5. Once driver starts ride:
   - Route updates: Driver → Dropoff
   - Status: "Ride in progress"
6. Ride completion notification
7. Rate driver (optional)
8. Ride appears in history
```

---

### **4. Admin Dashboard Flow**

**Driver Approvals:**
```
1. Admin logs in → /admin/dashboard
2. See "Pending Approvals" banner
3. Go to /admin/drivers
4. View list of all drivers
5. Click "Approve" or "Reject"
6. Approved drivers can now go online
```

**User & Ride Management:**
```
1. /admin/users - View all users
2. /admin/rides - View all rides with filters
3. /admin/drivers - Manage drivers
4. Analytics: Total rides, revenue, active drivers
```

---

## 💰 Pricing Formula

All prices in Indian Rupees (₹)

**Base Fare:** ₹50
**Per-Kilometer:** ₹15

**Example Calculations:**
- 5 km ride: ₹50 + (5 × ₹15) = **₹125**
- 10 km ride: ₹50 + (10 × ₹15) = **₹200**
- 15 km ride: ₹50 + (15 × ₹15) = **₹275**

---

## 🗺️ Core Features Explained

### **Real-Time Dispatch System**
1. **Ride Creation** - User completes booking, ride document created
2. **Driver Search** - Find 10 nearby drivers within 3km radius
3. **Sequential Dispatch** - Send requests to drivers one by one
4. **Timeout Management** - 10 seconds per driver, auto-reject if no response
5. **First Acceptance** - First driver to accept gets the ride
6. **Status BROADCAST** - All listeners notified via Firestore real-time updates

### **Location Broadcasting**
1. Driver goes online → geolocation enabled
2. Every 7 seconds: Get current position
3. Save lat/lng to Firestore `driver_locations` collection
4. Passenger listens to these updates in real-time
5. Map auto-centers on driver
6. When ride complete, broadcast stops

### **Ride Status Machine**
```
[created]
    ↓
[searching] ← Dispatch system finds drivers
    ↓
[accepted] ← First driver accepts
    ↓
[started] ← Driver begins ride
    ↓
[completed] ← Driver finishes ride
    ↓
[rated] ← Passengers rate each other

(At any stage, can go to [cancelled])
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── common/         # Reusable: Button, Input, Modal, Badge, Spinner
│   ├── maps/           # MapView, Directions, Markers
│   └── layout/         # AppLayout, Navbar, Sidebar
├── pages/
│   ├── auth/           # Login, Register
│   ├── admin/          # Dashboard, Users, Drivers, Rides
│   ├── driver/         # Dashboard, Requests, ActiveRide, History, Profile
│   └── user/           # Home, BookRide, TrackRide, History, Profile
├── routes/             # AppRouter, ProtectedRoute, RoleRoute
├── services/
│   ├── firebase.js     # Firebase config
│   ├── authService.js  # Auth operations
│   ├── rideService.js  # Ride CRUD & queries
│   ├── driverService.js # Driver operations
│   ├── locationService.js # Location broadcasting & subscription
│   ├── dispatchManager.js # Dispatch logic
│   └── matchingService.js # Driver matching
├── store/              # Zustand stores: auth, driver, rides
├── hooks/              # useAuth, useLocation, useRides, useDrivers
└── utils/
    ├── fareCalculator.js # Fare calculation logic
    ├── formatters.js    # Money, date formatting
    └── constants.js     # App constants
```

---

## 🔐 Security & Permissions

### **Firestore Security Rules Breakdown**

**Users Collection:**
- Can read all profiles (needed for display)
- Can update own profile only
- Admin: full access

**Drivers Collection:**
- Drivers can update own profile
- Can read own location data
- Other drivers can see driver ratings/info
- Admin: full access

**Rides Collection:**
- Users can: create own rides, read own rides
- Drivers can: accept/reject requests, update ride status
- Both can: read completed rides for rating purposes
- Admin: full read/write

**Driver Locations:**
- Drivers write own location (every 7 seconds)
- All authenticated users can read (passengers see driver location)
- Real-time updates via Firestore listeners

---

## 📊 Database Schema

### **Collections:**

**users/{userId}**
```javascript
{
  name: string,
  email: string,
  phone: string,
  role: "admin" | "driver" | "user",
  createdAt: timestamp
}
```

**drivers/{driverId}**
```javascript
{
  name: string,
  email: string,
  phone: string,
  isOnline: boolean,
  isApproved: boolean,
  rating: number (0-5),
  totalRides: number,
  createdAt: timestamp
}
```

**driver_locations/{driverId}**
```javascript
{
  lat: number,
  lng: number,
  isOnline: boolean,
  updatedAt: timestamp
}
```

**rides/{rideId}**
```javascript
{
  userId: string,
  driverId: string | null,
  status: string,
  pickupLat: number,
  pickupLng: number,
  pickupAddress: string,
  dropLat: number,
  dropLng: number,
  dropAddress: string,
  fare: number,
  currentDriverId: string,
  dispatchQueue: array,
  createdAt: timestamp,
  acceptedAt: timestamp,
  startedAt: timestamp,
  completedAt: timestamp
}
```

**driver_ratings/{ratingId}**
```javascript
{
  userId: string,
  driverId: string,
  rideId: string,
  rating: number (1-5),
  comment: string,
  createdAt: timestamp
}
```

---

## 🚀 Installation & Setup

### **Prerequisites**
- Node.js 16+
- Firebase project (create at https://firebase.google.com)
- Google Maps API key

### **Step 1: Install Dependencies**
```bash
git clone <repository>
cd sign-taxi
npm install
```

### **Step 2: Configure Firebase**
```bash
# Create .env.local
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=sign-taxi
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GOOGLE_MAPS_API_KEY=your_maps_api_key
```

### **Step 3: Deploy Firebase Config**
```bash
firebase login
firebase use sign-taxi
firebase deploy --only firestore:rules,firestore:indexes
```

### **Step 4: Start Development**
```bash
npm run dev
# Runs on http://localhost:5174
```

### **Step 5: Create Test Accounts**
1. Admin: Register with `admin` role, verify in Firebase Console
2. Driver: Register, await admin approval
3. User: Register with `user` role

---

## 🧪 End-to-End Testing

### **Complete Test Scenario (15 minutes)**

**Setup (2 min):**
1. Open 3 browser windows (Admin, Driver, User)
2. Admin: Login with admin account
3. Driver: Login with driver account (not approved yet)
4. In Admin Console: Approve the driver from /admin/drivers

**Test (13 min):**
1. **Driver**: Go to /driver/dashboard, click "Go Online"
2. **User**: Go to /user/book, set pickup & drop locations, click "CONFIRM RIDE"
3. **Driver**: See request popup at /driver/requests, click "ACCEPT"
4. **Both**: View /driver/active and /user/track/{rideId}
5. **Driver**: Click "START RIDE" at pickup location
6. **Both**: See updated route to drop location
7. **Driver**: Click "COMPLETE RIDE" at destination
8. **Both**: See ride completion notification
9. **User**: Go to /user/history, see completed ride
10. **Driver**: Go to /driver/history, see earnings

---

## 📝 Firestore Composite Indexes Required

The app automatically uses these indexes. Create them in Firebase Console if needed:

1. **rides** - (userId ↑, createdAt ↓)
2. **rides** - (driverId ↑, createdAt ↓)
3. **rides** - (status ↑, createdAt ↓)

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| "The query requires an index" | Go to Firebase Console → Firestore → Indexes and create the composite index |
| Driver location not updating | Check browser geolocation permissions, ensure driver is online |
| Ride stuck on "searching" | Wait for timeout (10 sec) or check nearby drivers are online |
| Permission denied error | Check Firestore rules are deployed |
| Maps not loading | Verify Google Maps API key in .env.local |

---

## 📱 Pages & Routes

**Public:** `/login`, `/register`

**Admin:** `/admin/dashboard`, `/admin/users`, `/admin/drivers`, `/admin/rides`

**Driver:** `/driver/dashboard`, `/driver/requests`, `/driver/active`, `/driver/history`, `/driver/profile`

**User:** `/user/home`, `/user/book`, `/user/track/:rideId`, `/user/history`, `/user/profile`

---

## ✅ Deployment Checklist

- [ ] Firebase project created & authenticated
- [ ] Firestore composite indexes deployed
- [ ] Firestore security rules deployed
- [ ] Google Maps API enabled & key configured
- [ ] Environment variables set in production
- [ ] HTTPS/SSL configured
- [ ] Admin account created & verified
- [ ] Test ride completed end-to-end
- [ ] Performance tested (console shows no errors)
- [ ] Deployed to Firebase Hosting or Vercel

---

## 📄 License

MIT License - Open source and free to use


## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd sign-taxi
npm install
```

### 2. Firebase Project Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **Add project** → name it (e.g. `sign-taxi`)
3. Enable **Google Analytics** (optional)

#### Enable Authentication
1. Go to **Authentication** → **Get started**
2. Click **Sign-in method** → **Email/Password** → Enable → Save

#### Create Firestore Database
1. Go to **Firestore Database** → **Create database**
2. Choose **Start in production mode**
3. Select a region close to your users → **Done**

#### Enable Storage
1. Go to **Storage** → **Get started**
2. Accept the default rules (we'll replace them) → **Done**

#### Get Firebase Config
1. Go to **Project Settings** (gear icon) → **General**
2. Scroll to **Your apps** → click **</>** (Web)
3. Register the app (name it `sign-taxi-web`)
4. Copy the `firebaseConfig` values

### 3. Create Environment File

```bash
cp .env.example .env
```

Fill in your values in `.env`:

```env
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=sign-taxi.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=sign-taxi
VITE_FIREBASE_STORAGE_BUCKET=sign-taxi.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
VITE_GOOGLE_MAPS_API_KEY=AIzaSy...
```

### 4. Google Maps API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or use existing)
3. Go to **APIs & Services** → **Library**
4. Enable these APIs:
   - **Maps JavaScript API**
   - **Geocoding API**
   - **Directions API**
   - **Places API**
5. Go to **APIs & Services** → **Credentials**
6. Click **Create Credentials** → **API Key**
7. (Recommended) Restrict the key:
   - Application restrictions: **HTTP referrers**
   - Add: `localhost:*` and `yourdomain.com/*`
   - API restrictions: Select the 4 APIs above
8. Copy the key into `VITE_GOOGLE_MAPS_API_KEY`

### 5. Deploy Firebase Security Rules

Install the Firebase CLI if you haven't:

```bash
npm install -g firebase-tools
firebase login
firebase use --add   # select your project
```

Deploy rules:

```bash
firebase deploy --only firestore:rules
firebase deploy --only storage
```

### 6. Deploy Firestore Indexes

```bash
firebase deploy --only firestore:indexes
```

> **Note:** Indexes take 2–5 minutes to build. You'll see yellow warnings in the console until they're ready.

### 7. Create First Admin User

The application doesn't have a public admin registration path (for security). To create your first admin:

**Option A — via Firebase Console**

1. Register a normal account at `/register`
2. Go to Firebase Console → **Firestore**
3. Find `users/{your-uid}` document
4. Edit the `role` field → change `"user"` to `"admin"`
5. Log out and log back in → you'll be redirected to `/admin/dashboard`

**Option B — via a seed script**

```js
// run once in browser console on your deployed app, signed in as the user
import { doc, updateDoc } from 'firebase/firestore'
import { db } from './src/services/firebase'
await updateDoc(doc(db, 'users', 'YOUR_UID'), { role: 'admin' })
```

### 8. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---
## 👨‍✈️ Driver Account Approval (Admin)

When drivers register their accounts, they are created with `isApproved: false`. **Admins must approve drivers** before they can accept rides.

### How to Approve Drivers

#### Option A: Admin Dashboard (Easy)
1. Login as admin
2. Go to **Admin** → **Drivers**
3. You'll see a summary: "⏳ X drivers pending approval"
4. Find the driver in the table with "Pending" status
5. Click **"Approve"** button
6. Driver can now accept rides ✅

#### Option B: Firebase Console
1. Open **Firebase Console** → **Firestore Database**
2. Go to **Collections** → **drivers**
3. Find the driver document
4. Set field `isApproved: true`
5. Done! Driver will see approval within 5 seconds

#### Option C: Browser Admin Script
If you need to approve multiple drivers:

1. Go to admin page (logged in as admin)
2. Open DevTools: `F12` → **Console**
3. Paste and run:
```javascript
// Replace DRIVER_ID with the actual driver ID
const driverId = 'HTvXvus9s3fAy3t9AL3KSQLdD8q1'
const { doc, updateDoc } = await import('firebase/firestore')
const { db } = await import('./src/services/firebase')
await updateDoc(doc(db, 'drivers', driverId), { isApproved: true })
console.log('✅ Driver approved')
```

### What Drivers See

**Before Approval (❌ Cannot accept):**
- Warning on Requests page: "Account Not Approved"
- Accept buttons are **disabled** (grayed out)
- Shows driver ID and approval instructions

**After Approval (✅ Can accept):**
- Warning disappears
- Accept buttons become **clickable**
- Driver can accept incoming ride requests
- Automatically refreshes every 5 seconds to detect approval

---
## � Complete Ride Booking Workflow

### From User's Perspective

```
1. User selects pickup & destination on map
2. Clicks "Book Ride"
3. App finds nearby drivers within 3km
4. Dispatch system starts:
   - Sends request to closest driver (10s timeout)
   - If no response → tries next driver
   - Repeats until driver accepts or no drivers left
5. Driver accepts → UI shows "Driver on the way"
6. Live location tracking begins
7. Driver arrives → shows "Driver is here"
8. Ride starts → route shows
9. Ride completes
10. Rating & history saved
```

### From Driver's Perspective

```
1. Driver logs in and clicks "Dashboard"
2. Clicks "Go Online" button (turns green)
3. Enables location broadcast (5s intervals)
4. Goes to "Requests" tab and waits
5. Incoming ride request popup appears
   - Shows pickup address, destination, distance, estimated fare
   - Countdown timer: 10 seconds to respond
6. Driver clicks "✅ ACCEPT" or "❌ REJECT"
   - If accepts: redirects to '/driver/active' to navigate
   - If rejects/timeout: system tries next driver
7. Once accepted, driver navigates to pickup location
8. Arrives and sees "Start Ride" button
9. Clicks to start ride (shows route to destination)
10. Arrives and clicks "Complete Ride"
11. Becomes available again for next request
```

---

## 🏗 Dispatch System Architecture

### Core Components

#### 1. **dispatchService.js** — Queue Management
- `createDispatchQueue()` - Create prioritized driver queue
- `sendDispatchToDriver(rideId, driverId)` - Send request to specific driver
- `subscribeToDriverRequests(driverId, callback)` - Driver listens for incoming requests

#### 2. **matchingService.js** — Driver Matching
- `findNearbyDrivers(userLat, userLng)` - Find drivers within 3km radius
- `calculateDistance()` - Haversine distance calculation
- `getDriverRating(driverId)` - Fetch driver's average rating
- `rankDriversByScore()` - Score drivers by: distance (50%), rating (30%), acceptance rate (20%)

#### 3. **dispatchManager.js** — Dispatch Orchestration
- `DispatchManager` class - Manages dispatch lifecycle with timeouts
- `initializeDispatch(rideId)` - Orchestrate the complete dispatch process
- Automatic failover to next driver after 10-second timeout per driver

#### 4. **bookingStateManager.js** — State Machine
Valid state transitions:
```
pending → searching → requested → accepted → started → completed
             ↓                       ↓            ↓
          cancelled              cancelled     cancelled
```

#### 5. **useDispatch.js** — React Hooks
- `useDispatch()` - High-level booking dispatch hook
- `useDriverDispatchRequests()` - Driver receives incoming requests
- `useBookingTracking()` - Real-time booking status tracking

---

## 📊 Data Model

### Ride Document
```javascript
{
  // IDs
  id: "ride_id",
  userId: "user_id",
  driverId: "driver_id",           // Null until accepted
  currentDriverId: "driver_id",    // Driver currently being sent request (in queue)
  
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
  
  // Status: pending|searching|requested|accepted|started|completed|cancelled
  status: "completed",
  
  // Dispatch info
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
  
  // Ratings
  driverRating: 5,
  userRating: 5,
  
  // Timestamps
  createdAt: timestamp,
  acceptedAt: timestamp,
  rideStartedAt: timestamp,
  completedAt: timestamp,
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

## 🔧 Critical Firebase Configuration

### ⚠️ IMPORTANT: Missing Composite Index

The driver request subscription requires a composite index in Firestore. This is **automatically added** to `firestore.indexes.json`:

```json
{
  "collectionGroup": "rides",
  "queryScope": "COLLECTION",
  "fields": [
    { "fieldPath": "status", "order": "ASCENDING" },
    { "fieldPath": "currentDriverId", "order": "ASCENDING" }
  ]
}
```

**Deploy it:**
```bash
firebase deploy --only firestore:indexes
```

⏳ **Wait 5-15 minutes** for index to build. Check status:
```bash
firebase firestore:indexes
```

---

## ✅ Critical Fixes Implemented

### Fix 1: User Permission Error (getDriverRating)

**Issue:** Users got `FirebaseError: Missing or insufficient permissions` when booking.

**Cause:** Users couldn't read other drivers' completed rides to calculate ratings.

**Solution:** Updated `firestore.rules` to allow users to read any completed rides:
```javascript
// All users can read completed rides (to see driver ratings in booking)
allow read: if isSignedIn() && resource.data.status == 'completed';
```

**Deploy:**
```bash
firebase deploy --only firestore:rules
```

---

### Fix 2: Driver Popup Not Showing (0 Rides Returned)

**Issue:** Driver never saw incoming request popup; auto-rejected after 10 seconds.

**Cause:** Composite index for `(status, currentDriverId)` was missing, so driver's subscription query returned 0 results.

**Solution:** Added composite index to `firestore.indexes.json` (see above).

**Result After Deploy:**
- Driver sees popup within 1-2 seconds of user booking
- Console shows: `[SUBSCRIBE] Got snapshot with 1 rides` ✅ (not 0)

---

### Fix 3: Auto-Reject Bug (Accept Button Not Working)

**Issue:** When driver clicked "✅ ACCEPT", the system auto-rejected after 10 seconds.

**Cause:** Race condition - auto-reject timer was running even after manual action.

**Solution:** Added `userActedRef` state to track manual actions:

In `src/pages/driver/Requests.jsx`:
```javascript
const [userActedRef, setUserActed] = useState(false)

// Only auto-reject if user hasn't manually acted
if (countdown === 1 && incomingRequest && !isResponding && !userActedRef) {
  setUserActed(true)  // Prevent multiple rejections
  respondToRequest(incomingRequest.id, 'reject')
}
```

In handlers:
```javascript
const handleAccept = async (request) => {
  setUserActed(true)  // Prevent auto-reject
  try {
    await respondToRequest(request.id, 'accept')
    // Navigate to active ride...
  } catch (err) {
    setUserActed(false)  // Allow retry
  }
}
```

---

### Fix 4: Firestore Rules for Accept/Reject

**Issue:** Driver couldn't reject (clear `currentDriverId`) even though accept worked.

**Solution:** Updated `firestore.rules` to allow both accept (set `driverId` + set `status: 'accepted'`) and reject (clear `currentDriverId`):

```javascript
allow update: if isDriver() && (
  resource.data.driverId == request.auth.uid ||
  (resource.data.status == 'searching' && 
   resource.data.currentDriverId == request.auth.uid &&
   (
     // Accept: setting status to accepted and driverId
     (request.resource.data.status == 'accepted' &&
      request.resource.data.driverId == request.auth.uid) ||
     // Reject: clearing currentDriverId
     request.resource.data.currentDriverId == null
   )
  )
);
```

---

## 🧪 Testing the Complete Flow

### Step 1: Deploy Firebase Configuration

```bash
firebase deploy --only firestore:rules,firestore:indexes
```

### Step 2: Open Two Browser Windows

**Window A — Driver Account:**
```
1. Open http://localhost:5173
2. Login as DRIVER account
3. Go to Dashboard → Click "Go Online"
4. Go to Requests tab
5. Leave open and watch
```

**Window B — User Account:**
```
1. Open http://localhost:5173 in new window
2. Login as USER account
3. Click "Book a Ride"
```

### Step 3: Book a Ride (Window B)

```
1. Select pickup location on map
2. Click "Next"
3. Select destination on map
4. Click "Next"
5. Review details
6. Click "BOOK RIDE"
```

### Step 4: Driver Receives Popup (Window A)

**Expected in 1-2 seconds:**
- Popup appears with incoming request
- Shows pickup & destination addresses
- Shows distance and estimated fare
- Countdown timer shows 10 seconds

### Step 5: Test Accept

```
1. Click "✅ ACCEPT"
2. Should redirect to '/driver/active'
3. Should NOT show error
4. Should NOT auto-reject
```

### Step 6: Test Reject

```
1. Book another ride (repeat steps 3-5)
2. Click "❌ REJECT"
3. Should disappear from popup
4. System should try next available driver (if any)
```

### Step 7: Test Auto-Reject

```
1. Book another ride
2. DON'T click accept or reject
3. Wait 10 seconds
4. Request should auto-reject
5. Should disappear
```

---

## 🔍 Debugging Console Logs

### Good Signs ✅

**User side (booking):**
```
drivers found: 2
ride created: u901yrrlzHpOLQqhSQHu
[Dispatch] Sending to driver HTvXvus9s3fAy3t9AL3KSQLdD8q1
[DISPATCH] ✅ Updated ride with currentDriverId
```

**Driver side (receiving request):**
```
[SUBSCRIBE] Driver subscribing to requests: HTvXvus9s3fAy3t9AL3KSQLdD8q1
[SUBSCRIBE] Got snapshot with 1 rides
[SUBSCRIBE] Returning 1 requests to driver
Incoming Request: {id: "u901yrrlzHpOLQqhSQHu", ...}
```

### Bad Signs ❌

```
Error getting driver rating: FirebaseError: Missing or insufficient permissions
  → Deploy rules: firebase deploy --only firestore:rules

[SUBSCRIBE] Got snapshot with 0 rides
  → Check index status: firebase firestore:indexes

[DRIVER] Error responding to request: FirebaseError: Missing or insufficient permissions
  → Deploy rules: firebase deploy --only firestore:rules
```

---

## �🗺 Ride Flow

```
User books ride (status: requested)
        ↓
All online drivers see it in Requests tab
        ↓
Driver accepts (status: accepted)
        ↓
Driver location broadcast begins (every 7s)
        ↓
Passenger sees driver moving on map
        ↓
Driver arrives → taps "Start Ride" (status: started)
        ↓
Route shown: driver → destination
        ↓
Driver taps "Complete Ride" (status: completed)
        ↓
Fare recorded, ride archived to history
```

---

## 🔥 Firestore Data Model

```
users/{userId}
  id, name, email, phone, photoURL, role, status, createdAt

drivers/{driverId}
  id, userId, name, phone
  vehicleDetails: { make, model, plate }
  isApproved, isOnline
  documents: { licenseURL, idURL }
  createdAt

driver_locations/{driverId}
  driverId, lat, lng, isOnline, updatedAt

rides/{rideId}
  id, userId, driverId
  pickupLat, pickupLng, pickupAddress
  dropLat, dropLng, dropAddress
  fare, status, createdAt, updatedAt
```

---

## 📦 Build & Deploy

### Build for production

```bash
npm run build
```

Output goes to `dist/`.

### Deploy to Firebase Hosting

```bash
firebase deploy --only hosting
```

### Deploy everything at once

```bash
firebase deploy
```

---

## 🛡 Security Rules Summary

| Collection | Passenger | Driver | Admin |
|-----------|-----------|--------|-------|
| `users` | Own doc only | Own doc only | Full access |
| `drivers` | Read all | Own doc | Full access |
| `driver_locations` | Read all | Write own | Full access |
| `rides` | Own rides | Assigned rides + all pending | Full access |

---

## ⚡ Performance Notes

- **Driver location** is broadcast every 7 seconds (throttled to prevent Firestore write costs)
- **Page components** are lazy-loaded via `React.lazy` + `Suspense`
- **Map markers** use `React.memo` to prevent unnecessary re-renders
- **Zustand selectors** prevent components from re-rendering on unrelated store changes
- **Firestore composite indexes** ensure fast queries on rides by userId/driverId + status

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Map not loading | Check `VITE_GOOGLE_MAPS_API_KEY` is set and Maps JS API is enabled |
| Firestore permission denied | Deploy `firestore.rules` via Firebase CLI |
| Rides query fails | Wait for Firestore indexes to build (2–5 min after deploy) |
| Location not updating | Allow location permissions in browser; check HTTPS (required for geolocation) |
| Driver not going online | Ensure driver account is approved by admin first |
| Auth loop on refresh | Clear localStorage and cookies; check Firebase config values |

---

## 📝 Environment Variables Reference

| Variable | Description |
|----------|-------------|
| `VITE_FIREBASE_API_KEY` | Firebase web API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase Auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Firestore project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Storage bucket name |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | FCM sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase app ID |
| `VITE_GOOGLE_MAPS_API_KEY` | Google Maps JavaScript API key |

---

## 📄 License

MIT — free to use and modify.
