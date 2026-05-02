import React, { memo } from 'react'
import { Marker, OverlayView } from '@react-google-maps/api'

const UserMarker = memo(({ position, label = 'You' }) => {
  if (!position) return null

  return (
    <OverlayView
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <div className="relative flex flex-col items-center">
        <div className="w-10 h-10 bg-blue-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
        </div>
        <div className="mt-1 bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">
          {label}
        </div>
        <div className="absolute -bottom-1 w-3 h-3 bg-blue-500 rotate-45 rounded-sm" style={{ bottom: '-18px' }} />
      </div>
    </OverlayView>
  )
})

UserMarker.displayName = 'UserMarker'

export default UserMarker
