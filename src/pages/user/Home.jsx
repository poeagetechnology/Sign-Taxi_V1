import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Car, Clock, MapPin, ArrowRight, Zap } from 'lucide-react'
import AppLayout from '../../components/layout/AppLayout'
import MapView from '../../components/maps/MapView'
import DriverMarker from '../../components/maps/DriverMarker'
import UserMarker from '../../components/maps/UserMarker'
import Button from '../../components/common/Button'
import { RideStatusBadge } from '../../components/common/Badge'
import { useCurrentLocation } from '../../hooks/useLocation'
import { useOnlineDrivers } from '../../hooks/useDrivers'
import { useUserActiveRide } from '../../hooks/useRides'
import useAuthStore from '../../store/authStore'
import { formatCurrency } from '../../utils/formatters'

const UserHome = () => {
  const navigate = useNavigate()
  const { userData } = useAuthStore()
  const { location } = useCurrentLocation()
  const onlineDrivers = useOnlineDrivers()
  const activeRide = useUserActiveRide(userData?.id)

  return (
    <AppLayout title="Home">
      <div className="space-y-5">
        {/* Welcome */}
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">
            Hello, {userData?.name?.split(' ')[0]} 👋
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">Where are you headed today?</p>
        </div>

        {/* Active ride banner */}
        {activeRide && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                <Car size={18} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">Active Ride</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <RideStatusBadge status={activeRide.status} />
                  <span className="text-xs text-slate-500">{formatCurrency(activeRide.fare)}</span>
                </div>
              </div>
            </div>
            <Button size="sm" onClick={() => navigate(`/user/track/${activeRide.id}`)}>
              Track <ArrowRight size={14} />
            </Button>
          </div>
        )}

        {/* Map */}
        <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-card">
          <MapView center={location} className="h-full">
            {location && <UserMarker position={location} />}
            {onlineDrivers.map(driver => (
              driver.lat && driver.lng && (
                <DriverMarker
                  key={driver.id}
                  position={{ lat: driver.lat, lng: driver.lng }}
                  driverName="Driver"
                />
              )
            ))}
          </MapView>
        </div>

        {/* Quick actions */}
        {!activeRide && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/user/book')}
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-2xl p-5 text-left transition-all shadow-sm hover:shadow-md group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <ArrowRight size={18} className="text-white/70 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="font-display font-bold text-lg">Book a Ride</p>
              <p className="text-white/75 text-sm mt-0.5">Set pickup & destination</p>
            </button>

            <button
              onClick={() => navigate('/user/history')}
              className="bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left transition-all shadow-card hover:shadow-card-hover group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Clock size={20} className="text-slate-600" />
                </div>
                <ArrowRight size={18} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="font-display font-bold text-lg text-slate-900">Ride History</p>
              <p className="text-slate-500 text-sm mt-0.5">View past trips</p>
            </button>
          </div>
        )}

        {/* Nearby drivers count */}
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span>{onlineDrivers.length} driver{onlineDrivers.length !== 1 ? 's' : ''} available nearby</span>
        </div>
      </div>
    </AppLayout>
  )
}

export default UserHome
