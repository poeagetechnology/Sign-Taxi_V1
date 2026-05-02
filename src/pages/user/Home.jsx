import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Car, Clock, MapPin, ArrowRight, MapPin as LocationIcon, Compass } from 'lucide-react'
import AppLayout from '../../components/layout/AppLayout'
import Button from '../../components/common/Button'
import { RideStatusBadge } from '../../components/common/Badge'
import { useOnlineDrivers } from '../../hooks/useDrivers'
import { useUserActiveRide } from '../../hooks/useRides'
import NearbyDriversMap from '../../components/maps/NearbyDriversMap'
import QuickTripSelector from '../../components/booking/QuickTripSelector'
import useAuthStore from '../../store/authStore'
import { formatCurrency } from '../../utils/formatters'

const UserHome = () => {
  const navigate = useNavigate()
  const { userData } = useAuthStore()
  const onlineDrivers = useOnlineDrivers()
  const activeRide = useUserActiveRide(userData?.id)

  const handleQuickTripSelect = (tripType) => {
    navigate(`/user/modern-book?tripType=${tripType}`)
  }

  return (
    <AppLayout title="Home">
      <div className="space-y-4">
        {/* Welcome */}
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">
            Hello, {userData?.name?.split(' ')[0]} 👋
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">Ready for a ride?</p>
        </div>

        {/* Active ride banner - Enhanced */}
        {activeRide && (
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                <Car size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900 text-sm">Active Ride</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <RideStatusBadge status={activeRide.status} />
                  <span className="text-xs font-semibold text-amber-600">{formatCurrency(activeRide.fare)}</span>
                </div>
              </div>
            </div>
            <Button
              size="sm"
              onClick={() => navigate(`/user/track/${activeRide.id}`)}
              className="font-semibold"
            >
              Track <ArrowRight size={14} />
            </Button>
          </div>
        )}

        {/* Quick action buttons - Hidden when active ride */}
        {!activeRide && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => navigate('/user/modern-book')}
              className="bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-2xl p-5 text-left transition-all shadow-md hover:shadow-lg group transform hover:scale-105 duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center">
                  <LocationIcon size={20} className="text-white" />
                </div>
                <ArrowRight size={18} className="text-white/70 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="font-display font-bold text-lg">Book a Ride</p>
              <p className="text-white/80 text-sm mt-0.5">See available rides</p>
            </button>

            <button
              onClick={() => navigate('/user/history')}
              className="bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-left transition-all shadow-md hover:shadow-lg group transform hover:scale-105 duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Clock size={20} className="text-slate-600" />
                </div>
                <ArrowRight size={18} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="font-display font-bold text-lg text-slate-900">Ride History</p>
              <p className="text-slate-500 text-sm mt-0.5">View past trips</p>
            </button>
          </div>
        )}

        {/* Quick trip types - Modern selector */}
        {!activeRide && (
          <div className="mt-2">
            <QuickTripSelector onSelectTrip={handleQuickTripSelect} />
          </div>
        )}

        {/* Nearby Places Card */}
        {!activeRide && (
          <button
            onClick={() => navigate('/user/nearby-places')}
            className="w-full bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-4 text-left transition-all shadow-sm hover:shadow-md hover:border-purple-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Compass size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900 text-sm">Nearby Places</p>
                  <p className="text-xs text-slate-500 mt-0.5">5 neighborhoods & landmarks</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-purple-600" />
            </div>
          </button>
        )}

        {/* Nearby drivers on map */}
        <div className="mt-4">
          <NearbyDriversMap radiusKm={5} />
        </div>
      </div>
    </AppLayout>
  )
}

export default UserHome
