import React from 'react'
import Spinner from './Spinner'

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  danger: 'btn-danger',
  success: 'btn-success',
  ghost: 'text-slate-600 hover:bg-slate-100 px-5 py-2.5 rounded-xl font-semibold transition-all',
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  fullWidth = false,
  ...props
}) => {
  const sizeClass = size === 'sm' ? 'text-sm px-3 py-1.5' : size === 'lg' ? 'text-base px-6 py-3' : ''
  const widthClass = fullWidth ? 'w-full justify-center' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${variants[variant]} ${sizeClass} ${widthClass} inline-flex items-center gap-2 ${className}`}
      {...props}
    >
      {loading && <Spinner size="sm" color={variant === 'secondary' ? 'amber' : 'white'} />}
      {children}
    </button>
  )
}

export default Button
