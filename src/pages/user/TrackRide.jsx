import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Car, MapPin, Navigation, Phone, X } from 'lucide-react'
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
import { formatCurrency } from '../../utils/formatters'

const TrackRide = () => {
  const { rideId } = useParams()
  const navigate = useNavigate()
  const [ride, setRide] = useState(null)
  const [driverLocation, setDriverLocation] = useState(null)
  const [driverInfo, setDriverInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [cancelling, setCancelling] = useState(false)

  useEffect(() => {
    if (!rideId) return
    const unsub = subscribeToRide(rideId, (rideData) => {
      setRide(rideData)
      setLoading(false)
    })
    return () => unsub()
  }, [rideId])

  useEffect(() => {
    if (!ride?.driverId) return
    const unsub = subscribeToDriverLocation(ride.driverId, (loc) => {
      if (loc.lat && loc.lng) setDriverLocation({ lat: loc.lat, lng: loc.lng })
    })
    getUserById(ride.driverId).then(u => setDriverInfo(u)).catch(() => {})
    return () => unsub()
  }, [ride?.driverId])

  const handleCancel = async () => {
    if (!window.confirm('Cancel this ride?')) return
    setCancelling(true)
    try {
      await cancelRide(rideId)
      toast.success('Ride cancelled')
      navigate('/user/home')
    } catch { toast.error('Failed to cancel') }
    finally { setCancelling(false) }
  }

  if (loading) return (
    <AppLayout title="Track Ride">
      <div className="flex items-center justify-center h-64"><Spinner size="lg" /></div>
    </AppLayout>
  )

  if (!ride) return (
    <AppLayout title="Track Ride">
      <div className="text-center py-20">
        <p className="text-slate-500">Ride not found.</p>
        <Button className="mt-4" onClick={() => navigate('/user/home')}>Go Home</Button>
      </div>
    </AppLayout>
  )

  const pickupPos = { lat: ride.pickupLat, lng: ride.pickupLng }
  const dropPos = { lat: ride.dropLat, lng: ride.dropLng }
  const mapCenter = driverLocation || pickupPos

  const statusMessages = {
    requested: 'Waiting for a driver to accept…',
    accepted: 'Driver is on the way to you!',
    started: 'Ride in progress — enjoy your trip!',
    completed: 'Ride completed. Hope you enjoyed!',
    cancelled: 'This ride was cancelled.',
  }

  return (
    <AppLayout title="Track Ride">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-900">Live Tracking</h1>
            <p className="text-slate-500 text-sm mt-0.5">{statusMessages[ride.status]}</p>
          </div>
          <RideStatusBadge status={ride.status} />
        </div>

        {/* Map */}
        <div className="h-80 md:h-96 rounded-2xl overflow-hidden shadow-card">
          <MapView center={mapCenter} className="h-full">
            <UserMarker position={pickupPos} label="Pickup" />
            <UserMarker position={dropPos} label="Drop" />
            {driverLocation && (
              <DriverMarker
                position={driverLocation}
                driverName={driverInfo?.name || 'Driver'}
                isAssigned
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

        {/* Ride info card */}
        <div className="card space-y-4">
          {/* Driver info */}
          {ride.driverId && driverInfo ? (
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Car size={22} className="text-amber-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">{driverInfo.name}</p>
                <p className="text-sm text-slate-500">{driverInfo.phone}</p>
              </div>
              {driverInfo.phone && (
                <a href={`tel:${driverInfo.phone}`} className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center hover:bg-emerald-100 transition-colors">
                  <Phone size={18} className="text-emerald-600" />
                </a>
              )}
            </div>
          ) : ride.status === 'requested' ? (
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <Spinner size="sm" />
              <p className="text-sm text-slate-500">Searching for a nearby driver…</p>
            </div>
          ) : null}

          {/* Route */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                <MapPin size={15} className="text-blue-500" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">PICKUP</p>
                <p className="text-sm text-slate-700">{ride.pickupAddress}</p>
              </div>
            </div>
            <div className="border-l-2 border-dashed border-slate-200 ml-4 h-4" />
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                <Navigation size={15} className="text-amber-500" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">DESTINATION</p>
                <p className="text-sm text-slate-700">{ride.dropAddress}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <div>
              <p className="text-xs text-slate-400">Estimated Fare</p>
              <p className="text-xl font-display font-bold text-slate-900">{formatCurrency(ride.fare)}</p>
            </div>
            {['requested', 'accepted'].includes(ride.status) && (
              <Button variant="danger" size="sm" loading={cancelling} onClick={handleCancel}>
                <X size={14} /> Cancel Ride
              </Button>
            )}
            {['completed', 'cancelled'].includes(ride.status) && (
              <Button onClick={() => navigate('/user/home')}>
                Back to Home
              </Button>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default TrackRide
