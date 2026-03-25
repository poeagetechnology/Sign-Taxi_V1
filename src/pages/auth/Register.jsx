import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Zap, Mail, Lock, User, Phone, ArrowLeft } from 'lucide-react'
import toast from 'react-hot-toast'
import { registerUser } from '../../services/authService'
import { createDriverProfile } from '../../services/driverService'
import useAuthStore from '../../store/authStore'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'

const Register = () => {
  const navigate = useNavigate()
  const { setUser, setUserData } = useAuthStore()
  const [role, setRole] = useState('user')
  const [adminCode, setAdminCode] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    name: '', email: '', phone: '', password: '', confirmPassword: '',
    vehicleMake: '', vehicleModel: '', vehiclePlate: '',
  })

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.phone) errs.phone = 'Phone is required'
    if (!form.password || form.password.length < 6) errs.password = 'Min 6 characters'
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match'
    if (role === 'driver') {
      if (!form.vehicleMake) errs.vehicleMake = 'Vehicle make is required'
      if (!form.vehicleModel) errs.vehicleModel = 'Vehicle model is required'
      if (!form.vehiclePlate) errs.vehiclePlate = 'License plate is required'
    }
    if (role === 'admin') {
      const expectedAdminCode = import.meta.env.VITE_ADMIN_CODE || 'secret-admin-code'
      if (!adminCode.trim()) errs.adminCode = 'Admin access code is required'
      else if (adminCode.trim() !== expectedAdminCode) errs.adminCode = 'Invalid admin access code'
    }
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    try {
      const { user, userData } = await registerUser({ email: form.email, password: form.password, name: form.name, role })
      await fetch('/api/placeholder', { method: 'HEAD' }).catch(() => {})
      // Update phone
      const { updateUserProfile } = await import('../../services/userService')
      await updateUserProfile(user.uid, { phone: form.phone })

      if (role === 'driver') {
        await createDriverProfile(user.uid, {
          name: form.name, phone: form.phone,
          vehicleMake: form.vehicleMake, vehicleModel: form.vehicleModel, vehiclePlate: form.vehiclePlate,
        })
      }

      setUser(user)
      setUserData({ ...userData, phone: form.phone })
      toast.success('Account created! Welcome to SignTaxi.')

      if (role === 'admin') navigate('/admin/dashboard')
      else if (role === 'driver') navigate('/driver/dashboard')
      else navigate('/user/home')
    } catch (err) {
      toast.error(err.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-slate-50 flex items-center justify-center p-4 py-10">
      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
      >
        <ArrowLeft size={20} />
        <span className="text-sm font-medium">Back</span>
      </button>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-500 rounded-2xl shadow-lg mb-4">
            <Zap size={28} className="text-white" fill="white" />
          </div>
          <h1 className="font-display text-3xl font-bold text-slate-900">Create Account</h1>
          <p className="text-slate-500 mt-1">Join SignTaxi today</p>
        </div>

        <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-8">
          {/* Role selector */}
          <div className="flex gap-2 mb-6 p-1 bg-slate-100 rounded-xl">
            {['user', 'driver', 'admin'].map(r => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all capitalize ${role === r ? 'bg-white text-amber-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {r === 'user' ? '🧑 Passenger' : r === 'driver' ? '🚗 Driver' : '🔑 Admin'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Full Name" placeholder="John Doe" value={form.name} onChange={set('name')} error={errors.name} prefix={<User size={15} />} />
            <Input label="Email" type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} error={errors.email} prefix={<Mail size={15} />} />
            <Input label="Phone Number" type="tel" placeholder="+1 555 000 0000" value={form.phone} onChange={set('phone')} error={errors.phone} prefix={<Phone size={15} />} />

            {role === 'driver' && (
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Vehicle Details</p>
                <div className="grid grid-cols-2 gap-3">
                  <Input label="Make" placeholder="Toyota" value={form.vehicleMake} onChange={set('vehicleMake')} error={errors.vehicleMake} />
                  <Input label="Model" placeholder="Camry" value={form.vehicleModel} onChange={set('vehicleModel')} error={errors.vehicleModel} />
                </div>
                <Input label="License Plate" placeholder="ABC-1234" value={form.vehiclePlate} onChange={set('vehiclePlate')} error={errors.vehiclePlate} />
              </div>
            )}

            {role === 'admin' && (
              <div className="py-2 border-t border-slate-100">
                <Input
                  label="Admin access code"
                  type="password"
                  placeholder="Enter admin secret"
                  value={adminCode}
                  onChange={(e) => setAdminCode(e.target.value)}
                  error={errors.adminCode}
                />
                <p className="text-xs text-slate-400">Enter the admin access code to register as an admin.</p>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">Password</label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-slate-400"><Lock size={15} /></span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Min 6 characters"
                  value={form.password}
                  onChange={set('password')}
                  className={`input-field pl-9 pr-10 ${errors.password ? 'border-red-300' : ''}`}
                />
                <button type="button" onClick={() => setShowPassword(v => !v)} className="absolute right-3 text-slate-400">
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
            </div>

            <Input label="Confirm Password" type="password" placeholder="Repeat password" value={form.confirmPassword} onChange={set('confirmPassword')} error={errors.confirmPassword} prefix={<Lock size={15} />} />

            <Button type="submit" fullWidth loading={loading} size="lg" className="mt-2">
              Create Account
            </Button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-5">
            Already have an account?{' '}
            <Link to="/login" className="text-amber-600 font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
