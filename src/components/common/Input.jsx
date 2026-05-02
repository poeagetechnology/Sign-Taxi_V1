import React, { forwardRef } from 'react'

const Input = forwardRef(({
  label,
  error,
  hint,
  prefix,
  suffix,
  className = '',
  containerClass = '',
  ...props
}, ref) => {
  return (
    <div className={`flex flex-col gap-1.5 ${containerClass}`}>
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {prefix && (
          <span className="absolute left-3 text-slate-400 pointer-events-none">{prefix}</span>
        )}
        <input
          ref={ref}
          className={`input-field ${prefix ? 'pl-9' : ''} ${suffix ? 'pr-10' : ''} ${error ? 'border-red-300 focus:ring-red-400' : ''} ${className}`}
          {...props}
        />
        {suffix && (
          <span className="absolute right-3 text-slate-400">{suffix}</span>
        )}
      </div>
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
      {hint && !error && <p className="text-xs text-slate-400">{hint}</p>}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
