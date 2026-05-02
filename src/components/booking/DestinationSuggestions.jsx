import React from 'react'
import { MapPin } from 'lucide-react'
import { useNearbyPlaces } from '../../hooks/useNearbyPlaces'
import Spinner from '../common/Spinner'

const DestinationSuggestions = ({ onSelectPlace, isOpen, maxItems = 5 }) => {
  const { places, loading, error } = useNearbyPlaces(1500)

  if (!isOpen) return null

  return (
    <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-lg p-4 space-y-3 max-h-96 overflow-y-auto">
      <h3 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
        <MapPin size={16} className="text-blue-600" />
        Suggested Destinations
      </h3>

      {loading ? (
        <div className="flex items-center gap-2 py-4">
          <Spinner size="sm" />
          <span className="text-sm text-slate-500">Finding nearby places…</span>
        </div>
      ) : error ? (
        <p className="text-xs text-red-600">{error}</p>
      ) : places.length > 0 ? (
        <div className="space-y-2">
          {places.slice(0, maxItems).map((place, index) => (
            <button
              key={place.id || index}
              onClick={() => onSelectPlace(place)}
              className="w-full text-left p-3 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 hover:border-amber-400 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg flex-shrink-0">📍</span>
                <p className="font-semibold text-slate-900 text-sm flex-1 group-hover:text-amber-700">
                  {place.name}
                </p>
                <span className="text-amber-500 group-hover:translate-x-1 transition-transform flex-shrink-0">→</span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <p className="text-xs text-slate-500 py-2">No nearby places found</p>
      )}
    </div>
  )
}

export default DestinationSuggestions
