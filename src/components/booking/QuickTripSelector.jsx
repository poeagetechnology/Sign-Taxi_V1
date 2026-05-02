import React from 'react'
import { Zap, Clock, MapPin, ArrowRight } from 'lucide-react'
import { TRIP_TYPE_INFO } from '../../constants/ridingOptions'

const ModernTripCard = ({ tripKey, info, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative p-4 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 overflow-hidden group`}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-90 group-hover:opacity-100 transition-opacity`} />

      {/* Shine effect */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />

      {/* Content */}
      <div className="relative z-10 text-white">
        <div className="text-3xl mb-2">{info.icon}</div>
        <h4 className="font-bold text-sm leading-tight">{info.label}</h4>
        <p className="text-xs text-white/80 mt-1">{info.description}</p>
        <div className="mt-2 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Book now</span>
          <ArrowRight size={12} />
        </div>
      </div>
    </div>
  )
}

const QuickTripSelector = ({ onSelectTrip, className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-900">Choose Your Trip</h3>
        <Zap size={18} className="text-amber-500" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {Object.entries(TRIP_TYPE_INFO).map(([key, info]) => (
          <ModernTripCard
            key={key}
            tripKey={key}
            info={info}
            onClick={() => onSelectTrip(key)}
          />
        ))}
      </div>
    </div>
  )
}

export default QuickTripSelector
