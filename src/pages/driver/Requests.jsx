import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Navigation, DollarSign, Check, X, Car, Clock } from 'lucide-react'
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
import { formatCurrency, formatTimeAgo, truncate } from '../../utils/formatters'


const DriverRequests = () => {
  const navigate = useNavigate()
  const { userData } = useAuthStore()
  const { driverProfile, setDriverProfile, isOnline } = useDriverStore()
  const { incomingRequest, isResponding, respondToRequest } = useDriverDispatchRequests(userData?.id)
  const { location: driverLocation } = useDriverLocationRealtime(userData?.id)
  const [actionId, setActionId] = useState(null)
  const [loadingProfile, setLoadingProfile] = useState(!driverProfile)
  const [countdown, setCountdown] = useState(10)
  const [userActedRef, setUserActed] = useState(false) // Track if user manually acted



  // Countdown timer for request
  useEffect(() => {
    if (!incomingRequest) {
      setCountdown(10)
      setUserActed(false)
      return
    }

    setCountdown(10) // Reset to 10 when new request comes in
    setUserActed(false) // Reset user action flag

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          return 1
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [incomingRequest?.id])

  // Auto-reject when countdown reaches 0 (ONLY if user didn't manually act)
  useEffect(() => {
    if (countdown === 1 && incomingRequest && !isResponding && !userActedRef) {
      setUserActed(true) // Prevent multiple rejections
      respondToRequest(incomingRequest.id, 'reject').catch(() => {})
    }
  }, [countdown, incomingRequest, isResponding, userActedRef, respondToRequest])

  useEffect(() => {
    if (!driverProfile && userData?.id) {
      getDriverById(userData.id)
        .then(p => { if (p) setDriverProfile(p) })
        .finally(() => setLoadingProfile(false))
    } else {
      setLoadingProfile(false)
    }
  }, [userData?.id])

  // Refresh driver profile every 5 seconds to detect approval status changes
  useEffect(() => {
    if (!userData?.id) return

    const interval = setInterval(() => {
      getDriverById(userData.id)
        .then(p => { 
          if (p) setDriverProfile(p)
        })
        .catch(() => {})
    }, 5000)

    return () => clearInterval(interval)
  }, [userData?.id, setDriverProfile])

  const handleAccept = async (request) => {
    if (!request) {
      toast.error('No request data')
      return
    }
    if (!request.id) {
      toast.error('Invalid request')
      return
    }
    if (!driverProfile) { 
      toast.error('Driver profile still loading...'); 
      return 
    }
    if (!driverProfile?.isApproved) { 
      toast.error('Your account is not approved yet.'); 
      return 
    }
    if (!isOnline) { 
      toast.error('You must be online to accept rides.'); 
      return 
    }
    if (!driverLocation) { 
      toast.error('Location not available'); 
      return 
    }
    
    setActionId(request.id)
    setUserActed(true)
    
    try {
      await respondToRequest(request.id, 'accept')
      toast.success('Ride accepted! Head to the pickup location.')
      setTimeout(() => {
        navigate('/driver/active')
      }, 500)
    } catch (err) {
      toast.error(err.message || 'Failed to accept ride')
      setUserActed(false)
    } finally {
      setActionId(null)
    }
  }

  const handleReject = async (request) => {
    if (!request?.id) {
      return
    }
    
    setActionId(request.id)
    setUserActed(true)
    
    try {
      await respondToRequest(request.id, 'reject')
      toast('Request rejected', { icon: '✗' })
    } catch (err) {
      toast.error(err.message || 'Failed to reject request')
      setUserActed(false)
    } finally {
      setActionId(null)
    }
  }

  if (loadingProfile) return (
    <AppLayout title="Requests">
      <div className="flex items-center justify-center h-64"><Spinner size="lg" /></div>
    </AppLayout>
  )

  return (
    <AppLayout title="Requests">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-900">Ride Requests</h1>
            <p className="text-slate-500 text-sm mt-0.5">{incomingRequest ? '1 incoming request' : 'No active requests'}</p>
          </div>
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ${isOnline ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
            <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-emerald-400 animate-pulse' : 'bg-slate-400'}`} />
            {isOnline ? 'Online' : 'Offline'}
          </div>
        </div>

        {!isOnline && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
            <p className="text-slate-600 text-sm font-medium">You are offline</p>
            <p className="text-slate-400 text-xs mt-1">Go to Dashboard to go online and receive requests.</p>
          </div>
        )}

        {!incomingRequest ? (
          <EmptyState
            icon={Car}
            title="No ride requests"
            description={isOnline ? "Waiting for dispatch requests. Stay online and visible!" : "Go online to start receiving ride requests."}
          />
        ) : (
          <div className="space-y-3">
            {!driverProfile?.isApproved && (
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl mt-0.5">⚠️</div>
                  <div>
                    <p className="font-bold text-red-700">Account Not Approved</p>
                    <p className="text-red-600 text-sm mt-1">Your driver account must be approved by an admin before you can accept rides.</p>
                    <p className="text-red-600 text-sm mt-2"><strong>How to get approved:</strong></p>
                    <ol className="text-red-600 text-sm mt-1 ml-4 list-decimal space-y-1">
                      <li>Contact the admin with your driver ID: <code className="bg-red-100 px-2 py-1 rounded text-xs">{userData?.id}</code></li>
                      <li>Admin will verify your documents and approve your account</li>
                      <li>Once approved, refresh this page and you can start accepting rides ✅</li>
                    </ol>
                  </div>
                </div>
              </div>
            )}
            
            <div className="card hover:shadow-card-hover transition-shadow border-2 border-blue-300 bg-blue-50/30">
              {/* Urgent indicator */}
              <div className="mb-3 flex items-center gap-2">
                <div className="w-5 h-5 bg-red-500 rounded-full animate-pulse flex items-center justify-center" />
                <span className="text-xs font-bold text-red-700">⚡ INCOMING REQUEST</span>
              </div>

              {/* Timer */}
              <div className="mb-3">
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 font-bold px-3 py-1.5 rounded-lg text-sm">
                  <Clock size={16} />
                  <span>Respond quickly! ({countdown}s)</span>
                </div>
              </div>

              {/* Route */}
              <div className="space-y-2.5 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={14} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">PICKUP</p>
                    <p className="text-sm text-slate-700">{truncate(incomingRequest.pickupAddress, 55) || '—'}</p>
                  </div>
                </div>
                <div className="border-l-2 border-dashed border-slate-200 ml-4 h-3" />
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                    <Navigation size={14} className="text-amber-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">DESTINATION</p>
                    <p className="text-sm text-slate-700">{truncate(incomingRequest.dropAddress, 55) || '—'}</p>
                  </div>
                </div>
              </div>

              {/* Fare */}
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 flex-wrap">
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-sm font-bold px-3 py-1.5 rounded-lg">
                  <DollarSign size={14} />
                  {formatCurrency(incomingRequest.fare || 0)}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-3">
                {(!isOnline || !driverProfile?.isApproved) && (
                  <div className="w-full bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-yellow-700 text-sm font-medium">
                    {!isOnline && '⚠️ Go Online to Accept Rides'}
                    {isOnline && !driverProfile?.isApproved && '⚠️ Your Account is Not Approved'}
                  </div>
                )}

                {(isOnline && driverProfile?.isApproved) && (
                  <>
                    <Button
                      fullWidth
                      variant="success"
                      loading={actionId === incomingRequest.id || isResponding}
                      disabled={false}
                      onClick={() => {
                        handleAccept(incomingRequest)
                      }}
                    >
                      <Check size={16} /> Accept Ride
                    </Button>
                    <Button
                      fullWidth
                      variant="secondary"
                      loading={actionId === incomingRequest.id || isResponding}
                      disabled={false}
                      onClick={() => {
                        handleReject(incomingRequest)
                      }}
                    >
                      <X size={16} /> Reject
                    </Button>
                  </>
                )}

                {(!isOnline || !driverProfile?.isApproved) && (
                  <>
                    <Button
                      fullWidth
                      variant="success"
                      loading={false}
                      disabled={true}
                      onClick={() => {}}
                    >
                      <Check size={16} /> Accept Ride
                    </Button>
                    <Button
                      fullWidth
                      variant="secondary"
                      loading={false}
                      disabled={true}
                      onClick={() => {}}
                    >
                      <X size={16} /> Reject
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  )
}

export default DriverRequests
