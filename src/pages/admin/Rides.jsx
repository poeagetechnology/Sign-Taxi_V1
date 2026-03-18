import React, { useEffect, useState } from 'react'
import { Search, ClipboardList, XCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import Spinner from '../../components/common/Spinner'
import Button from '../../components/common/Button'
import EmptyState from '../../components/common/EmptyState'
import { RideStatusBadge } from '../../components/common/Badge'
import { getAllRides, cancelRide } from '../../services/rideService'
import { formatCurrency, formatDateTime } from '../../utils/formatters'

const STATUS_FILTERS = ['all', 'requested', 'accepted', 'started', 'completed', 'cancelled']

const AdminRides = () => {
  const [rides, setRides] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [actionId, setActionId] = useState(null)

  const load = async () => {
    try {
      const data = await getAllRides()
      setRides(data)
    } catch { toast.error('Failed to load rides') }
    finally { setLoading(false) }
  }

  useEffect(() => { load() }, [])

  useEffect(() => {
    let list = rides
    if (statusFilter !== 'all') list = list.filter(r => r.status === statusFilter)
    if (search) {
      const q = search.toLowerCase()
      list = list.filter(r =>
        r.pickupAddress?.toLowerCase().includes(q) ||
        r.dropAddress?.toLowerCase().includes(q) ||
        r.id?.toLowerCase().includes(q)
      )
    }
    setFiltered(list)
  }, [rides, statusFilter, search])

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
    <AppLayout title="Rides">
      <div className="space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-900">All Rides</h1>
            <p className="text-slate-500 text-sm mt-0.5">
              {rides.length} total · {formatCurrency(totalEarnings)} earned
            </p>
          </div>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input className="input-field pl-9 w-64" placeholder="Search rides…" value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </div>

        {/* Status filter tabs */}
        <div className="flex gap-2 flex-wrap">
          {STATUS_FILTERS.map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all capitalize ${statusFilter === s ? 'bg-amber-500 text-white shadow-sm' : 'bg-white text-slate-500 border border-slate-200 hover:border-amber-300'}`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="card p-0 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-48"><Spinner /></div>
          ) : filtered.length === 0 ? (
            <EmptyState icon={ClipboardList} title="No rides found" description="Try adjusting your filters." />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="table-header text-left">ID</th>
                    <th className="table-header text-left">Pickup</th>
                    <th className="table-header text-left">Drop</th>
                    <th className="table-header text-left">Fare</th>
                    <th className="table-header text-left">Status</th>
                    <th className="table-header text-left">Date</th>
                    <th className="table-header text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(ride => (
                    <tr key={ride.id} className="hover:bg-slate-50 transition-colors">
                      <td className="table-cell font-mono text-xs text-slate-400">{ride.id.slice(0, 8)}…</td>
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
          )}
        </div>
      </div>
    </AppLayout>
  )
}

export default AdminRides
