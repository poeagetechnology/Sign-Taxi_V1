import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Chrome, Eye, EyeOff, Lock, Mail } from 'lucide-react'
import toast from 'react-hot-toast'
import { loginUser, loginWithGoogle } from '../../services/authService'
import useAuthStore from '../../store/authStore'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'
import LogoWithTM from '../../components/common/LogoWithTM'

const Login = () => {
  const navigate = useNavigate()
  const { setUser, setUserData } = useAuthStore()
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.email) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.password) errs.password = 'Password is required'
    return errs
  }

  const redirectByRole = (userData) => {
    if (userData.role === 'admin') navigate('/admin/dashboard')
    else if (userData.role === 'driver') navigate('/driver/dashboard')
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
      const { user, userData } = await loginUser(form)
      setUser(user)
      setUserData(userData)
      toast.success(`Welcome back, ${userData.name}!`)
      redirectByRole(userData)
    } catch (err) {
      toast.error(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true)
    try {
      const { user, userData } = await loginWithGoogle()
      setUser(user)
      setUserData(userData)
      toast.success(`Welcome back, ${userData.name}!`)
      redirectByRole(userData)
    } catch (err) {
      toast.error(err.message || 'Google sign-in failed')
    } finally {
      setGoogleLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
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

      <div className="w-full max-w-md z-10">
        <div className="text-center mb-6">
          <LogoWithTM alt="Sign Taxi" align="center" imgClassName="w-auto h-14 object-contain select-none" />
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Welcome Back</h1>
          <p className="text-slate-500 text-sm font-medium mt-1">Sign in to continue your ride journey</p>
        </div>

        <div className="glass-card p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label={<span className="inline-flex items-center gap-2"><Mail size={14} className="text-amber-700" /> Email address</span>}
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              error={errors.email}
              autoComplete="email"
            />

            <div>
              <label className="text-sm font-medium text-slate-700 inline-flex items-center gap-2 mb-1.5">
                <Lock size={14} className="text-amber-700" /> Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                  className={`input-field pr-11 ${errors.password ? 'border-red-300 focus:ring-red-200 focus:border-red-300' : ''}`}
                  autoComplete="current-password"
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

            <Button type="submit" fullWidth loading={loading} size="lg">
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={googleLoading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              <Chrome size={18} className="text-amber-700" />
              {googleLoading ? 'Signing in...' : 'Continue with Google'}
            </button>
          </form>

          <p className="text-center text-sm text-slate-700 mt-6">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="text-amber-700 font-semibold hover:text-amber-800">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
