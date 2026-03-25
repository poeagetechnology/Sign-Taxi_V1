import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from '../common/Button'

const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 font-display text-2xl font-bold text-amber-600 hover:text-amber-700 transition group"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z"/>
                </svg>
              </div>
              <span>Sign Taxi</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleScroll('features')}
              className="text-slate-700 font-medium hover:text-amber-600 transition relative group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleScroll('how-it-works')}
              className="text-slate-700 font-medium hover:text-amber-600 transition relative group"
            >
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <div className="h-6 w-0.5 bg-slate-200"></div>
            <Button
              onClick={() => navigate('/login')}
              variant="outlined"
              size="sm"
            >
              Sign In
            </Button>
            <Button
              onClick={() => navigate('/register')}
              size="sm"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-amber-600 transition p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200/50 py-4 space-y-3 bg-white/50 backdrop-blur-sm">
            <button
              onClick={() => handleScroll('features')}
              className="block w-full text-left px-4 py-3 text-slate-700 font-medium hover:bg-amber-50 rounded-lg transition"
            >
              📊 Features
            </button>
            <button
              onClick={() => handleScroll('how-it-works')}
              className="block w-full text-left px-4 py-3 text-slate-700 font-medium hover:bg-amber-50 rounded-lg transition"
            >
              🚀 How It Works
            </button>
            <div className="px-4 py-2 space-y-2">
              <Button
                onClick={() => navigate('/login')}
                variant="outlined"
                size="sm"
                className="w-full"
              >
                Sign In
              </Button>
              <Button
                onClick={() => navigate('/register')}
                size="sm"
                className="w-full"
              >
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default LandingNavbar
