import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Regular User',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Sign Taxi completely transformed my daily commute. It\'s reliable, safe, and the drivers are incredibly professional. Highly recommended!',
      company: 'TechCorp Inc.',
    },
    {
      name: 'Michael Chen',
      role: 'Driver Partner',
      avatar: '👨‍💼',
      rating: 5,
      text: 'As a driver, I love the fair commission structure and reliable customer base. Sign Taxi treats us with respect and professionalism.',
      company: 'Self-Employed',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Frequent Traveler',
      avatar: '👩‍🦰',
      rating: 5,
      text: 'The 24/7 support and real-time tracking features give me peace of mind. Best taxi app I\'ve ever used!',
      company: 'Travel Enthusiast',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-1/3 w-96 h-96 bg-gradient-to-br from-amber-200/20 rounded-full blur-3xl -mr-48"></div>

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
            Loved by Our Community
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real stories from real users who trust Sign Taxi every day
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 text-center border border-blue-200/50">
            <p className="text-4xl font-bold text-blue-600 mb-2">4.9★</p>
            <p className="text-sm text-blue-600 font-medium">Average Rating</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8 text-center border border-amber-200/50">
            <p className="text-4xl font-bold text-amber-600 mb-2">50K+</p>
            <p className="text-sm text-amber-600 font-medium">Happy Users</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-8 text-center border border-green-200/50">
            <p className="text-4xl font-bold text-green-600 mb-2">1M+</p>
            <p className="text-sm text-green-600 font-medium">Rides Completed</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
