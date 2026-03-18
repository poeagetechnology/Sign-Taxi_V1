import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard, Users, Car, ClipboardList,
  LogOut, Zap, ChevronRight
} from 'lucide-react'
import useAuthStore from '../../store/authStore'
import Avatar from '../common/Avatar'
import toast from 'react-hot-toast'

const adminLinks = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/users', label: 'Users', icon: Users },
  { to: '/admin/drivers', label: 'Drivers', icon: Car },
  { to: '/admin/rides', label: 'Rides', icon: ClipboardList },
]

const userLinks = [
  { to: '/user/home', label: 'Home', icon: LayoutDashboard },
  { to: '/user/book', label: 'Book Ride', icon: Car },
  { to: '/user/history', label: 'Ride History', icon: ClipboardList },
  { to: '/user/profile', label: 'Profile', icon: Users },
]

const driverLinks = [
  { to: '/driver/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/driver/requests', label: 'Ride Requests', icon: ClipboardList },
  { to: '/driver/history', label: 'History', icon: Car },
  { to: '/driver/profile', label: 'Profile', icon: Users },
]

const Sidebar = ({ role }) => {
  const { userData, logout } = useAuthStore()
  const navigate = useNavigate()

  const links = role === 'admin' ? adminLinks : role === 'driver' ? driverLinks : userLinks

  const handleLogout = async () => {
    await logout()
    toast.success('Logged out successfully')
    navigate('/login')
  }

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-100 min-h-screen sticky top-0">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-amber-500 rounded-xl flex items-center justify-center shadow-sm">
            <Zap size={16} className="text-white" fill="white" />
          </div>
          <span className="font-display font-bold text-lg text-slate-900">SignTaxi</span>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* User info */}
      <div className="px-3 py-4 border-t border-slate-100">
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 cursor-pointer mb-2"
          onClick={() => navigate(role === 'admin' ? '/admin/dashboard' : role === 'driver' ? '/driver/profile' : '/user/profile')}
        >
          <Avatar name={userData?.name} photoURL={userData?.photoURL} size="sm" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 truncate">{userData?.name || 'User'}</p>
            <p className="text-xs text-slate-400 capitalize">{userData?.role}</p>
          </div>
          <ChevronRight size={14} className="text-slate-400" />
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-red-500 hover:bg-red-50 transition-all duration-150 font-medium text-sm"
        >
          <LogOut size={16} />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
