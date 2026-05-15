import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Chrome, Eye, EyeOff, Lock, Mail, Phone, User } from 'lucide-react'
import toast from 'react-hot-toast'
import { registerUser, registerWithGoogle } from '../../services/authService'
import { createDriverProfile } from '../../services/driverService'
import useAuthStore from '../../store/authStore'
import Button from '../../components/common/Button'
import LogoWithTM from '../../components/common/LogoWithTM'

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
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    vehicleMake: '',
    vehicleModel: '',
    vehiclePlate: '',
  })

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

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

  const redirectByRole = (selectedRole) => {
    if (selectedRole === 'admin') navigate('/admin/dashboard')
    else if (selectedRole === 'driver') navigate('/driver/dashboard')
    else navigate('/user/home')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setLoading(true)
    try {
      const { user, userData } = await registerUser({
        email: form.email,
        password: form.password,
        name: form.name,
        role,
      })

      const { updateUserProfile } = await import('../../services/userService')
      await updateUserProfile(user.uid, { phone: form.phone })

      if (role === 'driver') {
        await createDriverProfile(user.uid, {
          name: form.name,
          phone: form.phone,
          vehicleMake: form.vehicleMake,
          vehicleModel: form.vehicleModel,
          vehiclePlate: form.vehiclePlate,
        })
      }

      setUser(user)
      setUserData({ ...userData, phone: form.phone })
      toast.success('Account created! Welcome to SignTaxi.')
      redirectByRole(role)
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
      redirectByRole(role)
    } catch (err) {
      toast.error(err.message || 'Google registration failed')
    } finally {
      setGoogleLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 py-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-amber-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[26rem] h-[26rem] bg-amber-600/10 rounded-full blur-3xl" />

      <button
        onClick={() => navigate('/')}
        aria-label="Back to home"
        className="absolute z-20 top-4 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 text-slate-700 bg-white/85 hover:bg-white border border-slate-200 px-3 py-2 rounded-xl transition shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
      >
        <ArrowLeft size={18} />
        <span className="hidden sm:inline text-sm font-semibold">Back</span>
      </button>

      <div className="w-full max-w-lg z-10">
        <div className="text-center mb-6">
          <LogoWithTM alt="Sign Taxi" align="center" imgClassName="w-auto h-14 object-contain select-none" />
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Create Your Account</h1>
          <p className="text-slate-500 text-sm font-medium mt-1">Join as rider, driver, or admin</p>
        </div>

        <div className="glass-card p-6 sm:p-8">
          <div className="flex gap-2 mb-6 p-1.5 bg-slate-100 rounded-xl border border-slate-200">
            {['user', 'driver', 'admin'].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`flex-1 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all capitalize ${
                  role === r ? 'bg-amber-600 text-white shadow-md' : 'text-slate-600 hover:bg-white'
                }`}
              >
                {r === 'user' ? 'Rider' : r}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Field
              icon={User}
              label="Full Name"
              placeholder="John Doe"
              value={form.name}
              onChange={set('name')}
              error={errors.name}
            />
            <Field
              icon={Mail}
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={set('email')}
              error={errors.email}
            />
            <Field
              icon={Phone}
              label="Phone"
              type="tel"
              placeholder="+91"
              value={form.phone}
              onChange={set('phone')}
              error={errors.phone}
            />

            {role === 'driver' && (
              <div className="space-y-3 pt-2 border-t border-slate-200">
                <p className="text-xs uppercase tracking-wide font-semibold text-amber-700">Vehicle Information</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <SimpleField
                    placeholder="Vehicle make"
                    value={form.vehicleMake}
                    onChange={set('vehicleMake')}
                    error={errors.vehicleMake}
                  />
                  <SimpleField
                    placeholder="Vehicle model"
                    value={form.vehicleModel}
                    onChange={set('vehicleModel')}
                    error={errors.vehicleModel}
                  />
                </div>
                <SimpleField
                  placeholder="License plate"
                  value={form.vehiclePlate}
                  onChange={set('vehiclePlate')}
                  error={errors.vehiclePlate}
                />
              </div>
            )}

            {role === 'admin' && (
              <div className="pt-2 border-t border-slate-200">
                <Field
                  icon={Lock}
                  label="Admin Access Code"
                  type="password"
                  placeholder="Enter admin secret"
                  value={adminCode}
                  onChange={(e) => setAdminCode(e.target.value)}
                  error={errors.adminCode}
                />
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-slate-700 inline-flex items-center gap-2 mb-1.5">
                <Lock size={14} className="text-amber-700" /> Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Min 6 characters"
                  value={form.password}
                  onChange={set('password')}
                  className={`input-field pr-11 ${errors.password ? 'border-red-300 focus:ring-red-200 focus:border-red-300' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-amber-700 transition"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>

            <SimpleField
              placeholder="Confirm password"
              type="password"
              value={form.confirmPassword}
              onChange={set('confirmPassword')}
              error={errors.confirmPassword}
            />

            <Button type="submit" fullWidth loading={loading} size="lg">
              {loading ? 'Creating account...' : 'Create Account'}
            </Button>

            <button
              type="button"
              onClick={handleGoogleSignUp}
              disabled={googleLoading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              <Chrome size={18} className="text-amber-700" />
              {googleLoading ? 'Signing up...' : 'Continue with Google'}
            </button>
          </form>

          <p className="text-center text-sm text-slate-700 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-amber-700 font-semibold hover:text-amber-800">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

function Field({ icon: Icon, label, error, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700 inline-flex items-center gap-2 mb-1.5">
        <Icon size={14} className="text-amber-700" /> {label}
      </label>
      <input
        {...props}
        className={`input-field ${error ? 'border-red-300 focus:ring-red-200 focus:border-red-300' : ''}`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}

function SimpleField({ error, ...props }) {
  return (
    <div>
      <input
        {...props}
        className={`input-field ${error ? 'border-red-300 focus:ring-red-200 focus:border-red-300' : ''}`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}

export default Register
