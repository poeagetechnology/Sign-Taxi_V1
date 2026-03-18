import React, { useEffect, useState } from 'react'
import { Users, Car, ClipboardList, DollarSign, TrendingUp, Clock } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import Spinner from '../../components/common/Spinner'
import { getAllUsers } from '../../services/userService'
import { getAllDrivers } from '../../services/driverService'
import { getAllRides } from '../../services/rideService'
import { formatCurrency, formatDateTime } from '../../utils/formatters'
import { RideStatusBadge } from '../../components/common/Badge'

const StatCard = ({ icon: Icon, label, value, color, sub }) => (
  <div className="stat-card">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
      <Icon size={22} className="text-white" />
    </div>
    <div>
      <p className="text-2xl font-display font-bold text-slate-900">{value}</p>
      <p className="text-sm text-slate-500">{label}</p>
      {sub && <p className="text-xs text-slate-400 mt-0.5">{sub}</p>}
    </div>
  </div>
)

const AdminDashboard = () => {
  const [stats, setStats] = useState({ users: 0, drivers: 0, rides: 0, earnings: 0 })
  const [recentRides, setRecentRides] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const [users, drivers, rides] = await Promise.all([
          getAllUsers(), getAllDrivers(), getAllRides()
        ])
        const earnings = rides
          .filter(r => r.status === 'completed')
          .reduce((sum, r) => sum + (r.fare || 0), 0)
        setStats({ users: users.length, drivers: drivers.length, rides: rides.length, earnings })
        setRecentRides(rides.slice(0, 8))
      } catch (err) {
        console.error('AdminDashboard load error:', err)
        toast.error(`Failed to load dashboard data: ${err.message || err}`)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return (
    <AppLayout title="Dashboard">
      <div className="flex items-center justify-center h-64"><Spinner size="lg" /></div>
    </AppLayout>
  )

  return (
    <AppLayout title="Dashboard">
      <div className="space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1">Overview of your platform</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={Users} label="Total Users" value={stats.users} color="bg-blue-500" />
          <StatCard icon={Car} label="Total Drivers" value={stats.drivers} color="bg-violet-500" />
          <StatCard icon={ClipboardList} label="Total Rides" value={stats.rides} color="bg-amber-500" />
          <StatCard icon={DollarSign} label="Total Earnings" value={formatCurrency(stats.earnings)} color="bg-emerald-500" />
        </div>

        {/* Recent rides */}
        <div className="card p-0 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-display font-semibold text-slate-900">Recent Rides</h2>
            <span className="badge-gray">{recentRides.length} rides</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="table-header text-left">Pickup</th>
                  <th className="table-header text-left">Destination</th>
                  <th className="table-header text-left">Fare</th>
                  <th className="table-header text-left">Status</th>
                  <th className="table-header text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentRides.map(ride => (
                  <tr key={ride.id} className="hover:bg-slate-50 transition-colors">
                    <td className="table-cell max-w-[160px] truncate">{ride.pickupAddress || '—'}</td>
                    <td className="table-cell max-w-[160px] truncate">{ride.dropAddress || '—'}</td>
                    <td className="table-cell font-semibold">{formatCurrency(ride.fare || 0)}</td>
                    <td className="table-cell"><RideStatusBadge status={ride.status} /></td>
                    <td className="table-cell text-slate-400 text-xs">{formatDateTime(ride.createdAt)}</td>
                  </tr>
                ))}
                {recentRides.length === 0 && (
                  <tr><td colSpan={5} className="text-center py-10 text-slate-400 text-sm">No rides yet</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default AdminDashboard
