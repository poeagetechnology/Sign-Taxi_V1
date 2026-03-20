import React, { useEffect, useMemo, useState } from 'react'
import { ArrowDownAZ, ArrowUpAZ, ClipboardList, Search } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import Spinner from '../../components/common/Spinner'
import EmptyState from '../../components/common/EmptyState'
import { RideStatusBadge } from '../../components/common/Badge'
import { getAllRides } from '../../services/rideService'
import { formatCurrency, formatDateTime } from '../../utils/formatters'

const PAGE_SIZE = 10

const SORT_OPTIONS = {
  latest: 'Latest first',
  oldest: 'Oldest first',
  fareHigh: 'Fare high to low',
  fareLow: 'Fare low to high',
}

const getCreatedAtValue = (timestamp) => {
  if (!timestamp) return 0
  const date = timestamp?.toDate ? timestamp.toDate() : new Date(timestamp)
  return date.getTime()
}

const AdminHistory = () => {
  const [rides, setRides] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('latest')
  const [statusFilter, setStatusFilter] = useState('all')
  const [page, setPage] = useState(1)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getAllRides()
        setRides(data)
      } catch {
        toast.error('Failed to load ride history')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  const filteredRides = useMemo(() => {
    const query = search.trim().toLowerCase()

    const nextList = rides
      .filter((ride) => statusFilter === 'all' ? true : ride.status === statusFilter)
      .filter((ride) => {
        if (!query) return true
        return [ride.id, ride.userId, ride.driverId, ride.pickupAddress, ride.dropAddress, ride.status]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(query))
      })

    nextList.sort((left, right) => {
      if (sortBy === 'oldest') {
        return getCreatedAtValue(left.createdAt) - getCreatedAtValue(right.createdAt)
      }
      if (sortBy === 'fareHigh') {
        return (right.fare || 0) - (left.fare || 0)
      }
      if (sortBy === 'fareLow') {
        return (left.fare || 0) - (right.fare || 0)
      }
      return getCreatedAtValue(right.createdAt) - getCreatedAtValue(left.createdAt)
    })

    return nextList
  }, [rides, search, sortBy, statusFilter])

  useEffect(() => {
    setPage(1)
  }, [search, sortBy, statusFilter])

  const totalPages = Math.max(1, Math.ceil(filteredRides.length / PAGE_SIZE))
  const paginatedRides = filteredRides.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <AppLayout title="History">
      <div className="space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-900">Ride History</h1>
            <p className="text-slate-500 text-sm mt-0.5">All booking records in a searchable, sortable table.</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-900">{filteredRides.length} records</p>
            <p className="text-xs text-slate-500">Page {page} of {totalPages}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              className="input-field pl-9 w-full"
              placeholder="Search by ride, route, user, driver, or status…"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <select className="input-field" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
            <option value="all">All statuses</option>
            <option value="searching">Searching</option>
            <option value="requested">Requested</option>
            <option value="accepted">Accepted</option>
            <option value="started">Started</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <select className="input-field" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
            {Object.entries(SORT_OPTIONS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <div className="card p-0 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-48"><Spinner /></div>
          ) : paginatedRides.length === 0 ? (
            <EmptyState icon={ClipboardList} title="No history records found" description="Try changing the search, filter, or sorting options." />
          ) : (
            <>
              {/* Mobile Card View */}
              <div className="lg:hidden space-y-3 p-4">
                {paginatedRides.map((ride) => (
                  <div key={ride.id} className="border border-slate-200 rounded-xl p-3 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-slate-400 font-mono">{ride.id.slice(0, 8)}…</p>
                        <p className="text-xs text-slate-500 mt-1">{formatDateTime(ride.createdAt)}</p>
                      </div>
                      <RideStatusBadge status={ride.status} />
                    </div>
                    <div className="space-y-1 text-xs">
                      <p className="text-slate-500">Route: {ride.pickupAddress || '—'} → {ride.dropAddress || '—'}</p>
                      <p className="text-slate-500">User: {ride.userId?.slice(0, 8) || '—'} | Driver: {ride.driverId?.slice(0, 8) || '—'}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="font-semibold text-slate-900">{formatCurrency(ride.fare || 0)}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="table-header text-left">Created</th>
                      <th className="table-header text-left">Ride</th>
                      <th className="table-header text-left">User</th>
                      <th className="table-header text-left">Driver</th>
                      <th className="table-header text-left">Pickup</th>
                      <th className="table-header text-left">Drop</th>
                      <th className="table-header text-left">Fare</th>
                      <th className="table-header text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedRides.map((ride) => (
                      <tr key={ride.id} className="hover:bg-slate-50 transition-colors">
                        <td className="table-cell text-xs text-slate-500">{formatDateTime(ride.createdAt)}</td>
                        <td className="table-cell font-mono text-xs text-slate-500">{ride.id.slice(0, 8)}…</td>
                        <td className="table-cell text-xs text-slate-500">{ride.userId?.slice(0, 8) || '—'}</td>
                        <td className="table-cell text-xs text-slate-500">{ride.driverId?.slice(0, 8) || '—'}</td>
                        <td className="table-cell max-w-[180px] truncate text-sm">{ride.pickupAddress || '—'}</td>
                        <td className="table-cell max-w-[180px] truncate text-sm">{ride.dropAddress || '—'}</td>
                        <td className="table-cell font-semibold">{formatCurrency(ride.fare || 0)}</td>
                        <td className="table-cell"><RideStatusBadge status={ride.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="text-xs text-slate-500">Showing {(page - 1) * PAGE_SIZE + 1} to {Math.min(page * PAGE_SIZE, filteredRides.length)} of {filteredRides.length}</div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              disabled={page === 1}
              className="btn-secondary disabled:opacity-50"
            >
              <ArrowUpAZ size={16} /> Previous
            </button>
            <button
              type="button"
              onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
              disabled={page === totalPages}
              className="btn-secondary disabled:opacity-50"
            >
              Next <ArrowDownAZ size={16} />
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default AdminHistory