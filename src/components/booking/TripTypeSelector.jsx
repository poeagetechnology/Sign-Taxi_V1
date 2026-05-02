import React from 'react'
import { TRIP_TYPE_INFO } from '../../constants/ridingOptions'

const TripTypeSelector = ({ selectedType, onSelect, className = '' }) => {
  const tripTypes = Object.entries(TRIP_TYPE_INFO)

  return (
    <div className={`w-full ${className}`}>
      <h3 className="text-sm font-semibold text-slate-900 mb-3">Select Trip Type</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {tripTypes.map(([key, info]) => (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={`relative p-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
              selectedType === key
                ? `bg-gradient-to-br ${info.color} text-white shadow-lg scale-105`
                : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300'
            }`}
          >
            {/* Checkmark indicator */}
            {selectedType === key && (
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-green-500 font-bold">✓</span>
              </div>
            )}

            <div className="text-2xl mb-2">{info.icon}</div>
            <p className="font-semibold text-xs leading-tight">{info.label}</p>
            <p className={`text-xs mt-1 ${selectedType === key ? 'text-white/80' : 'text-slate-500'}`}>
              {info.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default TripTypeSelector
