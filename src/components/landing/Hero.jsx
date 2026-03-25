import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Users, Zap } from 'lucide-react'
import Button from '../common/Button'

const Hero = () => {
  const navigate = useNavigate()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="relative min-h-screen pt-24 md:pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-slate-50">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-amber-200"
            >
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-amber-700">🚀 Fast & Reliable</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6"
            >
              Book Rides in{' '}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Seconds
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl leading-relaxed"
            >
              Fast, safe, and reliable taxi service at your fingertips. Get from A to B with confidence and comfort.
            </motion.p>

            {/* Features List */}
            <motion.div variants={itemVariants} className="space-y-3 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-slate-700 font-medium">Real-time tracking and updates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-slate-700 font-medium">Verified and professional drivers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-slate-700 font-medium">Transparent pricing with no hidden fees</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => navigate('/register')}
                size="lg"
                className="group"
              >
                <span>Get Started</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </Button>
              <Button
                onClick={() => navigate('/register', { state: { userType: 'driver' } })}
                variant="outlined"
                size="lg"
              >
                Become a Driver
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square">
              {/* Main image container */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-3xl"></div>
              
              {/* Decorative cards */}
              <motion.div
                className="absolute top-10 right-10 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Zap size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Avg wait time</p>
                    <p className="text-2xl font-bold text-slate-900">2 min</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 -left-5 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Users size={24} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Active users</p>
                    <p className="text-2xl font-bold text-slate-900">50K+</p>
                  </div>
                </div>
              </motion.div>

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl"
                >
                  <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-6 pt-20 border-t border-slate-200/50 mt-16"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-slate-900">50K+</p>
            <p className="text-sm text-slate-600 mt-1">Happy Users</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-slate-900">1M+</p>
            <p className="text-sm text-slate-600 mt-1">Rides Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-slate-900">24/7</p>
            <p className="text-sm text-slate-600 mt-1">Always Available</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
