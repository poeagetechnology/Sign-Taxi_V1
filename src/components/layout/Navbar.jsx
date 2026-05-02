import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, Bell, Zap } from 'lucide-react'
import useAuthStore from '../../store/authStore'
import Avatar from '../common/Avatar'

const Navbar = ({ onMenuClick, title = '' }) => {
  const { userData } = useAuthStore()
  const navigate = useNavigate()

  const profilePath =
    userData?.role === 'admin'
      ? '/admin/dashboard'
      : userData?.role === 'driver'
      ? '/driver/profile'
      : '/user/profile'

  return (
    <header className="md:hidden sticky top-0 z-30 bg-white border-b border-slate-100 px-4 py-3 flex items-center gap-3">
      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
      >
        <Menu size={20} className="text-slate-700" />
      </button>

      <div className="flex items-center gap-2 flex-1">
        <div className="w-7 h-7 bg-amber-500 rounded-lg flex items-center justify-center">
          <Zap size={14} className="text-white" fill="white" />
        </div>
        <span className="font-display font-bold text-slate-900">SignTaxi</span>
        {title && <span className="text-slate-400 text-sm ml-1">/ {title}</span>}
      </div>

      <button
        onClick={() => navigate(profilePath)}
        className="ml-auto"
      >
        <Avatar name={userData?.name} photoURL={userData?.photoURL} size="sm" />
      </button>
    </header>
  )
}

export default Navbar
