import React, { useEffect, useState } from 'react'
import { ClipboardList } from 'lucide-react'
import AppLayout from '../../components/layout/AppLayout'
import Spinner from '../../components/common/Spinner'
import EmptyState from '../../components/common/EmptyState'
import { RideStatusBadge } from '../../components/common/Badge'
import useAuthStore from '../../store/authStore'
import { getDriverRides } from '../../services/rideService'
import { formatCurrency, formatDateTime, truncate } from '../../utils/formatters'

const DriverHistory = () => {
  const { userData } = useAuthStore()
  const [rides, setRides] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userData?.id) return
    getDriverRides(userData.id)
      .then(setRides)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [userData?.id])

  const completed = rides.filter(r => r.status === 'completed')
  const earnings = completed.reduce((s, r) => s + (r.fare || 0), 0)

  return (
    <AppLayout title="History">
      <div className="space-y-5">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">Ride History</h1>
          <p className="text-slate-500 text-sm mt-0.5">{completed.length} completed · {formatCurrency(earnings)} earned</p>
        </div>

        {/* Earnings summary */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Total Rides', value: rides.length },
            { label: 'Completed', value: completed.length },
            { label: 'Total Earned', value: formatCurrency(earnings) },
          ].map(({ label, value }) => (
            <div key={label} className="card text-center py-4">
              <p className="font-display font-bold text-slate-900 text-lg">{value}</p>
              <p className="text-xs text-slate-400 mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-48"><Spinner size="lg" /></div>
        ) : rides.length === 0 ? (
          <EmptyState icon={ClipboardList} title="No rides yet" description="Your completed rides will appear here." />
        ) : (
          <div className="space-y-3">
            {rides.map(ride => (
              <div key={ride.id} className="card hover:shadow-card-hover transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <p className="text-sm text-slate-600">
                      <span className="font-medium text-slate-500 text-xs">FROM </span>
                      {truncate(ride.pickupAddress, 45) || '—'}
                    </p>
                    <p className="text-sm text-slate-600">
                      <span className="font-medium text-slate-500 text-xs">TO </span>
                      {truncate(ride.dropAddress, 45) || '—'}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-display font-bold text-slate-900">{formatCurrency(ride.fare || 0)}</p>
                    <div className="mt-1"><RideStatusBadge status={ride.status} /></div>
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

export default DriverHistory
