import React, { useState } from 'react'
import { MapPin, Star, Navigation, ArrowLeft, Loader } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import AppLayout from '../../components/layout/AppLayout'
import MapView from '../../components/maps/MapView'
import UserMarker from '../../components/maps/UserMarker'
import Button from '../../components/common/Button'
import Spinner from '../../components/common/Spinner'
import { useCurrentLocation } from '../../hooks/useLocation'
import { useNearbyPlaces } from '../../hooks/useNearbyPlaces'

const NearbyPlaces = () => {
  const navigate = useNavigate()
  const { location: userLocation } = useCurrentLocation()
  const { places, loading, error } = useNearbyPlaces(1500)
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [mapCenter, setMapCenter] = useState(null)

  React.useEffect(() => {
    if (userLocation && !mapCenter) {
      setMapCenter(userLocation)
    }
  }, [userLocation, mapCenter])

  const getPlaceIcon = (types = []) => {
    const typeMap = {
      restaurant: '🍽️',
      cafe: '☕',
      shopping_mall: '🛍️',
      park: '🌳',
      hospital: '🏥',
      school: '🎓',
      bank: '🏦',
      church: '⛪',
      mosque: '🕌',
      temple: '🛕',
      stadium: '🏟️',
      airport: '✈️',
      train_station: '🚂',
      neighborhood: '🏘️',
      locality: '🏙️',
      point_of_interest: '📍',
    }

    for (let type of types) {
      if (typeMap[type]) return typeMap[type]
    }
    return '📍'
  }

  const getPlaceCategory = (types = []) => {
    const categories = {
      restaurant: 'Restaurant',
      cafe: 'Cafe',
      shopping_mall: 'Shopping',
      park: 'Park',
      hospital: 'Hospital',
      school: 'School',
      bank: 'Bank',
      church: 'Church',
      mosque: 'Mosque',
      temple: 'Temple',
      stadium: 'Stadium',
      airport: 'Airport',
      train_station: 'Station',
      neighborhood: 'Neighborhood',
      locality: 'Area',
      point_of_interest: 'Place',
    }

    for (let type of types) {
      if (categories[type]) return categories[type]
    }
    return 'Place'
  }

  const handleSelectPlace = (place) => {
    setSelectedPlace(place)
  }

  const handleBookRide = (place) => {
    navigate(`/user/modern-book?destination=${encodeURIComponent(place.name)}&lat=${place.lat}&lng=${place.lng}`)
  }

  return (
    <AppLayout title="Nearby Places">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-900">Nearby Places</h1>
            <p className="text-slate-500 text-sm mt-0.5">Discover neighborhoods & landmarks around you</p>
          </div>
          <button
            onClick={() => navigate('/user/home')}
            className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center transition-colors"
          >
            <ArrowLeft size={18} className="text-slate-600" />
          </button>
        </div>

        {/* Loading State */}
        {loading && !places.length && (
          <div className="h-96 rounded-2xl bg-slate-100 flex items-center justify-center">
            <div className="text-center">
              <Spinner size="lg" />
              <p className="text-slate-500 text-sm mt-3">Finding nearby places…</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4">
            <p className="text-red-700 text-sm font-semibold">{error}</p>
          </div>
        )}

        {/* Map View */}
        {places.length > 0 && (
          <div className="h-80 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200">
            <MapView
              center={mapCenter || userLocation}
              zoom={15}
              className="w-full h-full"
            >
              {userLocation && <UserMarker position={userLocation} label="You" />}
              {/* Place markers would go here if using advanced markers */}
            </MapView>
          </div>
        )}

        {/* Places List */}
        {places.length > 0 ? (
          <div className="space-y-2">
            <h2 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
              <MapPin size={16} className="text-blue-600" />
              5 Nearby Neighborhoods & Places
            </h2>

            <div className="space-y-3">
              {places.map((place, index) => (
                <div
                  key={place.id || index}
                  onClick={() => handleSelectPlace(place)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all transform hover:scale-102 ${
                    selectedPlace?.id === place.id
                      ? 'bg-gradient-to-r from-blue-50 to-blue-100 border-blue-300 shadow-md'
                      : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div className="text-3xl flex-shrink-0">
                      {getPlaceIcon(place.types)}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 text-base">{place.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 rounded-full text-slate-700">
                          {getPlaceCategory(place.types)}
                        </span>
                        {place.rating && (
                          <span className="text-xs font-semibold text-yellow-600 flex items-center gap-0.5">
                            <Star size={12} fill="currentColor" />
                            {place.rating.toFixed(1)}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2">{place.address}</p>
                    </div>

                    {/* Action */}
                    <button
                      onClick={() => handleBookRide(place)}
                      className="flex-shrink-0 w-10 h-10 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors transform hover:scale-110"
                      title="Book ride to this place"
                    >
                      <Navigation size={16} className="text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : !loading && !error ? (
          <div className="text-center py-12">
            <MapPin size={48} className="mx-auto text-slate-300 mb-3" />
            <p className="text-slate-500">No nearby places found</p>
          </div>
        ) : null}

        {/* Selected Place Details */}
        {selectedPlace && (
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border-2 border-blue-300">
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-slate-900">{selectedPlace.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{selectedPlace.address}</p>
              </div>
              <Button
                fullWidth
                onClick={() => handleBookRide(selectedPlace)}
                className="bg-gradient-to-r from-amber-500 to-orange-500"
              >
                <Navigation size={16} /> Book Ride to {selectedPlace.name}
              </Button>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  )
}

export default NearbyPlaces
