import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Crosshair, DollarSign, Car, Star, ArrowRight, MapPin, TrendingUp, Calendar, Clock, AlertCircle, Navigation, Zap } from 'lucide-react'
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
import { startLocationBroadcast, stopLocationBroadcast } from '../../services/locationService'
import { formatCurrency } from '../../utils/formatters'

const EarningsCard = ({ period, amount, icon: Icon, color }) => (
  <div className={`rounded-2xl p-4 border-2 bg-gradient-to-br ${color} text-white`}>
    <div className="flex items-center justify-between mb-2">
      <p className="text-xs font-semibold opacity-90 uppercase tracking-wide">{period}</p>
      <Icon size={16} className="opacity-75" />
    </div>
    <p className="text-2xl font-display font-bold">{formatCurrency(amount)}</p>
  </div>
)

const StatCard = ({ icon: Icon, label, value, color, trend }) => (
  <div className="rounded-2xl p-4 bg-white border-2 border-slate-200 hover:border-slate-300 transition-colors">
    <div className="flex items-center justify-between mb-2">
      <p className="text-xs text-slate-500 font-semibold">{label}</p>
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>
        <Icon size={16} className="text-white" />
      </div>
    </div>
    <div className="flex items-end justify-between gap-2">
      <p className="text-xl font-display font-bold text-slate-900">{value}</p>
      {trend && <span className={`text-xs font-semibold ${trend > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
        {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
      </span>}
    </div>
  </div>
)

const ModernDriverDashboard = () => {
  const navigate = useNavigate()
  const { userData } = useAuthStore()
  const { driverProfile, setDriverProfile, isOnline, setIsOnline } = useDriverStore()
  const { location: currentLocation } = useCurrentLocation()
  const { location: liveLocation } = useDriverLocationRealtime(userData?.id)
  const [loading, setLoading] = useState(true)
  const [toggling, setToggling] = useState(false)
  const [rides, setRides] = useState([])
  const [earnings, setEarnings] = useState({ daily: 0, weekly: 0, monthly: 0 })
  const [locationPickerOpen, setLocationPickerOpen] = useState(false)

  useEffect(() => {
    if (!userData?.id) return
    Promise.all([
      getDriverById(userData.id),
      getDriverRides(userData.id),
    ]).then(([driver, rideList]) => {
      if (driver) setDriverProfile(driver)
      setIsOnline(driver?.isOnline)
      
      // Calculate earnings from rides
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
      const monthAgo = new Date(now.getFullYear(), now.getMonth(), 1)

      let dailyEarnings = 0, weeklyEarnings = 0, monthlyEarnings = 0

      rideList.forEach(ride => {
        if (ride.status === 'completed' && ride.fare) {
          const rideDate = ride.createdAt?.toDate?.() || new Date(ride.createdAt)
          monthlyEarnings += ride.fare
          if (rideDate >= weekAgo) weeklyEarnings += ride.fare
          if (rideDate >= today) dailyEarnings += ride.fare
        }
      })

      setEarnings({ daily: dailyEarnings, weekly: weeklyEarnings, monthly: monthlyEarnings })
      setRides(rideList.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)).slice(0, 5))
    }).catch(console.error)
    .finally(() => setLoading(false))
  }, [userData?.id, setDriverProfile, setIsOnline])

  const handleToggle = async () => {
    setToggling(true)
    try {
      const newStatus = !isOnline
      await toggleDriverOnlineStatus(userData.id, newStatus)
      setIsOnline(newStatus)
      if (newStatus) {
        startLocationBroadcast(userData.id, (err) => toast.error(err))
        toast.success('🟢 You are now online! Waiting for ride requests.')
      } else {
        await stopLocationBroadcast(userData.id)
        toast.success('🔴 You are now offline.')
      }
    } catch {
      toast.error('Failed to update status')
    } finally {
      setToggling(false)
    }
  }

  const handleSetLocation = async ({ location, address }) => {
    try {
      await updateDriverProfile(userData.id, {
        manualLocation: { lat: location.lat, lng: location.lng, address }
      })
      setDriverProfile({ ...driverProfile, manualLocation: { lat: location.lat, lng: location.lng, address } })
      toast.success('Location updated!')
    } catch {
      toast.error('Failed to update location')
    }
  }

  if (loading) {
    return (
      <AppLayout title="Dashboard">
        <div className="flex items-center justify-center h-96">
          <Spinner size="lg" />
        </div>
      </AppLayout>
    )
  }

  const completedRides = rides.filter(r => r.status === 'completed').length
  const averageRating = driverProfile?.averageRating || 4.8

  return (
    <AppLayout title="Dashboard">
      <div className="space-y-5">
        {/* Header with Online Toggle */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold text-slate-900">Welcome back! 👋</h1>
            <p className="text-slate-500 text-sm mt-1">
              {isOnline ? '🟢 Online and receiving requests' : '🔴 Offline — Go online to accept rides'}
            </p>
          </div>
          <button
            onClick={handleToggle}
            disabled={toggling}
            className={`relative w-20 h-20 rounded-full font-display font-bold text-white flex items-center justify-center transition-all transform ${
              isOnline
                ? 'bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg hover:shadow-xl hover:scale-105'
                : 'bg-gradient-to-br from-slate-400 to-slate-600 shadow-md hover:shadow-lg'
            } ${toggling ? 'opacity-75' : ''}`}
          >
            {toggling ? <Spinner size="sm" /> : isOnline ? '✓ ON' : 'OFF'}
          </button>
        </div>

        {/* Earnings Summary - Three Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <EarningsCard
            period="Today"
            amount={earnings.daily}
            icon={Clock}
            color="from-blue-500 to-blue-600"
          />
          <EarningsCard
            period="This Week"
            amount={earnings.weekly}
            icon={Calendar}
            color="from-purple-500 to-purple-600"
          />
          <EarningsCard
            period="This Month"
            amount={earnings.monthly}
            icon={TrendingUp}
            color="from-emerald-500 to-emerald-600"
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <StatCard label="Completed Rides" value={completedRides} icon={Car} color="bg-amber-500" trend={12} />
          <StatCard label="Rating" value={averageRating.toFixed(1)} icon={Star} color="bg-yellow-500" trend={5} />
          <StatCard label="Online Status" value={isOnline ? 'Online' : 'Offline'} icon={Zap} color={isOnline ? 'bg-emerald-500' : 'bg-slate-500'} />
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => navigate('/driver/requests')}
            className="bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-2xl p-5 text-left transition-all shadow-md hover:shadow-lg group transform hover:scale-105 duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center">
                <AlertCircle size={20} className="text-white" />
              </div>
              <ArrowRight size={18} className="text-white/70 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="font-display font-bold text-lg">Incoming Requests</p>
            <p className="text-white/80 text-sm mt-0.5">Accept your next ride</p>
          </button>

          <button
            onClick={() => navigate('/driver/profile')}
            className="bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-left transition-all shadow-md hover:shadow-lg group transform hover:scale-105 duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-11 h-11 bg-slate-100 rounded-xl flex items-center justify-center">
                <Car size={20} className="text-slate-600" />
              </div>
              <ArrowRight size={18} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="font-display font-bold text-lg text-slate-900">My Vehicles</p>
            <p className="text-slate-500 text-sm mt-0.5">Manage your vehicles</p>
          </button>
        </div>

        {/* Location Override Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-5 border-2 border-blue-200">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <Crosshair size={18} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Manual Location</p>
                <p className="text-sm text-slate-600 mt-1">
                  {driverProfile?.manualLocation?.address || 'Set a custom location'}
                </p>
              </div>
            </div>
            <Button
              size="sm"
              onClick={() => setLocationPickerOpen(true)}
            >
              Set
            </Button>
          </div>
        </div>

        {/* Recent Rides */}
        {rides.length > 0 && (
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-5">
            <h3 className="font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Clock size={18} className="text-blue-600" />
              Recent Rides
            </h3>
            <div className="space-y-3">
              {rides.slice(0, 3).map((ride) => (
                <div key={ride.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900 text-sm truncate">{ride.pickupAddress}</p>
                    <p className="text-xs text-slate-500 mt-1">→ {ride.dropAddress}</p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-3">
                    <p className="font-display font-bold text-amber-600">{formatCurrency(ride.fare)}</p>
                    <span className={`text-xs font-semibold ${
                      ride.status === 'completed' ? 'text-emerald-600' : 'text-slate-500'
                    }`}>
                      {ride.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="secondary"
              fullWidth
              onClick={() => navigate('/driver/history')}
              className="mt-3"
            >
              View All Rides
            </Button>
          </div>
        )}

        {/* Location Picker Modal */}
        <LocationPickerModal
          isOpen={locationPickerOpen}
          onClose={() => setLocationPickerOpen(false)}
          onConfirm={handleSetLocation}
          title="Set your location"
          confirmLabel="Save location"
          currentLocation={currentLocation}
        />
      </div>
    </AppLayout>
  )
}

export default ModernDriverDashboard
