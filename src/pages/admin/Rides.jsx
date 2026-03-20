import React, { useEffect, useMemo, useState } from 'react'
import { Search, ClipboardList, XCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import Spinner from '../../components/common/Spinner'
import Button from '../../components/common/Button'
import EmptyState from '../../components/common/EmptyState'
import { RideStatusBadge } from '../../components/common/Badge'
import { getAllRides, cancelRide } from '../../services/rideService'
import { formatCurrency, formatDateTime } from '../../utils/formatters'

const BOOKING_TABS = [
  { key: 'approved', label: 'Approved', statuses: ['accepted', 'started', 'completed'] },
  { key: 'pending', label: 'Pending', statuses: ['searching', 'requested'] },
  { key: 'rejected', label: 'Rejected', statuses: ['cancelled'] },
]

const getCreatedAtValue = (timestamp) => {
  if (!timestamp) return 0
  const date = timestamp?.toDate ? timestamp.toDate() : new Date(timestamp)
  return date.getTime()
}

const AdminRides = () => {
  const [rides, setRides] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [bookingTab, setBookingTab] = useState('pending')
  const [actionId, setActionId] = useState(null)

  const load = async () => {
    try {
      const data = await getAllRides()
      setRides(data)
    } catch { toast.error('Failed to load rides') }
    finally { setLoading(false) }
  }

  useEffect(() => { load() }, [])

  const filtered = useMemo(() => {
    const activeTab = BOOKING_TABS.find((tab) => tab.key === bookingTab)
    const query = search.trim().toLowerCase()

    return rides
      .filter((ride) => activeTab ? activeTab.statuses.includes(ride.status) : true)
      .filter((ride) => {
        if (!query) return true
        return [ride.pickupAddress, ride.dropAddress, ride.id, ride.userId, ride.driverId, ride.status]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(query))
      })
      .sort((left, right) => getCreatedAtValue(right.createdAt) - getCreatedAtValue(left.createdAt))
  }, [rides, bookingTab, search])

  const handleCancel = async (ride) => {
    if (!window.confirm('Cancel this ride?')) return
    setActionId(ride.id)
    try {
      await cancelRide(ride.id)
      toast.success('Ride cancelled')
      await load()
    } catch { toast.error('Failed to cancel') }
    finally { setActionId(null) }
  }

  const totalEarnings = rides.filter(r => r.status === 'completed').reduce((s, r) => s + (r.fare || 0), 0)

  return (
    <AppLayout title="Booking Management">
      <div className="space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-900">Booking Management</h1>
            <p className="text-slate-500 text-sm mt-0.5">
              {rides.length} total · {formatCurrency(totalEarnings)} earned
            </p>
          </div>
          <div className="relative w-full sm:w-auto">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input className="input-field pl-9 w-full sm:w-64" placeholder="Search rides…" value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {BOOKING_TABS.map((tab) => {
            const count = rides.filter((ride) => tab.statuses.includes(ride.status)).length
            return (
              <button
                key={tab.key}
                onClick={() => setBookingTab(tab.key)}
                className={`rounded-2xl border p-4 text-left transition-all ${bookingTab === tab.key ? 'border-amber-300 bg-amber-50 shadow-sm' : 'border-slate-200 bg-white hover:border-amber-200'}`}
              >
                <p className="text-sm font-semibold text-slate-900">{tab.label}</p>
                <p className="text-2xl font-display font-bold text-slate-900 mt-2">{count}</p>
                <p className="text-xs text-slate-500 mt-1">Sorted newest first</p>
              </button>
            )
          })}
        </div>

        {/* Mobile Tab Buttons */}
        <div className="flex gap-2 flex-wrap md:hidden">
          {BOOKING_TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setBookingTab(tab.key)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all capitalize flex-1 min-w-[100px] ${bookingTab === tab.key ? 'bg-amber-500 text-white shadow-sm' : 'bg-white text-slate-500 border border-slate-200 hover:border-amber-300'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="card p-0 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-48"><Spinner /></div>
          ) : filtered.length === 0 ? (
            <EmptyState icon={ClipboardList} title="No rides found" description="Try adjusting your filters." />
          ) : (
            <>
              {/* Mobile Card View */}
              <div className="md:hidden space-y-3 p-4">
                {filtered.map(ride => (
                  <div key={ride.id} className="border border-slate-200 rounded-xl p-4 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-slate-500 uppercase">Route</p>
                        <p className="text-sm font-medium text-slate-900 truncate">{ride.pickupAddress?.slice(0, 40) || '—'}</p>
                        <p className="text-xs text-slate-500 mt-1 truncate">→ {ride.dropAddress?.slice(0, 40) || '—'}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-lg font-display font-bold text-amber-600">{formatCurrency(ride.fare || 0)}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
                      <div className="flex-1 text-xs text-slate-500">
                        <p className="font-medium text-slate-700">{ride.status}</p>
                        <p>{formatDateTime(ride.createdAt)}</p>
                      </div>
                      {!['completed', 'cancelled'].includes(ride.status) && (
                        <Button size="sm" variant="danger" loading={actionId === ride.id} onClick={() => handleCancel(ride)} className="shrink-0">
                          <XCircle size={13} /> Cancel
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="table-header text-left">ID</th>
                      <th className="table-header text-left">User</th>
                      <th className="table-header text-left">Driver</th>
                      <th className="table-header text-left">Pickup</th>
                      <th className="table-header text-left">Drop</th>
                      <th className="table-header text-left">Fare</th>
                      <th className="table-header text-left">Status</th>
                      <th className="table-header text-left">Created</th>
                      <th className="table-header text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map(ride => (
                      <tr key={ride.id} className="hover:bg-slate-50 transition-colors">
                        <td className="table-cell font-mono text-xs text-slate-400">{ride.id.slice(0, 8)}…</td>
                        <td className="table-cell text-xs text-slate-500">{ride.userId?.slice(0, 8) || '—'}</td>
                        <td className="table-cell text-xs text-slate-500">{ride.driverId?.slice(0, 8) || '—'}</td>
                        <td className="table-cell max-w-[140px] truncate text-sm">{ride.pickupAddress || '—'}</td>
                        <td className="table-cell max-w-[140px] truncate text-sm">{ride.dropAddress || '—'}</td>
                        <td className="table-cell font-semibold">{formatCurrency(ride.fare || 0)}</td>
                        <td className="table-cell"><RideStatusBadge status={ride.status} /></td>
                        <td className="table-cell text-xs text-slate-400">{formatDateTime(ride.createdAt)}</td>
                        <td className="table-cell">
                          {!['completed', 'cancelled'].includes(ride.status) && (
                            <Button size="sm" variant="danger" loading={actionId === ride.id} onClick={() => handleCancel(ride)}>
                              <XCircle size={13} /> Cancel
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </AppLayout>
  )
}

export default AdminRides
