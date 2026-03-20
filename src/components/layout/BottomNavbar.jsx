import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  Car,
  ClipboardList,
  History,
  MapPin,
  User,
  ListChecks,
  Clock,
  AlertCircle,
} from 'lucide-react'

const adminLinks = [
  { to: '/admin/dashboard', label: 'Dash', icon: LayoutDashboard },
  { to: '/admin/users', label: 'Users', icon: Users },
  { to: '/admin/drivers', label: 'Drivers', icon: Car },
  { to: '/admin/rides', label: 'Rides', icon: ClipboardList },
  { to: '/admin/history', label: 'Hist', icon: History },
]

const userLinks = [
  { to: '/user/home', label: 'Home', icon: LayoutDashboard },
  { to: '/user/book', label: 'Book', icon: MapPin },
  { to: '/user/history', label: 'History', icon: Clock },
  { to: '/user/profile', label: 'Profile', icon: User },
]

const driverLinks = [
  { to: '/driver/dashboard', label: 'Dash', icon: LayoutDashboard },
  { to: '/driver/requests', label: 'Requests', icon: ListChecks },
  { to: '/driver/history', label: 'History', icon: Clock },
  { to: '/driver/profile', label: 'Profile', icon: User },
]

const BottomNavbar = ({ role }) => {
  const links = role === 'admin' ? adminLinks : role === 'driver' ? driverLinks : userLinks

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 block md:hidden bg-white border-t border-slate-200 shadow-sm">
      <div className="flex justify-around px-2 py-1.5">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs font-medium transition ${
                isActive ? 'text-amber-600' : 'text-slate-500 hover:text-amber-500'
              }`
            }
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default BottomNavbar
