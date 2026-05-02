import React, { useCallback, useRef, memo } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { GOOGLE_MAPS_LIBRARIES, DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from '../../utils/constants'
import Spinner from '../common/Spinner'

const mapContainerStyle = { width: '100%', height: '100%' }

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  styles: [
    { featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] },
    { featureType: 'transit', stylers: [{ visibility: 'simplified' }] },
  ],
}

const MapView = memo(({ children, center, zoom, onMapClick, onMapLoad, className = '' }) => {
  const mapRef = useRef(null)

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: GOOGLE_MAPS_LIBRARIES,
  })

  const onLoad = useCallback((map) => {
    mapRef.current = map
    onMapLoad?.(map)
  }, [onMapLoad])

  const onUnmount = useCallback(() => {
    mapRef.current = null
  }, [])

  if (loadError) {
    return (
      <div className={`flex items-center justify-center bg-slate-100 rounded-2xl ${className}`}>
        <p className="text-sm text-red-500">Failed to load map. Check your API key.</p>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className={`flex items-center justify-center bg-slate-100 rounded-2xl ${className}`}>
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className={`map-container ${className}`}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center || DEFAULT_MAP_CENTER}
        zoom={zoom || DEFAULT_MAP_ZOOM}
        options={mapOptions}
        onClick={onMapClick}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {children}
      </GoogleMap>
    </div>
  )
})

MapView.displayName = 'MapView'

export default MapView
