import React, { useState, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Navigation, DollarSign, Clock, ArrowRight } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import MapView from '../../components/maps/MapView'
import UserMarker from '../../components/maps/UserMarker'
import DriverMarker from '../../components/maps/DriverMarker'
import Directions from '../../components/maps/Directions'
import Button from '../../components/common/Button'
import { useCurrentLocation } from '../../hooks/useLocation'
import { useOnlineDrivers } from '../../hooks/useDrivers'
import useAuthStore from '../../store/authStore'
import { createRide } from '../../services/rideService'
import { reverseGeocode } from '../../services/locationService'
import { calculateFareFromDistance } from '../../utils/fareCalculator'
import { formatCurrency } from '../../utils/formatters'

const STEP = { PICKUP: 'pickup', DROP: 'drop', CONFIRM: 'confirm' }

const BookRide = () => {
  const navigate = useNavigate()
  const { userData } = useAuthStore()
  const { location: currentLocation } = useCurrentLocation()
  const onlineDrivers = useOnlineDrivers()
  const mapRef = useRef(null)

  const [step, setStep] = useState(STEP.PICKUP)
  const [pickup, setPickup] = useState(null)
  const [pickupAddress, setPickupAddress] = useState('')
  const [drop, setDrop] = useState(null)
  const [dropAddress, setDropAddress] = useState('')
  const [routeInfo, setRouteInfo] = useState(null)
  const [fare, setFare] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleMapClick = useCallback(async (e) => {
    const lat = e.latLng.lat()
    const lng = e.latLng.lng()
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    const address = await reverseGeocode(lat, lng, apiKey)

    if (step === STEP.PICKUP) {
      setPickup({ lat, lng })
      setPickupAddress(address)
    } else if (step === STEP.DROP) {
      setDrop({ lat, lng })
      setDropAddress(address)
    }
  }, [step])

  const handleRouteResult = useCallback((info) => {
    setRouteInfo(info)
    const calculatedFare = calculateFareFromDistance(info.distance)
    setFare(calculatedFare)
  }, [])

  const getStraightLineDistanceMeters = (a, b) => {
    if (!a || !b) return 0
    const toRad = (v) => (v * Math.PI) / 180
    const R = 6371000
    const dLat = toRad(b.lat - a.lat)
    const dLng = toRad(b.lng - a.lng)
    const aa =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2)
    const c = 2 * Math.atan2(Math.sqrt(aa), Math.sqrt(1 - aa))
    return R * c
  }

  const handleUseCurrentLocation = () => {
    if (!currentLocation) { toast.error('Location not available'); return }
    setPickup(currentLocation)
    setPickupAddress('Your current location')
  }

  const handleNext = () => {
    if (step === STEP.PICKUP) {
      if (!pickup) { toast.error('Please select a pickup location on the map'); return }
      setStep(STEP.DROP)
    } else if (step === STEP.DROP) {
      if (!drop) { toast.error('Please select a drop location on the map'); return }
      setStep(STEP.CONFIRM)
    }
  }

  const handleBook = async () => {
    if (!pickup || !drop) {
      toast.error('Please set both pickup and drop locations')
      return
    }

    if (!routeInfo) {
      const straightDistance = getStraightLineDistanceMeters(pickup, drop)
      const straightFare = calculateFareFromDistance(straightDistance)
      const straightDistanceText = `${(straightDistance / 1000).toFixed(2)} km`
      setRouteInfo({ distance: straightDistance, duration: 'N/A', distanceText: straightDistanceText })
      setFare(straightFare)
      toast('Unable to get route details from Maps API; using straight-line estimate.', { icon: '⚠️' })
    }

    const finalFare = fare || (routeInfo ? calculateFareFromDistance(routeInfo.distance) : calculateFareFromDistance(getStraightLineDistanceMeters(pickup, drop)))

    setLoading(true)
    try {
      const ride = await createRide({
        userId: userData.id,
        pickupLat: pickup.lat,
        pickupLng: pickup.lng,
        pickupAddress,
        dropLat: drop.lat,
        dropLng: drop.lng,
        dropAddress,
        fare: finalFare,
      })
      toast.success('Ride requested! Looking for a driver…')
      navigate(`/user/track/${ride.id}`)
    } catch (err) {
      toast.error(err.message || 'Failed to book ride')
    } finally {
      setLoading(false)
    }
  }

  const stepLabels = {
    [STEP.PICKUP]: 'Select Pickup',
    [STEP.DROP]: 'Select Destination',
    [STEP.CONFIRM]: 'Confirm Ride',
  }

  return (
    <AppLayout title="Book Ride">
      <div className="space-y-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">Book a Ride</h1>
          <p className="text-slate-500 text-sm mt-0.5">{stepLabels[step]} — tap on the map</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-2">
          {[STEP.PICKUP, STEP.DROP, STEP.CONFIRM].map((s, i) => (
            <React.Fragment key={s}>
              <div className={`flex items-center gap-1.5 text-xs font-semibold ${step === s ? 'text-amber-600' : Object.values(STEP).indexOf(s) < Object.values(STEP).indexOf(step) ? 'text-emerald-600' : 'text-slate-300'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === s ? 'bg-amber-500 text-white' : Object.values(STEP).indexOf(s) < Object.values(STEP).indexOf(step) ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
                  {i + 1}
                </div>
                <span className="hidden sm:block">{['Pickup', 'Drop', 'Confirm'][i]}</span>
              </div>
              {i < 2 && <div className={`flex-1 h-px ${Object.values(STEP).indexOf(step) > i ? 'bg-emerald-300' : 'bg-slate-200'}`} />}
            </React.Fragment>
          ))}
        </div>

        {/* Map */}
        <div className="h-72 md:h-96 rounded-2xl overflow-hidden shadow-card relative">
          <MapView
            center={pickup || currentLocation}
            onMapClick={step !== STEP.CONFIRM ? handleMapClick : undefined}
            onMapLoad={m => { mapRef.current = m }}
            className="h-full"
          >
            {currentLocation && !pickup && <UserMarker position={currentLocation} label="You" />}
            {pickup && <UserMarker position={pickup} label="Pickup" />}
            {drop && <UserMarker position={drop} label="Drop" />}
            {pickup && drop && (
              <Directions origin={pickup} destination={drop} onResult={handleRouteResult} />
            )}
            {onlineDrivers.map(d => d.lat && d.lng && (
              <DriverMarker key={d.id} position={{ lat: d.lat, lng: d.lng }} />
            ))}
          </MapView>

          {step !== STEP.CONFIRM && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow-md text-sm font-medium text-slate-700 border border-slate-100">
              {step === STEP.PICKUP ? '📍 Tap to set pickup' : '🏁 Tap to set destination'}
            </div>
          )}
        </div>

        {/* Location info */}
        <div className="bg-white rounded-2xl shadow-card p-4 space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mt-0.5 shrink-0">
              <MapPin size={15} className="text-blue-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-400 font-medium">PICKUP</p>
              <p className="text-sm text-slate-700 mt-0.5">{pickupAddress || 'Not selected'}</p>
            </div>
            {step === STEP.PICKUP && !pickup && currentLocation && (
              <button onClick={handleUseCurrentLocation} className="text-xs text-amber-600 font-semibold whitespace-nowrap hover:underline">
                Use current
              </button>
            )}
          </div>

          {(step === STEP.DROP || step === STEP.CONFIRM) && (
            <>
              <div className="border-l-2 border-dashed border-slate-200 ml-4 h-4" />
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center mt-0.5 shrink-0">
                  <Navigation size={15} className="text-amber-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">DESTINATION</p>
                  <p className="text-sm text-slate-700 mt-0.5">{dropAddress || 'Not selected'}</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Fare estimate */}
        {step === STEP.CONFIRM && fare && routeInfo && (
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-3">Ride Summary</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-xl font-display font-bold text-amber-600">{formatCurrency(fare)}</p>
                <p className="text-xs text-slate-500 mt-0.5">Estimated Fare</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-display font-bold text-slate-900">{routeInfo.distanceText}</p>
                <p className="text-xs text-slate-500 mt-0.5">Distance</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-display font-bold text-slate-900">{routeInfo.duration}</p>
                <p className="text-xs text-slate-500 mt-0.5">Duration</p>
              </div>
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3">
          {step !== STEP.PICKUP && (
            <Button variant="secondary" onClick={() => setStep(prev => prev === STEP.CONFIRM ? STEP.DROP : STEP.PICKUP)}>
              Back
            </Button>
          )}
          {step !== STEP.CONFIRM ? (
            <Button fullWidth onClick={handleNext}>
              Next <ArrowRight size={16} />
            </Button>
          ) : (
            <Button fullWidth loading={loading} onClick={handleBook}>
              Confirm Booking · {formatCurrency(fare || 0)}
            </Button>
          )}
        </div>
      </div>
    </AppLayout>
  )
}

export default BookRide
