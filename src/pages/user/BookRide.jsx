import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, MapPin, Navigation, AlertCircle, Search } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import LocationPickerModal from '../../components/maps/LocationPickerModal'
import Button from '../../components/common/Button'
import Spinner from '../../components/common/Spinner'
import Input from '../../components/common/Input'
import { useCurrentLocation } from '../../hooks/useLocation'
import useAuthStore from '../../store/authStore'
import { createRide } from '../../services/rideService'
import { initializeDispatch } from '../../services/dispatchManager'
import { subscribeToDispatchStatus } from '../../services/dispatchService'
import { calculateFareFromDistance } from '../../utils/fareCalculator'
import { formatCurrency } from '../../utils/formatters'
import { DEFAULT_MAP_CENTER } from '../../utils/constants'

const LOCATION_FIELD = {
  PICKUP: 'pickup',
  DROP: 'drop',
}

const BookRide = () => {
  const navigate = useNavigate()
  const { userData } = useAuthStore()
  const { location: currentLocation, loading: loadingCurrentLocation } = useCurrentLocation()
  const cleanupRef = useRef({ unsubscribe: null, timeoutId: null })

  const [pickup, setPickup] = useState(null)
  const [pickupAddress, setPickupAddress] = useState('')
  const [drop, setDrop] = useState(null)
  const [dropAddress, setDropAddress] = useState('')
  const [routeInfo, setRouteInfo] = useState(null)
  const [fare, setFare] = useState(null)
  const [loading, setLoading] = useState(false)
  const [pickerField, setPickerField] = useState(LOCATION_FIELD.PICKUP)
  const [pickerOpen, setPickerOpen] = useState(false)
  const [dispatchState, setDispatchState] = useState({
    status: 'idle',
    error: null,
  })

  useEffect(() => {
    return () => {
      cleanupRef.current.unsubscribe?.()
      if (cleanupRef.current.timeoutId) {
        clearTimeout(cleanupRef.current.timeoutId)
      }
    }
  }, [])

  useEffect(() => {
    setRouteInfo(null)
    setFare(null)
  }, [pickup?.lat, pickup?.lng, drop?.lat, drop?.lng])

  const handleRouteResult = (info) => {
    setRouteInfo(info)
    setFare(calculateFareFromDistance(info.distance))
  }

  const getStraightLineDistanceMeters = (from, to) => {
    if (!from || !to) return 0

    const toRadians = (value) => (value * Math.PI) / 180
    const earthRadiusMeters = 6371000
    const deltaLat = toRadians(to.lat - from.lat)
    const deltaLng = toRadians(to.lng - from.lng)
    const haversine =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(toRadians(from.lat)) * Math.cos(toRadians(to.lat)) *
      Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2)

    return earthRadiusMeters * (2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine)))
  }

  const handlePickerConfirm = ({ location, address }) => {
    if (pickerField === LOCATION_FIELD.PICKUP) {
      setPickup(location)
      setPickupAddress(address)
      return
    }

    setDrop(location)
    setDropAddress(address)
  }

  const openPicker = (field) => {
    setPickerField(field)
    setPickerOpen(true)
  }

  const handleUseCurrentLocation = () => {
    if (!currentLocation) {
      toast.error('Current location is not available yet.')
      return
    }

    setPickup(currentLocation)
    setPickupAddress('Current location')
  }

  const handleBook = async () => {
    if (!pickup || !drop) {
      toast.error('Please set both pickup and destination locations.')
      return
    }

    let nextRouteInfo = routeInfo
    let nextFare = fare

    if (!nextRouteInfo) {
      const straightDistance = getStraightLineDistanceMeters(pickup, drop)
      nextRouteInfo = {
        distance: straightDistance,
        duration: 'N/A',
        distanceText: `${(straightDistance / 1000).toFixed(2)} km`,
      }
      nextFare = calculateFareFromDistance(straightDistance)
      setRouteInfo(nextRouteInfo)
      setFare(nextFare)
      toast('Unable to calculate a route right now. Using straight-line distance instead.', { icon: '⚠️' })
    }

    setLoading(true)
    cleanupRef.current.unsubscribe?.()
    if (cleanupRef.current.timeoutId) {
      clearTimeout(cleanupRef.current.timeoutId)
    }

    try {
      const ride = await createRide({
        userId: userData.id,
        pickupLat: pickup.lat,
        pickupLng: pickup.lng,
        pickupAddress,
        dropLat: drop.lat,
        dropLng: drop.lng,
        dropAddress,
        fare: nextFare,
      })

      setDispatchState({ status: 'searching', error: null })
      toast.success('Ride requested. Searching for drivers…')

      const { dispatcher } = await initializeDispatch(ride.id, pickup.lat, pickup.lng, 3)

      dispatcher.startDispatching((update) => {
        setDispatchState((prev) => ({
          ...prev,
          status: update.status,
          error: update.error || null,
        }))

        if (update.status === 'accepted') {
          setTimeout(() => {
            navigate(`/user/track/${ride.id}`)
          }, 1000)
        }
      })

      cleanupRef.current.unsubscribe = subscribeToDispatchStatus(ride.id, (update) => {
        if (update.status === 'accepted') {
          setDispatchState((prev) => ({
            ...prev,
            status: 'accepted',
            error: null,
          }))

          setTimeout(() => {
            if (document.location.pathname.includes('/user/book')) {
              navigate(`/user/track/${ride.id}`)
            }
          }, 1500)
        }
      })

      cleanupRef.current.timeoutId = setTimeout(() => {
        cleanupRef.current.unsubscribe?.()
        setDispatchState({ status: 'error', error: 'No drivers available. Please try again.' })
        toast.error('Timeout: No drivers were available for this ride.')
      }, 60000)
    } catch (error) {
      // FIX 5: Improved error messaging based on error type
      let userMessage = error.message || 'Failed to book ride'
      
      if (error.message?.includes('No drivers available')) {
        userMessage = 'No drivers available nearby. Please:\n• Try again in a few moments\n• Check if drivers are online in your area\n• Try a pickup location with more driver coverage'
      } else if (error.message?.includes('geolocation')) {
        userMessage = 'Unable to determine your location. Please enable location services.'
      }
      
      setDispatchState({ status: 'error', error: userMessage })
      toast.error(userMessage)
      console.error('[BookRide Error]', error)
    } finally {
      setLoading(false)
    }
  }

  const canBook = Boolean(pickup && drop) && !loading
  const activeLocation = pickerField === LOCATION_FIELD.PICKUP ? pickup : drop
  const activeAddress = pickerField === LOCATION_FIELD.PICKUP ? pickupAddress : dropAddress

  return (
    <AppLayout title="Book Ride">
      <div className="space-y-5">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">Book a Ride</h1>
          <p className="text-slate-500 text-sm mt-1">
            Search addresses, confirm the exact pin on the map, and we will fill the trip automatically.
          </p>
        </div>

        <div className="space-y-5">
          <div className="space-y-4">
            <div className="card space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <h2 className="font-display font-semibold text-slate-900">Trip details</h2>
                  <p className="text-xs text-slate-500 mt-1">Each field opens a searchable map popup with a draggable pin and coordinate input.</p>
                </div>
                <Button variant="secondary" onClick={handleUseCurrentLocation} disabled={!currentLocation}>
                  <MapPin size={16} /> Use current pickup
                </Button>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-blue-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Input
                        label="From Location"
                        value={pickupAddress}
                        readOnly
                        placeholder="Search and confirm pickup location"
                        onClick={() => openPicker(LOCATION_FIELD.PICKUP)}
                      />
                      <p className="text-xs text-slate-400 mt-2">
                        {pickup ? `${pickup.lat.toFixed(6)}, ${pickup.lng.toFixed(6)}` : 'No pickup selected yet'}
                      </p>
                    </div>
                  </div>
                  <Button variant="secondary" fullWidth onClick={() => openPicker(LOCATION_FIELD.PICKUP)}>
                    <Search size={16} /> Search or pick pickup on map
                  </Button>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                      <Navigation size={18} className="text-amber-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Input
                        label="To Location"
                        value={dropAddress}
                        readOnly
                        placeholder="Search and confirm destination"
                        onClick={() => openPicker(LOCATION_FIELD.DROP)}
                      />
                      <p className="text-xs text-slate-400 mt-2">
                        {drop ? `${drop.lat.toFixed(6)}, ${drop.lng.toFixed(6)}` : 'No destination selected yet'}
                      </p>
                    </div>
                  </div>
                  <Button variant="secondary" fullWidth onClick={() => openPicker(LOCATION_FIELD.DROP)}>
                    <Search size={16} /> Search or pick destination on map
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="card space-y-4">
            <div>
              <h2 className="font-display font-semibold text-slate-900">Fare summary</h2>
              <p className="text-xs text-slate-500 mt-1">Route details appear automatically after both locations are confirmed.</p>
            </div>

            {pickup && drop && routeInfo && fare ? (
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xl font-display font-bold text-amber-600">{formatCurrency(fare)}</p>
                    <p className="text-xs text-slate-500 mt-1">Estimated fare</p>
                  </div>
                  <div>
                    <p className="text-xl font-display font-bold text-slate-900">{routeInfo.distanceText}</p>
                    <p className="text-xs text-slate-500 mt-1">Distance</p>
                  </div>
                  <div>
                    <p className="text-xl font-display font-bold text-slate-900">{routeInfo.duration}</p>
                    <p className="text-xs text-slate-500 mt-1">Duration</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 px-4 py-6 text-center text-sm text-slate-500">
                Confirm both From and To locations to generate the route preview and fare estimate.
              </div>
            )}

            <Button fullWidth onClick={handleBook} loading={loading} disabled={!canBook}>
              Confirm Booking {fare ? `· ${formatCurrency(fare)}` : ''}
              {!loading && <ArrowRight size={16} />}
            </Button>
          </div>
        </div>

        {dispatchState.status !== 'idle' && (
          <div className={`rounded-2xl p-4 border ${
            dispatchState.status === 'searching' ? 'bg-blue-50 border-blue-200' :
            dispatchState.status === 'requested' ? 'bg-amber-50 border-amber-200' :
            dispatchState.status === 'accepted' ? 'bg-emerald-50 border-emerald-200' :
            dispatchState.status === 'error' ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              {dispatchState.status === 'searching' && (
                <>
                  <Spinner size="sm" />
                  <div>
                    <p className="text-sm font-semibold text-blue-700">Searching for drivers…</p>
                    <p className="text-xs text-blue-600 mt-0.5">Please wait while we find the nearest available driver.</p>
                  </div>
                </>
              )}
              {dispatchState.status === 'requested' && (
                <>
                  <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center animate-pulse" />
                  <div>
                    <p className="text-sm font-semibold text-amber-700">Request sent to driver</p>
                    <p className="text-xs text-amber-600 mt-0.5">Waiting for acceptance…</p>
                  </div>
                </>
              )}
              {dispatchState.status === 'accepted' && (
                <>
                  <CheckCircle size={20} className="text-emerald-600" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-700">Driver accepted</p>
                    <p className="text-xs text-emerald-600 mt-0.5">Redirecting to live tracking…</p>
                  </div>
                </>
              )}
              {dispatchState.status === 'error' && (
                <>
                  <AlertCircle size={20} className="text-red-600" />
                  <div>
                    <p className="text-sm font-semibold text-red-700">{dispatchState.error || 'No drivers available'}</p>
                    <p className="text-xs text-red-600 mt-0.5">Try adjusting the location or booking again.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        <LocationPickerModal
          isOpen={pickerOpen}
          onClose={() => setPickerOpen(false)}
          onConfirm={handlePickerConfirm}
          title={pickerField === LOCATION_FIELD.PICKUP ? 'Select pickup location' : 'Select destination'}
          confirmLabel={pickerField === LOCATION_FIELD.PICKUP ? 'Confirm pickup' : 'Confirm destination'}
          currentLocation={currentLocation}
          initialLocation={activeLocation}
          initialAddress={activeAddress}
        />
      </div>
    </AppLayout>
  )
}

export default BookRide
