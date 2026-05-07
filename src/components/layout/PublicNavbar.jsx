import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Download, Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/corporate', label: 'Corporate' },
  { to: '/cabs', label: 'Cabs' },
  { to: '/book-trip', label: 'Book a Trip' },
]

export default function PublicNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={[
        'sticky top-0 z-50 border-b border-slate-200/70',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white',
      ].join(' ')}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3.5 flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <span className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center shadow-sm">
            <Zap size={18} className="text-white" fill="white" />
          </span>
          <span className="font-display font-extrabold text-slate-900 tracking-tight truncate">
            SignTaxi
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 ml-6">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                [
                  'text-sm font-semibold transition-colors',
                  isActive ? 'text-amber-700' : 'text-slate-700 hover:text-amber-700',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto hidden lg:flex items-center gap-2">
          <button
            onClick={() => navigate('/login')}
            className="btn-secondary"
          >
            Sign In
          </button>
          <button
            type="button"
            className="btn-primary flex items-center gap-2"
          >
            <Download size={18} />
            Download App
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden ml-auto p-2 rounded-xl hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} className="text-slate-700" /> : <Menu size={22} className="text-slate-700" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={['lg:hidden', mobileOpen ? 'block' : 'hidden'].join(' ')}>
        <div className="border-t border-slate-200/70 bg-white">
          <div className="px-4 sm:px-6 py-4 flex flex-col gap-2">
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  [
                    'px-3 py-2.5 rounded-xl font-semibold text-sm transition-colors',
                    isActive ? 'bg-amber-50 text-amber-800' : 'text-slate-700 hover:bg-slate-50',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileOpen(false)
                  navigate('/login')
                }}
                className="btn-secondary w-full justify-center"
              >
                Sign In
              </button>
              <button type="button" className="btn-primary w-full justify-center flex items-center gap-2">
                <Download size={18} />
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

