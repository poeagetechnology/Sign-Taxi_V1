import React, { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Navigation, DollarSign, Check, X, Car } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import EmptyState from '../../components/common/EmptyState'
import Spinner from '../../components/common/Spinner'
import Button from '../../components/common/Button'
import useAuthStore from '../../store/authStore'
import useDriverStore from '../../store/driverStore'
import { usePendingRides } from '../../hooks/useRides'
import { useCurrentLocation } from '../../hooks/useLocation'
import { acceptRide } from '../../services/rideService'
import { getDriverById } from '../../services/driverService'
import { formatCurrency, formatTimeAgo, truncate } from '../../utils/formatters'

const RADIUS_KM = 10 // Show rides within 10km

const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const toRad = (v) => (v * Math.PI) / 180
  const R = 6371
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

const DriverRequests = () => {
  const navigate = useNavigate()
  const { userData } = useAuthStore()
  const { driverProfile, setDriverProfile, isOnline } = useDriverStore()
  const pendingRides = usePendingRides()
  const { location: driverLocation } = useCurrentLocation()
  const [actionId, setActionId] = useState(null)
  const [loadingProfile, setLoadingProfile] = useState(!driverProfile)

  // Filter rides by proximity
  const nearbyRides = useMemo(() => {
    if (!driverLocation) return pendingRides
    return pendingRides.filter(ride => {
      const distance = calculateDistance(
        driverLocation.lat,
        driverLocation.lng,
        ride.pickupLat,
        ride.pickupLng
      )
      return distance <= RADIUS_KM
    })
  }, [pendingRides, driverLocation])

  useEffect(() => {
    if (!driverProfile && userData?.id) {
      getDriverById(userData.id)
        .then(p => { if (p) setDriverProfile(p) })
        .finally(() => setLoadingProfile(false))
    } else {
      setLoadingProfile(false)
    }
  }, [userData?.id])

  const handleAccept = async (ride) => {
    if (!driverProfile?.isApproved) { toast.error('Your account is not approved yet.'); return }
    if (!isOnline) { toast.error('You must be online to accept rides.'); return }
    setActionId(ride.id)
    try {
      await acceptRide(ride.id, userData.id)
      toast.success('Ride accepted! Head to the pickup location.')
      navigate('/driver/active')
    } catch (err) {
      toast.error(err.message || 'Failed to accept ride')
    } finally {
      setActionId(null)
    }
  }

  if (loadingProfile) return (
    <AppLayout title="Requests">
      <div className="flex items-center justify-center h-64"><Spinner size="lg" /></div>
    </AppLayout>
  )

  return (
    <AppLayout title="Requests">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-900">Ride Requests</h1>
            <p className="text-slate-500 text-sm mt-0.5">{nearbyRides.length} nearby request{nearbyRides.length !== 1 ? 's' : ''} {driverLocation && `(within ${RADIUS_KM}km)`}</p>
          </div>
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ${isOnline ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
            <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-emerald-400 animate-pulse' : 'bg-slate-400'}`} />
            {isOnline ? 'Online' : 'Offline'}
          </div>
        </div>

        {!isOnline && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
            <p className="text-slate-600 text-sm font-medium">You are offline</p>
            <p className="text-slate-400 text-xs mt-1">Go to Dashboard to go online and receive requests.</p>
          </div>
        )}

        {pendingRides.length === 0 ? (
          <EmptyState
            icon={Car}
            title="No ride requests"
            description={isOnline ? "Waiting for passengers to book a ride nearby." : "Go online to start receiving ride requests."}
          />
        ) : nearbyRides.length === 0 ? (
          <EmptyState
            icon={Car}
            title="No nearby rides"
            description={`No ride requests within ${RADIUS_KM}km of your location. Move to a busier area or increase your service radius.`}
          />
        ) : (
          <div className="space-y-3">
            {nearbyRides.map(ride => (
              <div key={ride.id} className="card hover:shadow-card-hover transition-shadow border border-slate-100">
                {/* Route */}
                <div className="space-y-2.5 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={14} className="text-blue-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">PICKUP</p>
                      <p className="text-sm text-slate-700">{truncate(ride.pickupAddress, 55) || '—'}</p>
                    </div>
                  </div>
                  <div className="border-l-2 border-dashed border-slate-200 ml-4 h-3" />
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                      <Navigation size={14} className="text-amber-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">DESTINATION</p>
                      <p className="text-sm text-slate-700">{truncate(ride.dropAddress, 55) || '—'}</p>
                    </div>
                  </div>
                </div>

                {/* Fare + time */}
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-sm font-bold px-3 py-1.5 rounded-lg">
                    <DollarSign size={14} />
                    {formatCurrency(ride.fare || 0)}
                  </div>
                  <span className="text-xs text-slate-400">{formatTimeAgo(ride.createdAt)}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-3">
                  <Button
                    fullWidth
                    variant="success"
                    loading={actionId === ride.id}
                    disabled={!isOnline || !driverProfile?.isApproved}
                    onClick={() => handleAccept(ride)}
                  >
                    <Check size={16} /> Accept Ride
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  )
}

export default DriverRequests
