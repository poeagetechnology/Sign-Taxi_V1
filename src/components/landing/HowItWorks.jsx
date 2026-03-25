import React from 'react'
import { motion } from 'framer-motion'
import { Smartphone, MapPin, DollarSign, CheckCircle, Plus } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: 'Download App',
      description: 'Get the Sign Taxi app on iOS or Android in seconds.',
      number: '01',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: MapPin,
      title: 'Enter Location',
      description: 'Pick your current location and destination quickly.',
      number: '02',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: DollarSign,
      title: 'Confirm Ride',
      description: 'See instant pricing and confirm with one tap.',
      number: '03',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: CheckCircle,
      title: 'Enjoy Ride',
      description: 'Track your driver and enjoy a comfortable journey.',
      number: '04',
      color: 'from-purple-500 to-pink-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 -left-96 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-96 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Getting a ride is simple. Just 4 easy steps and you're on your way.
          </p>
        </motion.div>

        {/* Steps - Desktop View */}
        <motion.div
          className="hidden lg:grid grid-cols-4 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div key={index} variants={stepVariants} className="relative">
                {/* Step card */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300">
                  {/* Number Circle */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mb-6 mx-auto shadow-md`}>
                    <span className="text-white font-display text-2xl font-bold">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <Icon size={32} className="text-slate-400" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-slate-900 text-center mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2">
                    <Plus size={24} className="text-amber-500 rotate-0 font-bold" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Steps - Mobile View */}
        <motion.div
          className="lg:hidden space-y-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                variants={stepVariants}
                className="relative"
              >
                <div className="flex gap-6">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0">
                    <div className={`flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br ${step.color} shadow-lg`}>
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-3">
                    <h3 className="font-display text-2xl font-semibold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="ml-10 h-8 border-l-2 border-amber-200 my-4"></div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Testimonial section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-lg text-slate-700 mb-4 max-w-2xl mx-auto italic">
            "Sign Taxi has completely changed how I get around the city. It's reliable, safe, and the drivers are always professional. I can't imagine using anything else!"
          </p>
          <div>
            <p className="font-semibold text-slate-900">Sarah Johnson</p>
            <p className="text-sm text-slate-500">Regular User</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
