import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToggleLeft, ToggleRight, DollarSign, Car, Star, ArrowRight, AlertCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import Spinner from '../../components/common/Spinner'
import Button from '../../components/common/Button'
import useAuthStore from '../../store/authStore'
import useDriverStore from '../../store/driverStore'
import { getDriverById, toggleDriverOnlineStatus } from '../../services/driverService'
import { getDriverRides } from '../../services/rideService'
import { startLocationBroadcast, stopLocationBroadcast } from '../../services/locationService'
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
  const [loading, setLoading] = useState(true)
  const [toggling, setToggling] = useState(false)
  const [rides, setRides] = useState([])

  useEffect(() => {
    if (!userData?.id) return
    Promise.all([
      getDriverById(userData.id),
      getDriverRides(userData.id),
    ]).then(([driver, rideList]) => {
      if (driver) { setDriverProfile(driver); setIsOnline(driver.isOnline) }
      setRides(rideList)
    }).catch(console.error)
    .finally(() => setLoading(false))
  }, [userData?.id])

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
        startLocationBroadcast(userData.id, (err) => toast.error(err))
        toast.success('You are now online! Waiting for ride requests.')
      } else {
        await stopLocationBroadcast(userData.id)
        toast.success('You are now offline.')
      }
    } catch { toast.error('Failed to update status') }
    finally { setToggling(false) }
  }

  const completedRides = rides.filter(r => r.status === 'completed')
  const totalEarnings = completedRides.reduce((s, r) => s + (r.fare || 0), 0)

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
    </AppLayout>
  )
}

export default DriverDashboard
