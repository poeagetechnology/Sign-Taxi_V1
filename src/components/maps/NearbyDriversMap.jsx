import React, { useState } from 'react'
import { Marker, InfoWindow } from '@react-google-maps/api'
import { MapPin, User, Loader } from 'lucide-react'
import MapView from './MapView'
import DriverMarker from './DriverMarker'
import UserMarker from './UserMarker'
import { useNearbyDrivers } from '../../hooks/useNearbyDrivers'
import Spinner from '../common/Spinner'

const NearbyDriversMap = ({ radiusKm = 5, className = '' }) => {
  const { nearbyDrivers, userLocation, totalNearby } = useNearbyDrivers(radiusKm)
  const [selectedDriver, setSelectedDriver] = useState(null)
  const [mapInstance, setMapInstance] = useState(null)

  if (!userLocation) {
    return (
      <div className={`flex flex-col items-center justify-center bg-slate-100 rounded-2xl h-96 ${className}`}>
        <Spinner size="lg" />
        <p className="text-slate-500 text-sm mt-3">Getting your location...</p>
      </div>
    )
  }

  const handleMapLoad = (map) => {
    setMapInstance(map)
    // Auto-fit map bounds to show all drivers + user
    if (nearbyDrivers.length > 0) {
      const bounds = new window.google.maps.LatLngBounds()
      bounds.extend(new window.google.maps.LatLng(userLocation.lat, userLocation.lng))
      nearbyDrivers.forEach((driver) => {
        bounds.extend(new window.google.maps.LatLng(driver.lat, driver.lng))
      })
      map.fitBounds(bounds, { top: 100, right: 100, bottom: 100, left: 100 })
    }
  }

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Header with stats */}
      <div className="flex items-center justify-between px-1">
        <div>
          <h3 className="font-semibold text-slate-900 text-sm">Nearby Drivers</h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {totalNearby} driver{totalNearby !== 1 ? 's' : ''} within {radiusKm} km
          </p>
        </div>
        {nearbyDrivers.length > 0 && (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-emerald-700">{totalNearby} Online</span>
          </div>
        )}
      </div>

      {/* Map */}
      <div className="relative w-full h-96 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
        <MapView
          center={userLocation}
          zoom={nearbyDrivers.length > 0 ? undefined : 15}
          onMapLoad={handleMapLoad}
          className="w-full h-full"
        >
          {/* User location marker */}
          <UserMarker position={userLocation} label="You" />

          {/* Nearby driver markers */}
          {nearbyDrivers.map((driver, index) => (
            <div key={driver.driverId || index}>
              <DriverMarker
                position={{ lat: driver.lat, lng: driver.lng }}
                driverName={`${driver.distance?.toFixed(1)} km`}
                onClick={() => setSelectedDriver(driver)}
                isAssigned={selectedDriver?.driverId === driver.driverId}
              />
              {selectedDriver?.driverId === driver.driverId && (
                <Marker
                  position={{ lat: driver.lat, lng: driver.lng }}
                  onClick={() => setSelectedDriver(null)}
                >
                  <div className="p-2 bg-white rounded-lg max-w-xs shadow-lg">
                    <p className="font-semibold text-slate-900 text-sm mb-1">
                      {driver.vehicleInfo?.model || 'Driver'}
                    </p>
                    <div className="space-y-1 text-xs text-slate-600 mb-2">
                      <p>📍 {driver.distance?.toFixed(1)} km away</p>
                      {driver.vehicleInfo?.licensePlate && (
                        <p>🚗 {driver.vehicleInfo.licensePlate}</p>
                      )}
                    </div>
                    <button
                      onClick={() => {
                        // Future: Book ride with specific driver
                        window.location.href = '/user/book'
                      }}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white text-xs font-medium py-1.5 rounded-lg transition-colors"
                    >
                      Request Ride
                    </button>
                  </div>
                </Marker>
              )}
            </div>
          ))}
        </MapView>

        {/* Empty state */}
        {totalNearby === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-50/80 to-slate-100/80 backdrop-blur-sm">
            <div className="flex items-center justify-center w-12 h-12 bg-slate-200 rounded-full mb-3">
              <MapPin size={24} className="text-slate-400" />
            </div>
            <p className="text-slate-900 font-semibold text-sm">No drivers nearby</p>
            <p className="text-slate-500 text-xs mt-1">Check back soon!</p>
          </div>
        )}
      </div>

      {/* Driver list */}
      {nearbyDrivers.length > 0 && (
        <div className="space-y-2 max-h-32 overflow-y-auto">
          {nearbyDrivers.slice(0, 3).map((driver, index) => (
            <div
              key={driver.driverId || index}
              onClick={() => setSelectedDriver(driver)}
              className={`p-3 border rounded-lg cursor-pointer transition-all ${
                selectedDriver?.driverId === driver.driverId
                  ? 'bg-amber-50 border-amber-300'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={18} className="text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-900 text-sm truncate">
                      {driver.vehicleInfo?.model || 'Driver'}
                    </p>
                    <p className="text-xs text-slate-500">
                      {driver.distance?.toFixed(1)} km away
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {nearbyDrivers.length > 3 && (
            <p className="text-xs text-slate-500 text-center py-2">
              +{nearbyDrivers.length - 3} more drivers
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default NearbyDriversMap
