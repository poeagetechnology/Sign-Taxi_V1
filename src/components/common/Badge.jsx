import React from 'react'
import { RIDE_STATUS_COLORS, RIDE_STATUS_LABELS } from '../../utils/constants'

export const RideStatusBadge = ({ status }) => {
  const colorClass = RIDE_STATUS_COLORS[status] || 'badge-gray'
  const label = RIDE_STATUS_LABELS[status] || status

  const dots = {
    searching: 'bg-sky-400',
    requested: 'bg-amber-400',
    accepted: 'bg-blue-400',
    started: 'bg-blue-400',
    completed: 'bg-emerald-400',
    cancelled: 'bg-red-400',
  }

  return (
    <span className={colorClass}>
      <span className={`w-1.5 h-1.5 rounded-full inline-block ${dots[status] || 'bg-slate-400'}`} />
      {label}
    </span>
  )
}

const Badge = ({ children, variant = 'gray', className = '' }) => {
  const variants = {
    gray: 'badge-gray',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
    info: 'badge-info',
  }
  return (
    <span className={`${variants[variant] || 'badge-gray'} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
