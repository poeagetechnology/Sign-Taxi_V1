import React from 'react'

const sizes = {
  sm: 'w-4 h-4 border-2',
  md: 'w-6 h-6 border-2',
  lg: 'w-10 h-10 border-3',
  xl: 'w-14 h-14 border-4',
}

const Spinner = ({ size = 'md', color = 'amber', className = '' }) => {
  const sizeClass = sizes[size] || sizes.md
  const colorClass = color === 'white' ? 'border-white border-t-transparent' : 'border-amber-200 border-t-amber-500'

  return (
    <div
      className={`${sizeClass} ${colorClass} rounded-full animate-spin ${className}`}
      role="status"
      aria-label="Loading"
    />
  )
}

export default Spinner
