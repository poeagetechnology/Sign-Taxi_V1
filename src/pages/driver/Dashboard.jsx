import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Crosshair, DollarSign, Car, Star, ArrowRight, MapPin } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import Spinner from '../../components/common/Spinner'
import Button from '../../components/common/Button'
import useAuthStore from '../../store/authStore'
import useDriverStore from '../../store/driverStore'
import { getDriverById, toggleDriverOnlineStatus, updateDriverProfile } from '../../services/driverService'
import { getDriverRides } from '../../services/rideService'
import LocationPickerModal from '../../components/maps/LocationPickerModal'
import { useCurrentLocation, useDriverLocationRealtime } from '../../hooks/useLocation'
import { startLocationBroadcast, stopLocationBroadcast, updateDriverLocation } from '../../services/locationService'
import { formatCurrency } from '../../utils/formatters'

const StatCard = ({ icon: Icon, label, value, color }) => (
  <div className="stat-card">
    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>
      <Icon size={20} className="text-white" />
    </div>
    <div>
      <p className="text-xl font-display font-bold text-slate-900">{value}</p>
      <p className="text-sm text-slate-500">{label}</p>
    </div>
  </div>
)

const DriverDashboard = () => {
  const navigate = useNavigate()
  const { userData } = useAuthStore()
  const { driverProfile, setDriverProfile, isOnline, setIsOnline } = useDriverStore()
  const { location: currentLocation } = useCurrentLocation()
  const { location: liveLocation } = useDriverLocationRealtime(userData?.id)
  const [loading, setLoading] = useState(true)
  const [toggling, setToggling] = useState(false)
  const [rides, setRides] = useState([])
  const [locationPickerOpen, setLocationPickerOpen] = useState(false)
  const [savingLocation, setSavingLocation] = useState(false)
  const manualLocationRef = useRef(null)

  useEffect(() => {
    if (!userData?.id) return
    Promise.all([
      getDriverById(userData.id),
      getDriverRides(userData.id),
    ]).then(([driver, rideList]) => {
      if (driver) {
        manualLocationRef.current = driver.manualLocation || null
        setDriverProfile(driver)
        setIsOnline(driver.isOnline)
      }
      setRides(rideList)
    }).catch(console.error)
    .finally(() => setLoading(false))
  }, [userData?.id])

  useEffect(() => {
    manualLocationRef.current = driverProfile?.manualLocation || null
  }, [driverProfile?.manualLocation])

  const handleToggle = async () => {
    // Testing mode: allow online toggle even if approval pending
    // if (!driverProfile?.isApproved) {
    //   toast.error('Your account must be approved before going online.')
    //   return
    // }
    setToggling(true)
    try {
      const newStatus = !isOnline
      await toggleDriverOnlineStatus(userData.id, newStatus)
      setIsOnline(newStatus)
      if (newStatus) {
        startLocationBroadcast(userData.id, (err) => toast.error(err), {
          getOverrideLocation: () => manualLocationRef.current,
        })
        toast.success('You are now online! Waiting for ride requests.')
      } else {
        await stopLocationBroadcast(userData.id)
        toast.success('You are now offline.')
      }
    } catch { toast.error('Failed to update status') }
    finally { setToggling(false) }
  }

  const handleManualLocationSave = async ({ location, address }) => {
    setSavingLocation(true)
    try {
      const manualLocation = {
        lat: location.lat,
        lng: location.lng,
        address,
      }

      await updateDriverProfile(userData.id, { manualLocation })
      const updatedProfile = {
        ...(driverProfile || {}),
        manualLocation,
      }
      manualLocationRef.current = manualLocation
      setDriverProfile(updatedProfile)

      if (isOnline) {
        await updateDriverLocation(userData.id, manualLocation, {
          isOnline: true,
          source: 'manual',
        })
      }

      toast.success('Manual driver location updated.')
    } catch (error) {
      toast.error(error.message || 'Failed to update driver location')
    } finally {
      setSavingLocation(false)
    }
  }

  const handleClearOverride = async () => {
    setSavingLocation(true)
    try {
      await updateDriverProfile(userData.id, { manualLocation: null })
      manualLocationRef.current = null
      setDriverProfile({ ...(driverProfile || {}), manualLocation: null })

      if (isOnline) {
        startLocationBroadcast(userData.id, (err) => toast.error(err), {
          getOverrideLocation: () => manualLocationRef.current,
        })
      }

      toast.success('GPS location restored.')
    } catch (error) {
      toast.error(error.message || 'Failed to clear manual location')
    } finally {
      setSavingLocation(false)
    }
  }

  const completedRides = rides.filter(r => r.status === 'completed')
  const totalEarnings = completedRides.reduce((s, r) => s + (r.fare || 0), 0)
  const activeLocation = driverProfile?.manualLocation || liveLocation || currentLocation
  const activeLocationLabel = driverProfile?.manualLocation?.address || (activeLocation ? `${activeLocation.lat.toFixed(5)}, ${activeLocation.lng.toFixed(5)}` : 'Location not available yet')

  if (loading) return (
    <AppLayout title="Dashboard">
      <div className="flex items-center justify-center h-64"><Spinner size="lg" /></div>
    </AppLayout>
  )

  return (
    <AppLayout title="Dashboard">
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-900">
              Hey, {userData?.name?.split(' ')[0]}!
            </h1>
            <p className="text-slate-500 text-sm mt-0.5">Your driver dashboard</p>
          </div>
        </div>

        {/* Approval warning - disabled for testing mode
        {!driverProfile?.isApproved && (
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4">
            <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 text-sm">Pending Approval</p>
              <p className="text-amber-700 text-sm mt-0.5">
                Your account is waiting for admin approval. Please upload your documents in your profile.
              </p>
            </div>
          </div>
        )}
        */}

        {/* Online toggle */}
        <div className={`rounded-2xl p-5 border-2 transition-all ${isOnline ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-display font-bold text-lg text-slate-900">
                {isOnline ? '🟢 You are Online' : '⚫ You are Offline'}
              </p>
              <p className="text-sm text-slate-500 mt-0.5">
                {isOnline ? 'Accepting ride requests' : 'Toggle to start accepting rides'}
              </p>
            </div>
            <button
              onClick={handleToggle}
              disabled={toggling}
              className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors disabled:opacity-50"
              style={{ backgroundColor: isOnline ? '#10b981' : '#cbd5e1' }}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform ${isOnline ? 'translate-x-7' : 'translate-x-1'}`}
              />
            </button>
          </div>
        </div>

        <div className="card space-y-4">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h2 className="font-display font-semibold text-slate-900">Driver Location Control</h2>
              <p className="text-sm text-slate-500 mt-1">
                Override GPS with a searched address, map pin, or exact coordinates when you need to test or correct your live position.
              </p>
            </div>
            <div className={`rounded-full px-3 py-1.5 text-xs font-semibold ${driverProfile?.manualLocation ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-600'}`}>
              {driverProfile?.manualLocation ? 'Manual override active' : 'Using GPS location'}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-blue-500" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900">Current broadcast location</p>
                <p className="text-sm text-slate-600 mt-1 break-words">{activeLocationLabel}</p>
                {activeLocation && (
                  <p className="text-xs text-slate-400 mt-1">
                    {activeLocation.lat.toFixed(6)}, {activeLocation.lng.toFixed(6)}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <Button onClick={() => setLocationPickerOpen(true)} loading={savingLocation}>
              <MapPin size={16} /> Set custom location
            </Button>
            <Button variant="secondary" onClick={handleClearOverride} disabled={!driverProfile?.manualLocation} loading={savingLocation}>
              <Crosshair size={16} /> Use GPS again
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <StatCard icon={DollarSign} label="Total Earnings" value={formatCurrency(totalEarnings)} color="bg-emerald-500" />
          <StatCard icon={Car} label="Completed Rides" value={completedRides.length} color="bg-amber-500" />
          <StatCard icon={Star} label="Total Rides" value={rides.length} color="bg-violet-500" />
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/driver/requests')}
            className="bg-amber-500 hover:bg-amber-600 text-white rounded-2xl p-5 text-left transition-all shadow-sm hover:shadow-md group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Car size={20} className="text-white" />
              </div>
              <ArrowRight size={18} className="text-white/70 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="font-display font-bold text-lg">Ride Requests</p>
            <p className="text-white/75 text-sm mt-0.5">View incoming requests</p>
          </button>

          <button
            onClick={() => navigate('/driver/history')}
            className="bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left transition-all shadow-card hover:shadow-card-hover group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                <DollarSign size={20} className="text-slate-600" />
              </div>
              <ArrowRight size={18} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="font-display font-bold text-lg text-slate-900">Earnings</p>
            <p className="text-slate-500 text-sm mt-0.5">View ride history</p>
          </button>
        </div>
      </div>

      <LocationPickerModal
        isOpen={locationPickerOpen}
        onClose={() => setLocationPickerOpen(false)}
        onConfirm={handleManualLocationSave}
        title="Update driver location"
        confirmLabel="Save driver location"
        currentLocation={currentLocation}
        initialLocation={driverProfile?.manualLocation || liveLocation || currentLocation}
        initialAddress={driverProfile?.manualLocation?.address || ''}
      />
    </AppLayout>
  )
}

export default DriverDashboard
