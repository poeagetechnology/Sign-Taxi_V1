import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Autocomplete, MarkerF, useJsApiLoader } from '@react-google-maps/api'
import { Crosshair, MapPin, Search } from 'lucide-react'
import toast from 'react-hot-toast'
import Modal from '../common/Modal'
import Button from '../common/Button'
import Input from '../common/Input'
import Spinner from '../common/Spinner'
import MapView from './MapView'
import { GOOGLE_MAPS_LIBRARIES, DEFAULT_MAP_CENTER } from '../../utils/constants'
import { reverseGeocode } from '../../services/locationService'

const formatCoordinateValue = (value) => Number(value).toFixed(6)

const LocationPickerModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Select location',
  confirmLabel = 'Confirm location',
  currentLocation = null,
  initialLocation = null,
  initialAddress = '',
}) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  const mapRef = useRef(null)
  const [autocomplete, setAutocomplete] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(initialLocation)
  const [selectedAddress, setSelectedAddress] = useState(initialAddress)
  const [searchValue, setSearchValue] = useState(initialAddress)
  const [manualLat, setManualLat] = useState(initialLocation ? formatCoordinateValue(initialLocation.lat) : '')
  const [manualLng, setManualLng] = useState(initialLocation ? formatCoordinateValue(initialLocation.lng) : '')
  const [mapCenter, setMapCenter] = useState(initialLocation || currentLocation || DEFAULT_MAP_CENTER)
  const [resolving, setResolving] = useState(false)

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: GOOGLE_MAPS_LIBRARIES,
  })

  useEffect(() => {
    if (!isOpen) return

    const nextLocation = initialLocation || currentLocation || DEFAULT_MAP_CENTER
    setSelectedLocation(initialLocation || null)
    setSelectedAddress(initialAddress || '')
    setSearchValue(initialAddress || '')
    setManualLat(initialLocation ? formatCoordinateValue(initialLocation.lat) : '')
    setManualLng(initialLocation ? formatCoordinateValue(initialLocation.lng) : '')
    setMapCenter(nextLocation)
  }, [isOpen, initialAddress, initialLocation, currentLocation])

  const resolvedSubtitle = useMemo(() => {
    if (!selectedLocation) return 'Search, drag the pin, or enter coordinates manually.'
    return `${selectedLocation.lat.toFixed(6)}, ${selectedLocation.lng.toFixed(6)}`
  }, [selectedLocation])

  const applyLocation = async (location, addressOverride = '') => {
    setSelectedLocation(location)
    setManualLat(formatCoordinateValue(location.lat))
    setManualLng(formatCoordinateValue(location.lng))
    setMapCenter(location)

    if (addressOverride) {
      setSelectedAddress(addressOverride)
      setSearchValue(addressOverride)
      return
    }

    setResolving(true)
    const address = await reverseGeocode(location.lat, location.lng, apiKey)
    setSelectedAddress(address)
    setSearchValue(address)
    setResolving(false)
  }

  const handlePlaceChanged = async () => {
    const place = autocomplete?.getPlace()
    const location = place?.geometry?.location

    if (!location) {
      toast.error('Select a valid location from the suggestions list.')
      return
    }

    const nextLocation = { lat: location.lat(), lng: location.lng() }
    if (place.geometry?.viewport && mapRef.current) {
      mapRef.current.fitBounds(place.geometry.viewport)
    }

    await applyLocation(nextLocation, place.formatted_address || place.name || '')
  }

  const handleManualApply = async () => {
    const lat = Number(manualLat)
    const lng = Number(manualLng)

    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
      toast.error('Enter valid latitude and longitude values.')
      return
    }

    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      toast.error('Coordinates are out of range.')
      return
    }

    await applyLocation({ lat, lng })
  }

  const handleUseCurrentLocation = async () => {
    if (!currentLocation) {
      toast.error('Current location is not available.')
      return
    }
    await applyLocation(currentLocation, 'Current location')
  }

  const handleConfirm = () => {
    if (!selectedLocation) {
      toast.error('Select a location before confirming.')
      return
    }

    onConfirm?.({
      location: selectedLocation,
      address: selectedAddress || `${selectedLocation.lat.toFixed(5)}, ${selectedLocation.lng.toFixed(5)}`,
    })
    onClose?.()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="xl">
      <div className="space-y-4">
        <div className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            <div className="rounded-2xl overflow-hidden border border-slate-200 h-72 md:h-80 bg-slate-100">
              <MapView
                center={mapCenter}
                zoom={selectedLocation ? 16 : 13}
                className="h-full"
                onMapLoad={(map) => { mapRef.current = map }}
                onMapClick={(event) => applyLocation({ lat: event.latLng.lat(), lng: event.latLng.lng() })}
              >
                {selectedLocation && (
                  <MarkerF
                    position={selectedLocation}
                    draggable
                    onDragEnd={(event) => applyLocation({ lat: event.latLng.lat(), lng: event.latLng.lng() })}
                  />
                )}
              </MapView>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="text-sm font-semibold text-slate-900">
                {selectedAddress || 'No location selected yet'}
              </p>
              <p className="text-xs text-slate-500 mt-1">{resolving ? 'Resolving address…' : resolvedSubtitle}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-3 rounded-2xl border border-slate-200 p-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">Search location</p>
                <p className="text-xs text-slate-500 mt-1">Use autocomplete, then refine the pin on the map.</p>
              </div>
              {isLoaded ? (
                <Autocomplete onLoad={setAutocomplete} onPlaceChanged={handlePlaceChanged}>
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      value={searchValue}
                      onChange={(event) => setSearchValue(event.target.value)}
                      placeholder="Search an address or landmark"
                      className="input-field pl-9"
                    />
                  </div>
                </Autocomplete>
              ) : (
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Spinner size="sm" /> Loading Places search…
                </div>
              )}
              <Button variant="secondary" fullWidth onClick={handleUseCurrentLocation}>
                <Crosshair size={16} /> Use current location
              </Button>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-200 p-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">Manual coordinates</p>
                <p className="text-xs text-slate-500 mt-1">Paste latitude and longitude if you already know the exact point.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Input label="Latitude" value={manualLat} onChange={(event) => setManualLat(event.target.value)} placeholder="11.016800" />
                <Input label="Longitude" value={manualLng} onChange={(event) => setManualLng(event.target.value)} placeholder="76.955800" />
              </div>
              <Button variant="secondary" fullWidth onClick={handleManualApply}>
                <MapPin size={16} /> Apply coordinates
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-end">
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button onClick={handleConfirm}>{confirmLabel}</Button>
        </div>
      </div>
    </Modal>
  )
}

export default LocationPickerModal