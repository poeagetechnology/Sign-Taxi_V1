import React, { useEffect, useState } from 'react'
import { ClipboardList, MapPin, Navigation } from 'lucide-react'
import AppLayout from '../../components/layout/AppLayout'
import Spinner from '../../components/common/Spinner'
import EmptyState from '../../components/common/EmptyState'
import { RideStatusBadge } from '../../components/common/Badge'
import useAuthStore from '../../store/authStore'
import { getUserRides } from '../../services/rideService'
import { formatCurrency, formatDateTime, truncate } from '../../utils/formatters'

const UserHistory = () => {
  const { userData } = useAuthStore()
  const [rides, setRides] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!userData?.id) {
      setLoading(false)
      return
    }
    getUserRides(userData.id)
      .then(data => {
        setRides(data)
        setError(null)
      })
      .catch(err => {
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [userData?.id])

  const totalSpent = rides.filter(r => r.status === 'completed').reduce((s, r) => s + (r.fare || 0), 0)

  return (
    <AppLayout title="History">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-900">Ride History</h1>
            <p className="text-slate-500 text-sm mt-0.5">{rides.length} trips · {formatCurrency(totalSpent)} total</p>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-48"><Spinner size="lg" /></div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
            <p className="text-red-700 font-medium text-sm">Error loading rides</p>
            <p className="text-red-600 text-xs mt-1">{error}</p>
          </div>
        ) : rides.length === 0 ? (
          <EmptyState icon={ClipboardList} title="No rides yet" description="Book your first ride to see your history here." />
        ) : (
          <div className="space-y-3">
            {rides.map(ride => (
              <div key={ride.id} className="card hover:shadow-card-hover transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex items-start gap-2.5">
                      <MapPin size={15} className="text-blue-400 mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-700">{truncate(ride.pickupAddress, 50) || '—'}</p>
                    </div>
                    <div className="border-l-2 border-dashed border-slate-200 ml-[7px] h-3" />
                    <div className="flex items-start gap-2.5">
                      <Navigation size={15} className="text-amber-400 mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-700">{truncate(ride.dropAddress, 50) || '—'}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-display font-bold text-slate-900">{formatCurrency(ride.fare || 0)}</p>
                    <div className="mt-1">
                      <RideStatusBadge status={ride.status} />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-50">
                  {formatDateTime(ride.createdAt)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  )
}

export default UserHistory
