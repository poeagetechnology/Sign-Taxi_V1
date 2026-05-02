import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowLeft, Chrome } from 'lucide-react'
import toast from 'react-hot-toast'
import { registerUser, registerWithGoogle } from '../../services/authService'
import { createDriverProfile } from '../../services/driverService'
import useAuthStore from '../../store/authStore'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'
import logoImage from '../../Logo/Sign Taxi.bf513dbcfde59f174016.png'

const Register = () => {
  const navigate = useNavigate()
  const { setUser, setUserData } = useAuthStore()
  const [role, setRole] = useState('user')
  const [adminCode, setAdminCode] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
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

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true)
    try {
      const { user, userData } = await registerWithGoogle(role)
      setUser(user)
      setUserData(userData)
      toast.success('Account created! Welcome to SignTaxi.')

      if (role === 'admin') navigate('/admin/dashboard')
      else if (role === 'driver') navigate('/driver/dashboard')
      else navigate('/user/home')
    } catch (err) {
      toast.error(err.message || 'Google registration failed')
    } finally {
      setGoogleLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-slate-50 flex items-center justify-center p-4 py-10 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full opacity-5 blur-3xl"></div>

      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 flex items-center gap-2 text-slate-600 hover:bg-slate-100 px-4 py-2 rounded-full transition backdrop-blur-sm"
      >
        <ArrowLeft size={20} />
        <span className="text-sm font-medium">Back</span>
      </button>

      <div className="w-full max-w-md z-10">
        {/* Premium Logo Section */}
        <div className="text-center mb-8">
          <div>
            <img src={logoImage} alt="Sign Taxi" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-1">Join Sign Taxi</h1>
          <p className="text-slate-500 text-sm font-medium">Create your account to get started</p>
        </div>

        {/* Premium Card */}
        <div className="bg-gradient-to-b from-white/98 to-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-10">
          {/* Premium Role Selector */}
          <div className="flex gap-2 mb-8 p-2 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl border border-slate-200">
            {['user', 'driver', 'admin'].map(r => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 capitalize transform ${
                  role === r
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-md'
                }`}
              >
                {r === 'user' ? '👤 Rider' : r === 'driver' ? '🚗 Driver' : '👑 Admin'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                <User size={16} className="text-amber-600" />
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={set('name')}
                className={`w-full px-4 py-3 rounded-xl border-2 transition focus:outline-none font-medium ${
                  errors.name
                    ? 'border-red-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200'
                    : 'border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100'
                }`}
              />
              {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                <Mail size={16} className="text-amber-600" />
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={set('email')}
                className={`w-full px-4 py-3 rounded-xl border-2 transition focus:outline-none font-medium ${
                  errors.email
                    ? 'border-red-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200'
                    : 'border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100'
                }`}
              />
              {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                <Phone size={16} className="text-amber-600" />
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 555 000 0000"
                value={form.phone}
                onChange={set('phone')}
                className={`w-full px-4 py-3 rounded-xl border-2 transition focus:outline-none font-medium ${
                  errors.phone
                    ? 'border-red-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200'
                    : 'border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100'
                }`}
              />
              {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone}</p>}
            </div>

            {/* Driver Vehicle Details */}
            {role === 'driver' && (
              <div className="space-y-4 pt-4 border-t-2 border-slate-100">
                <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">Vehicle Information</p>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Make (e.g., Toyota)"
                    value={form.vehicleMake}
                    onChange={set('vehicleMake')}
                    className={`w-full px-3 py-2.5 rounded-lg border-2 text-sm transition focus:outline-none ${
                      errors.vehicleMake
                        ? 'border-red-300 focus:border-amber-500'
                        : 'border-slate-200 focus:border-amber-500'
                    }`}
                  />
                  <input
                    type="text"
                    placeholder="Model"
                    value={form.vehicleModel}
                    onChange={set('vehicleModel')}
                    className={`w-full px-3 py-2.5 rounded-lg border-2 text-sm transition focus:outline-none ${
                      errors.vehicleModel
                        ? 'border-red-300 focus:border-amber-500'
                        : 'border-slate-200 focus:border-amber-500'
                    }`}
                  />
                </div>
                <input
                  type="text"
                  placeholder="License Plate"
                  value={form.vehiclePlate}
                  onChange={set('vehiclePlate')}
                  className={`w-full px-3 py-2.5 rounded-lg border-2 text-sm transition focus:outline-none ${
                    errors.vehiclePlate
                      ? 'border-red-300 focus:border-amber-500'
                      : 'border-slate-200 focus:border-amber-500'
                  }`}
                />
              </div>
            )}

            {/* Admin Code */}
            {role === 'admin' && (
              <div className="space-y-2 pt-4 border-t-2 border-slate-100">
                <label className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <Lock size={16} className="text-amber-600" />
                  Admin Access Code
                </label>
                <input
                  type="password"
                  placeholder="Enter admin secret"
                  value={adminCode}
                  onChange={(e) => setAdminCode(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition focus:outline-none font-medium ${
                    errors.adminCode
                      ? 'border-red-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200'
                      : 'border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100'
                  }`}
                />
                {errors.adminCode && <p className="text-xs text-red-500 font-medium">{errors.adminCode}</p>}
              </div>
            )}

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                <Lock size={16} className="text-amber-600" />
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Min 6 characters"
                  value={form.password}
                  onChange={set('password')}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition focus:outline-none font-medium ${
                    errors.password
                      ? 'border-red-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200'
                      : 'border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-4 text-slate-500 hover:text-amber-600 transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500 font-medium">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                <Lock size={16} className="text-amber-600" />
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Repeat password"
                value={form.confirmPassword}
                onChange={set('confirmPassword')}
                className={`w-full px-4 py-3 rounded-xl border-2 transition focus:outline-none font-medium ${
                  errors.confirmPassword
                    ? 'border-red-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200'
                    : 'border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100'
                }`}
              />
              {errors.confirmPassword && <p className="text-xs text-red-500 font-medium">{errors.confirmPassword}</p>}
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-red-500 via-red-600 to-orange-500 hover:from-red-600 hover:via-red-700 hover:to-orange-600 text-white font-bold rounded-xl py-3.5 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 mt-8 active:translate-y-0"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>

            {/* Google Sign Up Button */}
            <button
              type="button"
              onClick={handleGoogleSignUp}
              disabled={googleLoading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border-2 border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-slate-50 hover:to-white hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <Chrome size={20} className="text-red-500" />
              {googleLoading ? 'Signing up...' : 'Sign up with Google'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-500">Already registered?</span>
            </div>
          </div>

          {/* Sign In Link */}
          <p className="text-center text-sm text-slate-700">
            <Link to="/login" className="text-amber-600 font-bold hover:text-amber-700 hover:underline transition">
              Sign in to existing account
            </Link>
          </p>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 flex items-center justify-center gap-2 text-slate-600 text-xs font-medium">
          <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
          <span>Secure Registration</span>
          <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Register
