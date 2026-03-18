# 🚕 SignTaxi — Real-Time Taxi Booking System

A full-stack, production-ready taxi booking application built with **React (Vite)**, **Firebase**, and **Google Maps**. Features real-time GPS tracking, role-based access control, and a clean light-theme UI.

---

## ✨ Features

| Role | Capabilities |
|------|-------------|
| **Admin** | Dashboard stats, manage users/drivers, view/cancel all rides |
| **Passenger** | Book rides on map, real-time driver tracking, ride history |
| **Driver** | Go online/offline, accept requests, live GPS broadcast, earnings |

---

## 🏗 Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Zustand, React Router v6
- **Maps**: `@react-google-maps/api` with Directions, live markers
- **Backend**: Firebase Auth, Firestore, Storage
- **Realtime**: Firestore `onSnapshot` for live ride & location updates

---

## 📁 Project Structure

```
src/
├── assets/
├── components/
│   ├── common/        # Button, Input, Modal, Badge, Avatar, Spinner, EmptyState
│   ├── maps/          # MapView, Directions, DriverMarker, UserMarker
│   └── layout/        # Sidebar, Navbar, MobileDrawer, AppLayout
├── pages/
│   ├── auth/          # Login, Register
│   ├── admin/         # Dashboard, Users, Drivers, Rides
│   ├── user/          # Home, BookRide, TrackRide, History, Profile
│   └── driver/        # Dashboard, Requests, ActiveRide, History, Profile
├── routes/            # AppRouter, ProtectedRoute, RoleRoute
├── services/          # firebase, auth, user, driver, ride, location
├── store/             # authStore, rideStore, driverStore (Zustand)
├── hooks/             # useAuth, useLocation, useDrivers, useRides
└── utils/             # constants, fareCalculator, formatters
```

---

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

## 🗺 Ride Flow

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
