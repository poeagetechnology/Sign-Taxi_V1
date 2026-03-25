import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Zap, Lock, Headphones, Award, Leaf } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Real-Time Tracking',
      description: 'Track your driver live with GPS and get estimated arrival times.',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'Book a ride in seconds. Quick, easy, and zero hassle always.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description: 'Multiple payment options with bank-level encryption security.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for your peace of mind.',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: Award,
      title: 'Verified Drivers',
      description: 'All drivers are verified and rated by our community.',
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50',
      iconColor: 'text-rose-600',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Carbon-neutral rides with our green fleet options.',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl -ml-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Sign Taxi?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience the future of urban mobility with our innovative features designed for your comfort and safety
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon size={28} className={feature.iconColor} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Decorative line */}
                  <div className="w-0 h-1 bg-gradient-to-r from-amber-500 to-orange-600 group-hover:w-8 transition-all duration-300"></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
