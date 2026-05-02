import React, { lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import useAuthStore from '../store/authStore'
import ProtectedRoute from './ProtectedRoute'
import RoleRoute from './RoleRoute'
import Spinner from '../components/common/Spinner'

// Landing page
const LandingPage = lazy(() => import('../pages/LandingPage'))

// Info pages
const About = lazy(() => import('../pages/About'))
const Corporate = lazy(() => import('../pages/Corporate'))
const Cities = lazy(() => import('../pages/Cities'))
const BookATrip = lazy(() => import('../pages/BookATrip'))

// Auth pages
const Login = lazy(() => import('../pages/auth/Login'))
const Register = lazy(() => import('../pages/auth/Register'))

// Admin pages
const AdminDashboard = lazy(() => import('../pages/admin/Dashboard'))
const AdminUsers = lazy(() => import('../pages/admin/Users'))
const AdminDrivers = lazy(() => import('../pages/admin/Drivers'))
const AdminRides = lazy(() => import('../pages/admin/Rides'))
const AdminHistory = lazy(() => import('../pages/admin/History'))

// User pages
const UserHome = lazy(() => import('../pages/user/Home'))
const BookRide = lazy(() => import('../pages/user/BookRide'))
const ModernBookRide = lazy(() => import('../pages/user/ModernBookRide'))
const TrackRide = lazy(() => import('../pages/user/TrackRide'))
const ModernTrackRide = lazy(() => import('../pages/user/ModernTrackRide'))
const UserHistory = lazy(() => import('../pages/user/History'))
const UserProfile = lazy(() => import('../pages/user/Profile'))
const ModernUserProfile = lazy(() => import('../pages/user/ModernProfile'))
const NearbyPlaces = lazy(() => import('../pages/user/NearbyPlaces'))

// Driver pages
const DriverDashboard = lazy(() => import('../pages/driver/Dashboard'))
const DriverRequests = lazy(() => import('../pages/driver/Requests'))
const DriverActiveRide = lazy(() => import('../pages/driver/ActiveRide'))
const DriverHistory = lazy(() => import('../pages/driver/History'))
const DriverProfile = lazy(() => import('../pages/driver/Profile'))
const ModernDriverDashboard = lazy(() => import('../pages/driver/ModernDashboard'))
const ModernDriverRequests = lazy(() => import('../pages/driver/ModernRequests'))
const ModernDriverActiveRide = lazy(() => import('../pages/driver/ModernActiveRide'))
const VehicleManagement = lazy(() => import('../pages/driver/VehicleManagement'))

// 404
const NotFound = lazy(() => import('../pages/NotFound'))

const AppRouter = () => {
  const { initialized, loading, userData, initialize } = useAuthStore()

  useEffect(() => {
    const unsub = initialize()
    return () => { if (typeof unsub === 'function') unsub() }
  }, [])

  if (!initialized || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z"/>
            </svg>
          </div>
          <Spinner size="md" />
          <p className="text-sm text-slate-400">Loading SignTaxi…</p>
        </div>
      </div>
    )
  }

  const defaultRedirect = () => {
    if (!userData) return '/login'
    if (userData.role === 'admin') return '/admin/dashboard'
    if (userData.role === 'driver') return '/driver/dashboard'
    return '/user/home'
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Root route - show landing page to public, redirect authenticated users */}
        <Route 
          path="/" 
          element={
            userData ? (
              <Navigate to={defaultRedirect()} replace />
            ) : (
              <LandingPage />
            )
          } 
        />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/cabs" element={<Cities />} />
        <Route path="/book-trip" element={<BookATrip />} />

        {/* Admin routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<RoleRoute allowedRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/drivers" element={<AdminDrivers />} />
            <Route path="/admin/rides" element={<AdminRides />} />
            <Route path="/admin/history" element={<AdminHistory />} />
          </Route>

          {/* User routes */}
          <Route element={<RoleRoute allowedRoles={['user']} />}>
            <Route path="/user/home" element={<UserHome />} />
            <Route path="/user/book" element={<BookRide />} />
            <Route path="/user/modern-book" element={<ModernBookRide />} />
            <Route path="/user/track/:rideId" element={<TrackRide />} />
            <Route path="/user/modern-track/:rideId" element={<ModernTrackRide />} />
            <Route path="/user/history" element={<UserHistory />} />
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/user/modern-profile" element={<ModernUserProfile />} />
            <Route path="/user/nearby-places" element={<NearbyPlaces />} />
          </Route>

          {/* Driver routes */}
          <Route element={<RoleRoute allowedRoles={['driver']} />}>
            <Route path="/driver/dashboard" element={<ModernDriverDashboard />} />
            <Route path="/driver/requests" element={<ModernDriverRequests />} />
            <Route path="/driver/active" element={<ModernDriverActiveRide />} />
            <Route path="/driver/history" element={<DriverHistory />} />
            <Route path="/driver/profile" element={<DriverProfile />} />
            <Route path="/driver/vehicles" element={<VehicleManagement />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
