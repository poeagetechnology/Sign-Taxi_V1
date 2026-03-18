import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Zap, ArrowLeft } from 'lucide-react'
import Button from '../components/common/Button'
import useAuthStore from '../store/authStore'

const NotFound = () => {
  const navigate = useNavigate()
  const { userData } = useAuthStore()

  const handleHome = () => {
    if (!userData) { navigate('/login'); return }
    if (userData.role === 'admin') navigate('/admin/dashboard')
    else if (userData.role === 'driver') navigate('/driver/dashboard')
    else navigate('/user/home')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-slate-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-2xl shadow-lg mb-6">
          <Zap size={32} className="text-white" fill="white" />
        </div>
        <h1 className="font-display text-8xl font-bold text-slate-900 leading-none">404</h1>
        <p className="font-display text-2xl font-semibold text-slate-700 mt-3">Page Not Found</p>
        <p className="text-slate-500 mt-2 text-sm">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button onClick={handleHome} className="mt-8" size="lg">
          <ArrowLeft size={18} />
          Back to Home
        </Button>
      </div>
    </div>
  )
}

export default NotFound
