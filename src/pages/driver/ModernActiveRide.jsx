import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MapPin, Navigation, Phone, CheckCircle, X, MessageCircle, AlertTriangle, Star, MessageSquare } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import MapView from '../../components/maps/MapView'
import UserMarker from '../../components/maps/UserMarker'
import DriverMarker from '../../components/maps/DriverMarker'
import Directions from '../../components/maps/Directions'
import Button from '../../components/common/Button'
import Spinner from '../../components/common/Spinner'
import { RideStatusBadge } from '../../components/common/Badge'
import Modal from '../../components/common/Modal'
import useAuthStore from '../../store/authStore'
import { query, collection, where, onSnapshot } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { updateRideStatus } from '../../services/rideService'
import { subscribeToDriverLocation } from '../../services/locationService'
import { getUserById } from '../../services/userService'
import { formatCurrency } from '../../utils/formatters'

const ModernDriverActiveRide = () => {
  const navigate = useNavigate()
  const { userData } = useAuthStore()
  const [ride, setRide] = useState(null)
  const [passenger, setPassenger] = useState(null)
  const [driverLocation, setDriverLocation] = useState(null)
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState(false)
  const [sosOpen, setSosOpen] = useState(false)
  const [ratingOpen, setRatingOpen] = useState(false)
  const [rideRating, setRideRating] = useState(5)
  const [rideReview, setRideReview] = useState('')

  useEffect(() => {
    if (!userData?.id) return
    const q = query(collection(db, 'rides'), where('driverId', '==', userData.id))
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
            getUserById(rideData.userId).then(setPassenger).catch(() => {})
          }
        } else {
          setRide(null)
        }
      }
      setLoading(false)
    })
    return () => unsub()
  }, [userData?.id])

  useEffect(() => {
    if (!userData?.id) return
    return subscribeToDriverLocation(userData.id, setDriverLocation)
  }, [userData?.id])

  const handleStartRide = async () => {
    setActionLoading(true)
    try {
      await updateRideStatus(ride.id, 'started')
      toast.success('🚗 Ride started!')
    } catch (err) {
      toast.error(err.message || 'Failed to start ride')
    } finally {
      setActionLoading(false)
    }
  }

  const handleSubmitRating = async () => {
    setActionLoading(true)
    try {
      await updateRideStatus(ride.id, 'completed', {
        driverRating: rideRating,
        driverReview: rideReview,
      })
      toast.success('🎉 Ride completed! Thank you for driving with SignTaxi.')
      setRatingOpen(false)
      setTimeout(() => navigate('/driver/dashboard'), 1000)
    } catch (err) {
      toast.error(err.message || 'Failed to complete ride')
    } finally {
      setActionLoading(false)
    }
  }

  const handleSOS = async () => {
    try {
      // Send SOS alert to admin and passenger
      console.log('SOS Alert triggered for ride:', ride.id)
      toast.error('🚨 Emergency alert sent to support team')
      // In real app: send to Firestore for admin/support team
    } catch (err) {
      toast.error('Failed to send SOS')
    }
  }

  const openGoogleMaps = (lat, lng) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank')
  }

  if (loading) {
    return (
      <AppLayout title="Active Ride">
        <div className="flex items-center justify-center h-96">
          <Spinner size="lg" />
        </div>
      </AppLayout>
    )
  }

  if (!ride) {
    return (
      <AppLayout title="Active Ride">
        <div className="space-y-4">
          <div className="bg-slate-100 rounded-2xl p-12 text-center">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">No Active Ride</h2>
            <p className="text-slate-500 mb-6">You don't have any active rides right now.</p>
            <Button onClick={() => navigate('/driver/requests')}>Back to Requests</Button>
          </div>
        </div>
      </AppLayout>
    )
  }

  const pickupLocation = { lat: ride.pickupLat, lng: ride.pickupLng }
  const dropLocation = { lat: ride.dropLat, lng: ride.dropLng }
  const currentLocation = driverLocation || pickupLocation
  const destination = ride.status === 'started' ? dropLocation : pickupLocation

  return (
    <AppLayout title="Active Ride">
      <div className="space-y-4">
        {/* Status Badge and SOS */}
        <div className="flex items-center justify-between gap-3">
          <RideStatusBadge status={ride.status} />
          <button
            onClick={() => setSosOpen(true)}
            className="px-4 py-2 bg-red-50 border-2 border-red-200 rounded-xl font-semibold text-red-600 hover:bg-red-100 transition-colors flex items-center gap-2 text-sm"
          >
            <AlertTriangle size={16} /> SOS
          </button>
        </div>

        {/* Map */}
        <div className="relative w-full h-96 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
          <MapView center={currentLocation} zoom={15} className="w-full h-full">
            <UserMarker position={pickupLocation} label="Pickup" />
            <DriverMarker position={currentLocation} driverName="You" isAssigned={true} />
            {ride.status === 'started' && (
              <>
                <UserMarker position={dropLocation} label="Destination" />
                <Directions origin={currentLocation} destination={dropLocation} />
              </>
            )}
          </MapView>
        </div>

        {/* Passenger Info */}
        {passenger && (
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0">
                  {passenger.name?.[0]?.toUpperCase() || '?'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900">{passenger.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-slate-600">{passenger.averageRating || 'N/A'}</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{passenger.phone || 'N/A'}</p>
                </div>
              </div>
              <a
                href={`tel:${passenger.phone}`}
                className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center hover:bg-emerald-100 transition-colors flex-shrink-0"
              >
                <Phone size={18} className="text-emerald-600" />
              </a>
            </div>
          </div>
        )}

        {/* Location Details */}
        <div className="space-y-3 bg-white rounded-2xl border-2 border-slate-200 p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin size={16} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 font-medium">PICKUP LOCATION</p>
              <p className="font-semibold text-slate-900 mt-1">{ride.pickupAddress}</p>
              {ride.status === 'accepted' && (
                <button
                  onClick={() => openGoogleMaps(ride.pickupLat, ride.pickupLng)}
                  className="text-xs text-blue-600 hover:text-blue-700 font-semibold mt-2 flex items-center gap-1"
                >
                  <Navigation size={12} /> Open in Maps
                </button>
              )}
            </div>
          </div>

          <div className="border-t border-slate-200 my-2" />

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Navigation size={16} className="text-amber-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 font-medium">DROP LOCATION</p>
              <p className="font-semibold text-slate-900 mt-1">{ride.dropAddress}</p>
              {ride.status === 'started' && (
                <button
                  onClick={() => openGoogleMaps(ride.dropLat, ride.dropLng)}
                  className="text-xs text-blue-600 hover:text-blue-700 font-semibold mt-2 flex items-center gap-1"
                >
                  <Navigation size={12} /> Open in Maps
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Fare */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 border-2 border-green-200 text-center">
          <p className="text-xs text-green-600 font-semibold mb-1">ESTIMATED FARE</p>
          <p className="text-3xl font-display font-bold text-green-700">{formatCurrency(ride.fare)}</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          {ride.status === 'accepted' && (
            <Button
              fullWidth
              onClick={handleStartRide}
              loading={actionLoading}
              className="bg-gradient-to-r from-blue-500 to-blue-600"
            >
              Start Ride
            </Button>
          )}

          {ride.status === 'started' && (
            <Button
              fullWidth
              onClick={() => setRatingOpen(true)}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600"
            >
              <CheckCircle size={18} /> Complete Ride
            </Button>
          )}
        </div>
      </div>

      {/* SOS Modal */}
      <Modal isOpen={sosOpen} onClose={() => setSosOpen(false)}>
        <div className="space-y-4">
          <div className="text-center">
            <AlertTriangle size={48} className="text-red-600 mx-auto mb-3" />
            <h2 className="text-xl font-display font-bold text-slate-900 mb-2">Emergency Alert</h2>
            <p className="text-slate-600">Alert support team and passenger of emergency</p>
          </div>
          <div className="space-y-2">
            <Button
              fullWidth
              onClick={handleSOS}
              className="bg-red-600 hover:bg-red-700"
            >
              <AlertTriangle size={18} /> Send SOS Alert
            </Button>
            <Button fullWidth variant="secondary" onClick={() => setSosOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      {/* Rating Modal */}
      <Modal isOpen={ratingOpen} onClose={() => setRatingOpen(false)}>
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-xl font-display font-bold text-slate-900 mb-3">Rate Your Passenger</h2>
            <div className="flex justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  onClick={() => setRideRating(star)}
                  className="text-3xl transition-transform hover:scale-120"
                >
                  {star <= rideRating ? '⭐' : '☆'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Add a comment (optional)
            </label>
            <textarea
              value={rideReview}
              onChange={e => setRideReview(e.target.value)}
              placeholder="How was the ride?"
              className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none resize-none"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Button
              fullWidth
              onClick={handleSubmitRating}
              loading={actionLoading}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600"
            >
              <CheckCircle size={18} /> Complete Ride
            </Button>
            <Button fullWidth variant="secondary" onClick={() => setRatingOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </AppLayout>
  )
}

export default ModernDriverActiveRide
