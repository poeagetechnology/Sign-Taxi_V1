import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Download, Menu, X, Sparkles } from 'lucide-react'
import LogoWithTM from '../common/LogoWithTM'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/corporate', label: 'Corporate' },
  { to: '/cabs', label: 'Fleet' },
  { to: '/book-trip', label: 'Book Trip' },
]

export default function PublicNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
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
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={[
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-amber-100/80 shadow-lg shadow-amber-100/40'
          : 'bg-slate-100/75 backdrop-blur border-transparent',
      ].join(' ')}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3.5 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <LogoWithTM imgClassName="h-9 md:h-10 object-contain" tmClassName="text-amber-600" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 ml-6">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                [
                  'text-sm font-semibold transition-colors relative',
                  isActive ? 'text-amber-700' : 'text-slate-700 hover:text-amber-700',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto hidden lg:flex items-center gap-2">
          <button onClick={() => navigate('/login')} className="btn-secondary">
            Sign In
          </button>
          <button
            type="button"
            className="btn-primary flex items-center gap-2"
            onClick={() => navigate('/book-trip')}
          >
            <Download size={17} />
            Get App
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden ml-auto p-2 rounded-xl hover:bg-white transition-colors border border-slate-200"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} className="text-slate-700" /> : <Menu size={22} className="text-slate-700" />}
        </button>
      </div>

      <div className={['lg:hidden overflow-hidden transition-all duration-300', mobileOpen ? 'max-h-[420px] border-t border-slate-200' : 'max-h-0'].join(' ')}>
        <div className="bg-white px-4 sm:px-6 py-4 flex flex-col gap-2">
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

          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileOpen(false)
                navigate('/login')
              }}
              className="btn-secondary w-full justify-center"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false)
                navigate('/book-trip')
              }}
              className="btn-primary w-full justify-center flex items-center gap-2"
            >
              <Sparkles size={16} />
              Book Premium Ride
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
