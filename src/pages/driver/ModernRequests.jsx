import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Navigation, DollarSign, Check, X, Car, Clock, AlertCircle, Zap } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import EmptyState from '../../components/common/EmptyState'
import Spinner from '../../components/common/Spinner'
import Button from '../../components/common/Button'
import useAuthStore from '../../store/authStore'
import useDriverStore from '../../store/driverStore'
import { useDriverDispatchRequests } from '../../hooks/useDispatch'
import { useDriverLocationRealtime } from '../../hooks/useLocation'
import { getDriverById } from '../../services/driverService'
import { formatCurrency } from '../../utils/formatters'

const ModernDriverRequests = () => {
  const navigate = useNavigate()
  const { userData } = useAuthStore()
  const { driverProfile, setDriverProfile, isOnline } = useDriverStore()
  const { incomingRequest, isResponding, respondToRequest } = useDriverDispatchRequests(userData?.id)
  const { location: driverLocation } = useDriverLocationRealtime(userData?.id)
  const [loading, setLoading] = useState(!driverProfile)
  const [countdown, setCountdown] = useState(10)
  const [userActed, setUserActed] = useState(false)

  useEffect(() => {
    if (!incomingRequest) {
      setCountdown(10)
      setUserActed(false)
      return
    }

    setCountdown(10)
    setUserActed(false)

    const timer = setInterval(() => {
      setCountdown(prev => (prev <= 1 ? 1 : prev - 1))
    }, 1000)

    return () => clearInterval(timer)
  }, [incomingRequest?.id])

  useEffect(() => {
    if (countdown === 1 && incomingRequest && !isResponding && !userActed) {
      setUserActed(true)
      respondToRequest(incomingRequest.id, 'reject').catch(() => {})
    }
  }, [countdown, incomingRequest, isResponding, userActed, respondToRequest])

  useEffect(() => {
    if (!driverProfile && userData?.id) {
      getDriverById(userData.id)
        .then(p => { if (p) setDriverProfile(p) })
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [userData?.id, driverProfile, setDriverProfile])

  const handleAccept = async (request) => {
    if (!request?.id || !driverProfile?.isApproved || !isOnline || !driverLocation) {
      toast.error('Cannot accept ride. Please check all requirements.')
      return
    }

    setUserActed(true)
    try {
      await respondToRequest(request.id, 'accept')
      toast.success('🚗 Ride accepted! Head to pickup location.')
      setTimeout(() => navigate('/driver/active'), 500)
    } catch (err) {
      toast.error(err.message || 'Failed to accept ride')
      setUserActed(false)
    }
  }

  const handleReject = async (request) => {
    if (!request?.id) return
    setUserActed(true)
    try {
      await respondToRequest(request.id, 'reject')
      toast('Request declined', { icon: '✗' })
    } catch (err) {
      toast.error(err.message || 'Failed to reject request')
      setUserActed(false)
    }
  }

  if (loading) {
    return (
      <AppLayout title="Requests">
        <div className="flex items-center justify-center h-64">
          <Spinner size="lg" />
        </div>
      </AppLayout>
    )
  }

  if (!isOnline) {
    return (
      <AppLayout title="Requests">
        <EmptyState
          icon={AlertCircle}
          title="You're offline"
          description="Go online in your dashboard to receive ride requests"
          action={
            <Button onClick={() => navigate('/driver/dashboard')}>
              Go to Dashboard
            </Button>
          }
        />
      </AppLayout>
    )
  }

  if (!incomingRequest) {
    return (
      <AppLayout title="Requests">
        <EmptyState
          icon={Zap}
          title="Waiting for requests…"
          description="You're online and ready. Ride requests will appear here as soon as passengers request your services."
        />
      </AppLayout>
    )
  }

  const countdownPercentage = (countdown / 10) * 100
  const userDistance = incomingRequest.pickupDistance?.toFixed(1) || 'N/A'
  const estimatedArrival = incomingRequest.estimatedPickupTime || 'Calculating…'

  return (
    <AppLayout title="Ride Request">
      <div className="space-y-4">
        {/* Countdown Timer - Big Visual */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-3xl blur-xl" />
          <div className="relative bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border-2 border-red-200">
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-red-600 font-semibold mb-4">REQUEST EXPIRES IN</p>
              <div className="relative w-32 h-32 rounded-full bg-white border-4 border-red-500 flex items-center justify-center shadow-lg">
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-500 border-r-red-500 animate-spin" style={{ borderTopColor: `rgb(239 68 68 / ${countdownPercentage / 100})`, borderRightColor: `rgb(239 68 68 / ${countdownPercentage / 100})` }} />
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-red-600">{countdown}</p>
                  <p className="text-xs text-slate-500 mt-1">seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Request Details Cards */}
        <div className="grid grid-cols-2 gap-3">
          {/* Pickup */}
          <div className="bg-blue-50 rounded-2xl p-4 border-2 border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={16} className="text-blue-600" />
              <p className="text-xs text-blue-600 font-semibold">PICKUP</p>
            </div>
            <p className="font-semibold text-slate-900 text-sm truncate">{incomingRequest.pickupAddress}</p>
            <p className="text-xs text-slate-500 mt-1">{userDistance} km away</p>
          </div>

          {/* Drop */}
          <div className="bg-amber-50 rounded-2xl p-4 border-2 border-amber-200">
            <div className="flex items-center gap-2 mb-2">
              <Navigation size={16} className="text-amber-600" />
              <p className="text-xs text-amber-600 font-semibold">DROP</p>
            </div>
            <p className="font-semibold text-slate-900 text-sm truncate">{incomingRequest.dropAddress}</p>
            <p className="text-xs text-slate-500 mt-1">~{estimatedArrival}</p>
          </div>
        </div>

        {/* Passenger Info */}
        {incomingRequest.passengerInfo && (
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-display font-bold text-lg">
                {incomingRequest.passengerInfo.name?.[0]?.toUpperCase() || '?'}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">{incomingRequest.passengerInfo.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center">
                    <span className="text-xs font-semibold text-yellow-600">★</span>
                    <span className="text-xs text-slate-600 ml-1">{incomingRequest.passengerInfo.rating || 'N/A'}</span>
                  </div>
                  {incomingRequest.passengerInfo.phone && (
                    <a
                      href={`tel:${incomingRequest.passengerInfo.phone}`}
                      className="ml-auto text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                      📞 Call
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fare & Trip Info */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 border-2 border-green-200">
            <p className="text-xs text-green-600 font-semibold mb-1">ESTIMATED FARE</p>
            <p className="text-2xl font-display font-bold text-green-700">
              {formatCurrency(incomingRequest.fare || 0)}
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 border-2 border-purple-200">
            <p className="text-xs text-purple-600 font-semibold mb-1">TRIP TYPE</p>
            <p className="text-lg font-display font-bold text-purple-700 capitalize">
              {incomingRequest.tripType || 'Standard'}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button
            fullWidth
            variant="secondary"
            onClick={() => handleReject(incomingRequest)}
            disabled={isResponding}
            className="text-red-600 border-red-200 hover:bg-red-50"
          >
            <X size={18} /> Decline
          </Button>
          <Button
            fullWidth
            onClick={() => handleAccept(incomingRequest)}
            loading={isResponding}
            disabled={isResponding}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
          >
            <Check size={18} /> Accept Ride
          </Button>
        </div>

        {/* Offline Warning */}
        {!isOnline && (
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4 flex items-start gap-3">
            <AlertCircle size={18} className="text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-700">You went offline. Go online in your dashboard to receive more requests.</p>
          </div>
        )}
      </div>
    </AppLayout>
  )
}

export default ModernDriverRequests
