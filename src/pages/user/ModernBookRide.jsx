import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ArrowRight, CheckCircle, MapPin, Navigation, AlertCircle, Search, Zap } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import LocationPickerModal from '../../components/maps/LocationPickerModal'
import Button from '../../components/common/Button'
import Spinner from '../../components/common/Spinner'
import Input from '../../components/common/Input'
import TripTypeSelector from '../../components/booking/TripTypeSelector'
import VehicleSelector from '../../components/booking/VehicleSelector'
import DestinationSuggestions from '../../components/booking/DestinationSuggestions'
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

const ModernBookRide = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { userData } = useAuthStore()
  const { location: currentLocation, loading: loadingCurrentLocation } = useCurrentLocation()

  // State
  const [tripType, setTripType] = useState(searchParams.get('tripType') || 'oneway')
  const [vehicleType, setVehicleType] = useState('mini')
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
  const [step, setStep] = useState(1)
  const [showDropSuggestions, setShowDropSuggestions] = useState(false)

  useEffect(() => {
    return () => {}
  }, [])

  useEffect(() => {
    setRouteInfo(null)
    setFare(null)
  }, [pickup?.lat, pickup?.lng, drop?.lat, drop?.lng])

  // Calculate fare when moving to step 2
  useEffect(() => {
    if (step === 2 && pickup && drop && !fare) {
      try {
        const distance = calculateDistance(pickup, drop)
        const calculatedFare = calculateFareFromDistance(distance, vehicleType)
        setFare(calculatedFare || 100) // Minimum 100 if calculation fails
      } catch (err) {
        console.error('Fare calculation error:', err)
        setFare(100) // Default minimum fare
      }
    }
  }, [step, pickup, drop, vehicleType, fare])

  // Helper to calculate distance between two coordinates
  const calculateDistance = (coordA, coordB) => {
    const R = 6371 // Earth's radius in km
    const dLat = (coordB.lat - coordA.lat) * (Math.PI / 180)
    const dLng = (coordB.lng - coordA.lng) * (Math.PI / 180)
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(coordA.lat * (Math.PI / 180)) * Math.cos(coordB.lat * (Math.PI / 180)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c // Distance in km
  }

  const handlePickerConfirm = ({ location, address }) => {
    if (pickerField === LOCATION_FIELD.PICKUP) {
      setPickup(location)
      setPickupAddress(address)
    } else {
      setDrop(location)
      setDropAddress(address)
      setShowDropSuggestions(false)
    }
  }

  const handleSelectPlace = (place) => {
    setDrop({ lat: place.lat, lng: place.lng })
    setDropAddress(place.name)
    setShowDropSuggestions(false)
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
      toast.error('Please set both locations.')
      return
    }

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
        fare: fare || 0,
        tripType,
        vehicleType,
      })

      setDispatchState({ status: 'searching', error: null })
      toast.success('Searching for drivers…')

      navigate(`/user/track/${ride.id}`)
    } catch (error) {
      setDispatchState({ status: 'error', error: error.message })
      toast.error(error.message || 'Failed to book ride')
    } finally {
      setLoading(false)
    }
  }

  const canBook = Boolean(pickup && drop) && !loading

  return (
    <AppLayout title="Book Your Ride">
      <div className="space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-900">Book Your Ride</h1>
            <p className="text-slate-500 text-sm mt-1">Step {step} of 2 - {step === 1 ? 'Select type & vehicle' : 'Confirm booking'}</p>
          </div>
          {step === 2 && (
            <button
              onClick={() => setStep(1)}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back
            </button>
          )}
        </div>

        {step === 1 ? (
          <div className="space-y-5">
            {/* Trip Type Selection */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-5 border border-slate-200">
              <TripTypeSelector selectedType={tripType} onSelect={setTripType} />
            </div>

            {/* Vehicle Selection */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-5 border border-slate-200">
              <VehicleSelector
                selectedVehicle={vehicleType}
                onSelect={setVehicleType}
                tripType={tripType}
              />
            </div>

            {/* Location Selection */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-slate-600" />
                <h3 className="font-semibold text-slate-900">Pickup & Destination</h3>
              </div>

              {/* Pickup */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <MapPin size={18} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">FROM</p>
                    <p className="font-semibold text-slate-900">{pickupAddress || 'Select pickup'}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {!pickupAddress && (
                    <Button
                      variant="secondary"
                      size="sm"
                      fullWidth
                      onClick={handleUseCurrentLocation}
                      disabled={!currentLocation}
                    >
                      📍 Use current location
                    </Button>
                  )}
                  <Button
                    variant="secondary"
                    size="sm"
                    fullWidth
                    onClick={() => {
                      setPickerField(LOCATION_FIELD.PICKUP)
                      setPickerOpen(true)
                    }}
                  >
                    <Search size={14} /> {pickupAddress ? 'Change' : 'Search'} location
                  </Button>
                </div>
              </div>

              {/* Drop */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 hover:border-amber-300 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                    <Navigation size={18} className="text-amber-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">TO</p>
                    <p className="font-semibold text-slate-900">{dropAddress || 'Select destination'}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    fullWidth
                    onClick={() => {
                      setPickerField(LOCATION_FIELD.DROP)
                      setPickerOpen(true)
                    }}
                  >
                    <Search size={14} /> {dropAddress ? 'Change' : 'Search'} location
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    fullWidth
                    onClick={() => setShowDropSuggestions(!showDropSuggestions)}
                    className="bg-blue-50 hover:bg-blue-100 text-blue-700"
                  >
                    ✨ Show suggestions
                  </Button>
                </div>

                {/* Destination Suggestions */}
                {showDropSuggestions && (
                  <div className="mt-3">
                    <DestinationSuggestions
                      onSelectPlace={handleSelectPlace}
                      isOpen={showDropSuggestions}
                      maxItems={5}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Next Button */}
            <Button
              fullWidth
              onClick={() => setStep(2)}
              disabled={!pickup || !drop}
              className="mt-4"
            >
              Continue <ArrowRight size={16} />
            </Button>
          </div>
        ) : (
          // Step 2: Confirmation
          <div className="space-y-5">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Trip Type */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border-2 border-blue-200">
                <p className="text-xs text-blue-600 font-semibold mb-2">TRIP TYPE</p>
                <p className="text-lg font-bold text-blue-900 capitalize">{tripType.replace('_', ' ')}</p>
              </div>

              {/* Vehicle */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 border-2 border-purple-200">
                <p className="text-xs text-purple-600 font-semibold mb-2">VEHICLE</p>
                <p className="text-lg font-bold text-purple-900 capitalize">{vehicleType}</p>
              </div>

              {/* Estimated Fare */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 border-2 border-green-200">
                <p className="text-xs text-green-600 font-semibold mb-2">ESTIMATED FARE</p>
                <p className="text-lg font-bold text-green-900">{fare ? formatCurrency(fare) : 'Calculating...'}</p>
              </div>
            </div>

            {/* Route Details */}
            <div className="space-y-3 bg-white rounded-2xl p-4 border-2 border-slate-200">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 font-medium">FROM</p>
                  <p className="font-semibold text-slate-900 truncate">{pickupAddress}</p>
                </div>
              </div>

              <div className="h-8 flex items-center pl-1.5">
                <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-amber-500" />
              </div>

              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 font-medium">TO</p>
                  <p className="font-semibold text-slate-900 truncate">{dropAddress}</p>
                </div>
              </div>
            </div>

            {/* Dispatch Status */}
            {dispatchState.status !== 'idle' && (
              <div className={`rounded-2xl p-4 border-2 ${
                dispatchState.status === 'searching' ? 'bg-blue-50 border-blue-200' :
                dispatchState.status === 'accepted' ? 'bg-green-50 border-green-200' :
                'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-center gap-3">
                  {dispatchState.status === 'searching' && (
                    <>
                      <Spinner size="sm" />
                      <div>
                        <p className="text-sm font-semibold text-blue-700">Searching for drivers…</p>
                        <p className="text-xs text-blue-600 mt-0.5">Please wait.</p>
                      </div>
                    </>
                  )}
                  {dispatchState.status === 'accepted' && (
                    <>
                      <CheckCircle size={20} className="text-green-600" />
                      <div>
                        <p className="text-sm font-semibold text-green-700">Driver accepted!</p>
                      </div>
                    </>
                  )}
                  {dispatchState.status === 'error' && (
                    <>
                      <AlertCircle size={20} className="text-red-600" />
                      <p className="text-sm font-semibold text-red-700">{dispatchState.error}</p>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                fullWidth
                onClick={handleBook}
                loading={loading}
                disabled={!canBook}
                size="lg"
                className="text-base"
              >
                <Zap size={18} /> Confirm & Book {fare ? `· ${formatCurrency(fare)}` : ''}
              </Button>
              <Button
                fullWidth
                variant="secondary"
                onClick={() => setStep(1)}
              >
                ← Back to edit
              </Button>
            </div>
          </div>
        )}

        {/* Location Picker Modal */}
        <LocationPickerModal
          isOpen={pickerOpen}
          onClose={() => setPickerOpen(false)}
          onConfirm={handlePickerConfirm}
          title={pickerField === LOCATION_FIELD.PICKUP ? 'Select pickup location' : 'Select destination'}
          confirmLabel={pickerField === LOCATION_FIELD.PICKUP ? 'Confirm pickup' : 'Confirm destination'}
          currentLocation={currentLocation}
        />
      </div>
    </AppLayout>
  )
}

export default ModernBookRide
