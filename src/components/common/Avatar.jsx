import React from 'react'
import { getInitials } from '../../utils/formatters'

const sizes = {
  xs: 'w-7 h-7 text-xs',
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-lg',
  '2xl': 'w-20 h-20 text-xl',
}

const Avatar = ({ name, photoURL, size = 'md', className = '' }) => {
  const sizeClass = sizes[size] || sizes.md

  if (photoURL) {
    return (
      <img
        src={photoURL}
        alt={name || 'User'}
        className={`${sizeClass} rounded-full object-cover ring-2 ring-white shadow-sm ${className}`}
      />
    )
  }

  return (
    <div
      className={`${sizeClass} rounded-full bg-amber-100 text-amber-700 font-semibold flex items-center justify-center ring-2 ring-white shadow-sm ${className}`}
    >
      {getInitials(name)}
    </div>
  )
}

export default Avatar
