import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard, Users, Car, ClipboardList, History,
  LogOut, Zap, X
} from 'lucide-react'
import useAuthStore from '../../store/authStore'
import Avatar from '../common/Avatar'
import toast from 'react-hot-toast'

const adminLinks = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/users', label: 'Users', icon: Users },
  { to: '/admin/drivers', label: 'Drivers', icon: Car },
  { to: '/admin/rides', label: 'Rides', icon: ClipboardList },
  { to: '/admin/history', label: 'History', icon: History },
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

const MobileDrawer = ({ isOpen, onClose, role }) => {
  const { userData, logout } = useAuthStore()
  const navigate = useNavigate()
  const links = role === 'admin' ? adminLinks : role === 'driver' ? driverLinks : userLinks

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleLogout = async () => {
    onClose()
    await logout()
    toast.success('Logged out successfully')
    navigate('/login')
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-amber-500 rounded-xl flex items-center justify-center">
              <Zap size={16} className="text-white" fill="white" />
            </div>
            <span className="font-display font-bold text-lg text-slate-900">SignTaxi</span>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-lg">
            <X size={18} className="text-slate-500" />
          </button>
        </div>

        {/* User info */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 bg-slate-50">
          <Avatar name={userData?.name} photoURL={userData?.photoURL} size="md" />
          <div>
            <p className="font-semibold text-slate-900 text-sm">{userData?.name || 'User'}</p>
            <p className="text-xs text-slate-400 capitalize">{userData?.role}</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-slate-100">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-red-500 hover:bg-red-50 transition-all font-medium text-sm"
          >
            <LogOut size={16} />
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </>
  )
}

export default MobileDrawer
