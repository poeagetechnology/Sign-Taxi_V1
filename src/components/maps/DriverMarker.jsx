import React, { memo } from 'react'
import { OverlayView } from '@react-google-maps/api'

const DriverMarker = memo(({ position, driverName, isAssigned = false }) => {
  if (!position) return null

  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <div className="relative flex flex-col items-center" style={{ transform: 'translate(-50%, -100%)' }}>
        <div className={`w-10 h-10 ${isAssigned ? 'bg-amber-500' : 'bg-slate-700'} rounded-full border-2 border-white shadow-lg flex items-center justify-center`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
          </svg>
        </div>
        {driverName && (
          <div className={`mt-1 ${isAssigned ? 'bg-amber-500' : 'bg-slate-700'} text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap`}>
            {driverName}
          </div>
        )}
      </div>
    </OverlayView>
  )
})

DriverMarker.displayName = 'DriverMarker'

export default DriverMarker
