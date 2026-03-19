import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Navigation, Phone, CheckCircle, Play } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import MapView from '../../components/maps/MapView'
import UserMarker from '../../components/maps/UserMarker'
import DriverMarker from '../../components/maps/DriverMarker'
import Directions from '../../components/maps/Directions'
import Button from '../../components/common/Button'
import Spinner from '../../components/common/Spinner'
import { RideStatusBadge } from '../../components/common/Badge'
import useAuthStore from '../../store/authStore'
import { query, collection, where, onSnapshot } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { updateRideStatus } from '../../services/rideService'
import { subscribeToDriverLocation } from '../../services/locationService'
import { getUserById } from '../../services/userService'
import { formatCurrency } from '../../utils/formatters'

const DriverActiveRide = () => {
  const navigate = useNavigate()
  const { userData } = useAuthStore()
  const [ride, setRide] = useState(null)
  const [passengerInfo, setPassengerInfo] = useState(null)
  const [driverLocation, setDriverLocation] = useState(null)
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState(false)

  useEffect(() => {
    if (!userData?.id) return
    const q = query(
      collection(db, 'rides'),
      where('driverId', '==', userData.id)
    )
    const unsub = onSnapshot(q, (snap) => {
      if (!snap.empty) {
        const activeRide = snap.docs.find(doc => {
          const status = doc.data().status
          return ['accepted', 'started'].includes(status)
        })
        if (activeRide) {
          const rideData = { id: activeRide.id, ...activeRide.data() }
          setRide(rideData)
          if (rideData.userId) {
            getUserById(rideData.userId).then(setPassengerInfo).catch(() => {})
          }
        } else {
          setRide(null)
        }
      } else {
        setRide(null)
      }
      setLoading(false)
    })
    return () => unsub()
  }, [userData?.id])

  useEffect(() => {
    if (!userData?.id) return
    const unsub = subscribeToDriverLocation(userData.id, (loc) => {
      if (loc.lat && loc.lng) setDriverLocation({ lat: loc.lat, lng: loc.lng })
    })
    return () => unsub()
  }, [userData?.id])

  const handleStart = async () => {
    if (!ride) return
    setActionLoading(true)
    try {
      await updateRideStatus(ride.id, 'started')
      toast.success('Ride started!')
    } catch { toast.error('Failed to start ride') }
    finally { setActionLoading(false) }
  }

  const handleComplete = async () => {
    if (!ride) return
    if (!window.confirm('Mark this ride as completed?')) return
    setActionLoading(true)
    try {
      await updateRideStatus(ride.id, 'completed')
      toast.success(`Ride completed! You earned ${formatCurrency(ride.fare)}.`)
      navigate('/driver/dashboard')
    } catch { toast.error('Failed to complete ride') }
    finally { setActionLoading(false) }
  }

  if (loading) return (
    <AppLayout title="Active Ride">
      <div className="flex items-center justify-center h-64"><Spinner size="lg" /></div>
    </AppLayout>
  )

  if (!ride) return (
    <AppLayout title="Active Ride">
      <div className="text-center py-20">
        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={28} className="text-slate-400" />
        </div>
        <p className="font-semibold text-slate-700">No active ride</p>
        <p className="text-slate-400 text-sm mt-1">Accept a request from the Requests tab.</p>
        <Button className="mt-4" onClick={() => navigate('/driver/requests')}>View Requests</Button>
      </div>
    </AppLayout>
  )

  const pickupPos = { lat: ride.pickupLat, lng: ride.pickupLng }
  const dropPos = { lat: ride.dropLat, lng: ride.dropLng }
  const mapCenter = driverLocation || pickupPos
  const navTarget = ride.status === 'accepted' ? pickupPos : dropPos

  return (
    <AppLayout title="Active Ride">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-900">Active Ride</h1>
            <p className="text-slate-500 text-sm mt-0.5">
              {ride.status === 'accepted' ? 'Drive to pickup location' : 'Ride in progress — drive to destination'}
            </p>
          </div>
          <RideStatusBadge status={ride.status} />
        </div>

        {/* Map */}
        <div className="h-72 md:h-96 rounded-2xl overflow-hidden shadow-card">
          <MapView center={mapCenter} className="h-full">
            <UserMarker position={pickupPos} label="Pickup" />
            <UserMarker position={dropPos} label="Drop" />
            {driverLocation && (
              <DriverMarker position={driverLocation} driverName="You" isAssigned />
            )}
            {driverLocation && (
              <Directions origin={driverLocation} destination={navTarget} />
            )}
          </MapView>
        </div>

        {/* Passenger info */}
        {passengerInfo && (
          <div className="card flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
              <span className="font-bold text-blue-600 text-lg">
                {passengerInfo.name?.[0]?.toUpperCase() || 'P'}
              </span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-900">{passengerInfo.name}</p>
              <p className="text-sm text-slate-500">{passengerInfo.phone}</p>
            </div>
            {passengerInfo.phone && (
              <a href={`tel:${passengerInfo.phone}`} className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                <Phone size={18} className="text-emerald-600" />
              </a>
            )}
          </div>
        )}

        {/* Route */}
        <div className="card space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
              <MapPin size={15} className="text-blue-500" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">PICKUP</p>
              <p className="text-sm text-slate-700">{ride.pickupAddress}</p>
            </div>
          </div>
          <div className="border-l-2 border-dashed border-slate-200 ml-4 h-3" />
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
              <Navigation size={15} className="text-amber-500" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">DESTINATION</p>
              <p className="text-sm text-slate-700">{ride.dropAddress}</p>
            </div>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <p className="text-sm text-slate-500">Fare</p>
            <p className="font-display font-bold text-slate-900">{formatCurrency(ride.fare)}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {ride.status === 'accepted' && (
            <Button fullWidth variant="success" loading={actionLoading} onClick={handleStart}>
              <Play size={16} /> Start Ride
            </Button>
          )}
          {ride.status === 'started' && (
            <Button fullWidth loading={actionLoading} onClick={handleComplete}>
              <CheckCircle size={16} /> Complete Ride
            </Button>
          )}
        </div>
      </div>
    </AppLayout>
  )
}

export default DriverActiveRide
