import React from 'react'
import { VEHICLE_INFO } from '../../constants/ridingOptions'
import { Check } from 'lucide-react'

const VehicleSelector = ({ selectedVehicle, onSelect, tripType, className = '' }) => {
  // Filter vehicles based on trip type
  const getAvailableVehicles = () => {
    if (tripType === 'oneway' || tripType === 'airport') {
      return ['mini', 'sedan', 'suv', 'premium']
    } else if (tripType === 'round_trip' || tripType === 'hourly_rental') {
      return ['mini', 'sedan', 'suv', 'premium']
    } else if (tripType === 'outstation') {
      return ['sedan', 'suv', 'traveller', 'urbania']
    }
    return Object.keys(VEHICLE_INFO)
  }

  const availableVehicles = getAvailableVehicles()

  return (
    <div className={`w-full ${className}`}>
      <h3 className="text-sm font-semibold text-slate-900 mb-3">Choose Vehicle</h3>
      <div className="space-y-2">
        {availableVehicles.map((vehicleKey) => {
          const info = VEHICLE_INFO[vehicleKey]
          const isSelected = selectedVehicle === vehicleKey

          return (
            <button
              key={vehicleKey}
              onClick={() => onSelect(vehicleKey)}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                isSelected
                  ? `bg-gradient-to-r ${info.color} text-white border-transparent shadow-lg`
                  : 'bg-white border-slate-200 text-slate-900 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div className="text-3xl">{info.icon}</div>
                  <div className="text-left">
                    <p className={`font-semibold ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {info.label}
                    </p>
                    <p className={`text-sm ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>
                      {info.description}
                    </p>
                    <div className="flex gap-3 mt-1 text-xs">
                      <span className={isSelected ? 'text-white/80' : 'text-slate-400'}>
                        👥 {info.capacity}
                      </span>
                      <span className="font-semibold" style={{ color: isSelected ? 'white' : '#f59e0b' }}>
                        {info.fares}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Checkmark */}
                {isSelected && (
                  <div className="w-6 h-6 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default VehicleSelector
