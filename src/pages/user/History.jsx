import React, { useEffect, useMemo, useState } from 'react'
import { ClipboardList, Search, ArrowUpAZ, ArrowDownAZ } from 'lucide-react'
import AppLayout from '../../components/layout/AppLayout'
import Spinner from '../../components/common/Spinner'
import EmptyState from '../../components/common/EmptyState'
import { RideStatusBadge } from '../../components/common/Badge'
import Button from '../../components/common/Button'
import useAuthStore from '../../store/authStore'
import { getUserRides } from '../../services/rideService'
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

const UserHistory = () => {
  const { userData } = useAuthStore()
  const [rides, setRides] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('latest')
  const [statusFilter, setStatusFilter] = useState('all')
  const [page, setPage] = useState(1)

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

  const filteredRides = useMemo(() => {
    const query = search.trim().toLowerCase()

    const nextList = rides
      .filter((ride) => statusFilter === 'all' ? true : ride.status === statusFilter)
      .filter((ride) => {
        if (!query) return true
        return [ride.id, ride.pickupAddress, ride.dropAddress, ride.status, formatCurrency(ride.fare || 0)]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(query))
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
  const totalSpent = rides.filter(r => r.status === 'completed').reduce((s, r) => s + (r.fare || 0), 0)

  return (
    <AppLayout title="History">
      <div className="space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-900">Ride History</h1>
            <p className="text-slate-500 text-sm mt-0.5">{rides.length} trips · {formatCurrency(totalSpent)} total spent</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-900">{filteredRides.length} records</p>
            <p className="text-xs text-slate-500">Page {page} of {totalPages}</p>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-48"><Spinner /></div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
            <p className="text-red-700 font-medium text-sm">Error loading rides</p>
            <p className="text-red-600 text-xs mt-1">{error}</p>
          </div>
        ) : rides.length === 0 ? (
          <EmptyState icon={ClipboardList} title="No rides yet" description="Book your first ride to see your history here." />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  className="input-field pl-9 w-full"
                  placeholder="Search by location, status, or fare…"
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

            {paginatedRides.length === 0 ? (
              <EmptyState icon={ClipboardList} title="No rides found" description="Try changing the search, filter, or sorting options." />
            ) : (
              <>
                {/* Grid View - Mobile & Tablet */}
                <div className="block lg:hidden space-y-3">
                  {paginatedRides.map((ride) => (
                    <div key={ride.id} className="card space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0 space-y-2">
                          <p className="text-xs font-semibold text-slate-500 uppercase">From</p>
                          <p className="text-sm font-medium text-slate-900 truncate">{ride.pickupAddress || '—'}</p>
                          <p className="text-xs font-semibold text-slate-500 uppercase mt-2">To</p>
                          <p className="text-sm font-medium text-slate-900 truncate">{ride.dropAddress || '—'}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-lg font-display font-bold text-amber-600">{formatCurrency(ride.fare || 0)}</p>
                          <div className="mt-2">
                            <RideStatusBadge status={ride.status} />
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-slate-100">
                        <p className="text-xs text-slate-400">{formatDateTime(ride.createdAt)}</p>
                        <p className="text-xs text-slate-500 mt-1">ID: {ride.id.slice(0, 8)}…</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Table View - Desktop */}
                <div className="hidden lg:block card p-0 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="table-header text-left">Date</th>
                          <th className="table-header text-left">From</th>
                          <th className="table-header text-left">To</th>
                          <th className="table-header text-left">Fare</th>
                          <th className="table-header text-left">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedRides.map((ride) => (
                          <tr key={ride.id} className="hover:bg-slate-50 transition-colors">
                            <td className="table-cell text-xs text-slate-500">{formatDateTime(ride.createdAt)}</td>
                            <td className="table-cell max-w-xs truncate text-sm">{ride.pickupAddress || '—'}</td>
                            <td className="table-cell max-w-xs truncate text-sm">{ride.dropAddress || '—'}</td>
                            <td className="table-cell font-semibold">{formatCurrency(ride.fare || 0)}</td>
                            <td className="table-cell"><RideStatusBadge status={ride.status} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Pagination */}
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
              </>
            )}
          </>
        )}
      </div>
    </AppLayout>
  )
}

export default UserHistory
