import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, MapPin, Clock } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Users,
      label: 'Active Users',
      value: '50K+',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: MapPin,
      label: 'Cities Covered',
      value: '25+',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
    },
    {
      icon: TrendingUp,
      label: 'Rides Completed',
      value: '1M+',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Clock,
      label: 'Avg. Wait Time',
      value: '2 min',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className={`${stat.bgColor} rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                  <Icon size={28} className="text-white" />
                </div>
                <p className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</p>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
