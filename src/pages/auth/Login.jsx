import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, ArrowLeft, Chrome } from 'lucide-react'
import toast from 'react-hot-toast'
import { loginUser, loginWithGoogle } from '../../services/authService'
import useAuthStore from '../../store/authStore'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'
import logoImage from '../../Logo/Sign Taxi.bf513dbcfde59f174016.png'

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    try {
      const { user, userData } = await loginUser(form)
      setUser(user)
      setUserData(userData)
      toast.success(`Welcome back, ${userData.name}!`)
      if (userData.role === 'admin') {
        navigate('/admin/dashboard')
      } else if (userData.role === 'driver') {
        navigate('/driver/dashboard')
      } else {
        navigate('/user/home')
      }
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
      if (userData.role === 'admin') {
        navigate('/admin/dashboard')
      } else if (userData.role === 'driver') {
        navigate('/driver/dashboard')
      } else {
        navigate('/user/home')
      }
    } catch (err) {
      toast.error(err.message || 'Google sign-in failed')
    } finally {
      setGoogleLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
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
          <h2 className="text-3xl font-black text-slate-900 mb-1">Welcome Back</h2>
          <p className="text-slate-500 text-sm font-medium">Sign in to your account</p>
        </div>

        {/* Premium Card */}
        <div className="bg-gradient-to-b from-white/98 to-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                <Mail size={16} className="text-amber-600" />
                Email Address
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                error={errors.email}
                autoComplete="email"
              />
              {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                <Lock size={16} className="text-amber-600" />
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition focus:outline-none font-medium ${
                    errors.password
                      ? 'border-red-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200'
                      : 'border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100'
                  }`}
                  autoComplete="current-password"
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

            {/* Sign In Button */}
            <Button
              type="submit"
              fullWidth
              loading={loading}
              size="lg"
              className="bg-gradient-to-r from-red-500 via-red-600 to-orange-500 hover:from-red-600 hover:via-red-700 hover:to-orange-600 text-white font-bold rounded-xl py-3.5 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 mt-8 active:translate-y-0"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>

            {/* Google Sign In Button */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={googleLoading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border-2 border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-slate-50 hover:to-white hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <Chrome size={20} className="text-red-500" />
              {googleLoading ? 'Signing in...' : 'Sign in with Google'}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">Or</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-slate-700">
              Don't have an account?{' '}
              <Link to="/register" className="text-amber-600 font-bold hover:text-amber-700 hover:underline transition">
                Create one
              </Link>
            </p>
          </form>

          {/* Footer Info */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500">
              {/* By signing in, you agree to our <span className="text-slate-700 font-medium">Terms & Conditions</span> */}
            </p>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 flex items-center justify-center gap-2 text-slate-600 text-xs font-medium">
          <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
          <span>Fast & Secure Login</span>
          <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Login
