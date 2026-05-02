import React, { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Car, MapPin, Navigation, Phone, X, CheckCircle, Clock, AlertCircle, Zap } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import MapView from '../../components/maps/MapView'
import UserMarker from '../../components/maps/UserMarker'
import DriverMarker from '../../components/maps/DriverMarker'
import Directions from '../../components/maps/Directions'
import Button from '../../components/common/Button'
import Spinner from '../../components/common/Spinner'
import { RideStatusBadge } from '../../components/common/Badge'
import { subscribeToRide, cancelRide } from '../../services/rideService'
import { subscribeToDriverLocation } from '../../services/locationService'
import { getUserById } from '../../services/userService'
import { initializeDispatch } from '../../services/dispatchManager'
import { formatCurrency } from '../../utils/formatters'

const ModernTrackRide = () => {
  const { rideId } = useParams()
  const navigate = useNavigate()
  const [ride, setRide] = useState(null)
  const [driverLocation, setDriverLocation] = useState(null)
  const [driverInfo, setDriverInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [cancelling, setCancelling] = useState(false)
  const dispatcherRef = useRef(null)
  const dispatchInitializedRef = useRef(false)

  useEffect(() => {
    if (!rideId) return
    const unsub = subscribeToRide(rideId, (rideData) => {
      setRide(rideData)
      setLoading(false)

      // Initialize dispatch if ride is in requested status and dispatch not yet started
      if (
        rideData.status === 'requested' &&
        !dispatchInitializedRef.current &&
        rideData.pickupLat &&
        rideData.pickupLng
      ) {
        dispatchInitializedRef.current = true
        initializeDispatch(rideId, rideData.pickupLat, rideData.pickupLng, 5)
          .then(({ dispatcher }) => {
            dispatcherRef.current = dispatcher
            dispatcher.startDispatching((update) => {
              console.log('Dispatch update:', update)
            })
          })
          .catch((err) => {
            console.error('Failed to initialize dispatch:', err)
            toast.error('Failed to find drivers. Please try again.')
          })
      }
    })
    return () => unsub()
  }, [rideId])

  useEffect(() => {
    if (!ride?.driverId) return
    const unsub = subscribeToDriverLocation(ride.driverId, (loc) => {
      if (loc.lat && loc.lng) setDriverLocation({ lat: loc.lat, lng: loc.lng })
    })
    getUserById(ride.driverId)
      .then((u) => setDriverInfo(u))
      .catch(() => {})
    return () => unsub()
  }, [ride?.driverId])

  const handleCancel = async () => {
    if (!window.confirm('Cancel this ride?')) return
    setCancelling(true)
    try {
      // Stop dispatcher if active
      if (dispatcherRef.current) {
        dispatcherRef.current.cancel()
      }
      await cancelRide(rideId)
      toast.success('Ride cancelled')
      navigate('/user/home')
    } catch {
      toast.error('Failed to cancel')
    } finally {
      setCancelling(false)
    }
  }

  // Cleanup dispatcher on unmount
  useEffect(() => {
    return () => {
      if (dispatcherRef.current) {
        dispatcherRef.current.cancel()
      }
    }
  }, [])

  if (loading) {
    return (
      <AppLayout title="Track Ride">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <Spinner size="lg" />
            <p className="text-slate-500 mt-3">Loading ride details…</p>
          </div>
        </div>
      </AppLayout>
    )
  }

  if (!ride) {
    return (
      <AppLayout title="Track Ride">
        <div className="text-center py-20">
          <AlertCircle size={48} className="mx-auto text-red-400 mb-3" />
          <p className="text-slate-900 font-semibold">Ride not found</p>
          <p className="text-slate-500 text-sm mt-1">Try going back and booking again.</p>
          <Button className="mt-4" onClick={() => navigate('/user/home')}>
            Go Home
          </Button>
        </div>
      </AppLayout>
    )
  }

  const pickupPos = { lat: ride.pickupLat, lng: ride.pickupLng }
  const dropPos = { lat: ride.dropLat, lng: ride.dropLng }
  const mapCenter = driverLocation || pickupPos

  const statusConfig = {
    searching: {
      title: 'Finding a Driver',
      message: 'Searching for the nearest driver…',
      icon: '🔍',
      color: 'from-blue-500 to-blue-600',
      progress: 25,
    },
    requested: {
      title: 'Finding a Driver',
      message: 'Searching for the nearest driver…',
      icon: '🔍',
      color: 'from-blue-500 to-blue-600',
      progress: 25,
    },
    accepted: {
      title: 'Driver on the Way',
      message: 'Your driver is heading to pickup location',
      icon: '🚗',
      color: 'from-amber-500 to-orange-500',
      progress: 50,
    },
    started: {
      title: 'Ride in Progress',
      message: 'Enjoy your trip! Driver is taking you to destination',
      icon: '🎉',
      color: 'from-green-500 to-emerald-500',
      progress: 75,
    },
    completed: {
      title: 'Ride Completed',
      message: 'Thank you for riding with us!',
      icon: '✅',
      color: 'from-green-600 to-green-700',
      progress: 100,
    },
    cancelled: {
      title: 'Ride Cancelled',
      message: 'This ride was cancelled',
      icon: '❌',
      color: 'from-red-500 to-red-600',
      progress: 0,
    },
  }

  const config = statusConfig[ride.status] || statusConfig.requested

  return (
    <AppLayout title="Track Ride">
      <div className="space-y-4">
        {/* Header with Status */}
        <div className="relative">
          <div className={`bg-gradient-to-r ${config.color} text-white rounded-2xl p-5 shadow-lg`}>
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl">{config.icon}</span>
              <div className="flex-1">
                <h1 className="font-display text-2xl font-bold">{config.title}</h1>
                <p className="text-white/90 text-sm mt-1">{config.message}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 h-2 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-500"
                style={{ width: `${config.progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
          <MapView center={mapCenter} className="h-full">
            <UserMarker position={pickupPos} label="Pickup" />
            <UserMarker position={dropPos} label="Drop" />
            {driverLocation && (
              <DriverMarker
                position={driverLocation}
                driverName={driverInfo?.name || 'Driver'}
                isAssigned={true}
              />
            )}
            {ride.status === 'started' && (
              <Directions origin={driverLocation || pickupPos} destination={dropPos} />
            )}
            {ride.status === 'accepted' && driverLocation && (
              <Directions origin={driverLocation} destination={pickupPos} />
            )}
          </MapView>
        </div>

        {/* Main Info Card */}
        <div className="bg-white rounded-2xl p-5 shadow-md border-2 border-slate-100">
          {/* Driver Info - Enhanced */}
          {ride.driverId && driverInfo ? (
            <div className="flex items-center gap-4 pb-5 border-b-2 border-slate-100">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-md">
                <Car size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900 text-lg">{driverInfo.name}</p>
                <p className="text-sm text-slate-500">Professional Driver</p>
              </div>
              {driverInfo.phone && (
                <a
                  href={`tel:${driverInfo.phone}`}
                  className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center hover:shadow-lg transition-all transform hover:scale-110"
                >
                  <Phone size={20} className="text-white" />
                </a>
              )}
            </div>
          ) : ride.status === 'requested' ? (
            <div className="flex items-center gap-3 pb-5 border-b-2 border-slate-100 animate-pulse">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Spinner size="sm" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-600">Searching for driver…</p>
              </div>
            </div>
          ) : null}

          {/* Route Details */}
          <div className="space-y-4 py-4">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin size={18} className="text-blue-600" />
                </div>
                <div className="w-1 h-12 bg-gradient-to-b from-blue-300 to-amber-300 my-2" />
              </div>
              <div className="flex-1 pb-4">
                <p className="text-xs text-slate-400 font-semibold mb-1">PICKUP</p>
                <p className="font-semibold text-slate-900">{ride.pickupAddress}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Navigation size={18} className="text-amber-600" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-400 font-semibold mb-1">DESTINATION</p>
                <p className="font-semibold text-slate-900">{ride.dropAddress}</p>
              </div>
            </div>
          </div>

          {/* Fare Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border-2 border-blue-200 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-500 font-semibold">ESTIMATED FARE</p>
              <p className="text-2xl font-display font-bold text-slate-900">{formatCurrency(ride.fare)}</p>
            </div>
            <Zap size={24} className="text-amber-500" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {['requested', 'accepted'].includes(ride.status) && (
            <Button
              fullWidth
              variant="danger"
              size="lg"
              loading={cancelling}
              onClick={handleCancel}
            >
              <X size={18} /> Cancel Ride
            </Button>
          )}

          {ride.status === 'completed' && (
            <div className="space-y-3">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center">
                <CheckCircle size={32} className="mx-auto text-green-600 mb-2" />
                <p className="font-semibold text-green-900">Ride Completed Successfully!</p>
                <p className="text-sm text-green-700 mt-1">Thank you for using Sign Taxi</p>
              </div>
              <Button fullWidth onClick={() => navigate('/user/home')}>
                Go to Home
              </Button>
            </div>
          )}

          {ride.status === 'cancelled' && (
            <Button fullWidth onClick={() => navigate('/user/home')}>
              Back to Home
            </Button>
          )}
        </div>
      </div>
    </AppLayout>
  )
}

export default ModernTrackRide
