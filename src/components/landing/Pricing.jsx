import React from 'react'
import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import Button from '../common/Button'

const Pricing = () => {
  const plans = [
    {
      name: 'Standard',
      description: 'For casual riders',
      icon: '🚗',
      price: 'No Fee',
      features: [
        'Standard pickup & drop-off',
        'Real-time tracking',
        'Multiple payment options',
        'Driver ratings',
        'Trip history',
      ],
      highlighted: false,
    },
    {
      name: 'Premium Plus',
      description: 'For frequent travelers',
      icon: '⭐',
      price: '$9.99/mo',
      features: [
        'All Standard features',
        'Priority booking',
        'Premium driver selection',
        '10% discount on rides',
        '24/7 priority support',
        'Monthly travel reports',
      ],
      highlighted: true,
    },
    {
      name: 'Business',
      description: 'For corporate needs',
      icon: '💼',
      price: 'Custom',
      features: [
        'All Premium features',
        'Corporate account',
        'Expense reporting',
        'Bulk discounts',
        'Dedicated support',
        'API access',
      ],
      highlighted: false,
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
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -mr-48"></div>
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -ml-48"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Choose a plan that works for you. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-amber-500 to-orange-600 shadow-2xl lg:scale-105'
                  : 'bg-slate-800/50 border border-slate-700 hover:border-slate-600'
              }`}
            >
              {/* Featured badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-300 to-yellow-100 text-slate-900 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                  <Zap size={16} />
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className="text-5xl mb-4">{plan.icon}</div>

              {/* Plan name */}
              <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/90' : 'text-slate-400'}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <p className="text-4xl font-bold">{plan.price}</p>
              </div>

              {/* CTA Button */}
              <Button
                variant={plan.highlighted ? 'primary' : 'outlined'}
                size="lg"
                className="w-full mb-8"
              >
                Get Started
              </Button>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <Check size={20} className={`flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-white' : 'text-green-400'}`} />
                    <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-slate-300'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-sm">
            All subscriptions include a 7-day free trial. No credit card required to start.
            <br />
            <a href="#" className="text-amber-400 hover:text-amber-300 font-semibold mt-2 inline-block">
              Compare all features →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
