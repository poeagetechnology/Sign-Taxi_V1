import React from 'react';
import { motion } from 'framer-motion';
import PublicLayout from '../components/layout/PublicLayout';
import { Route, Calendar, Sparkles } from 'lucide-react';

const Corporate = () => {
  const features = [
    {
      icon: Route,
      title: "Tailored Route",
      desc: "Customized routes as per your business needs"
    },
    {
      icon: Calendar,
      title: "Personalized Service Plans",
      desc: "Flexible plans designed for your organization"
    },
    {
      icon: Sparkles,
      title: "Special Event Services",
      desc: "Premium support for conferences & events"
    }
  ];

  const brands = [
    "ACC cement", "ASTRAL", "AXIS BANK", "Baker Hughes",
    "CASAGRAND", "Versa Drives", "EMERALD", "EVEREST", "GEM HOSPITAL"
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <div className="relative min-h-[22rem] sm:min-h-[28rem] md:min-h-[34rem] lg:min-h-[38rem] bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297e?w=2000')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/95 via-amber-600/70 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-none mb-3 sm:mb-6">
                Corporate
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-white/90">
                Premium business travel solutions for teams, events, and daily commutes.
              </p>
            </div>
          </div>
        </div>

        {/* Man walking in background (right side) */}
        {/* Image removed */}
      </div>

      {/* Enroll Button */}
      <div className="flex justify-center -mt-7 sm:-mt-8 relative z-10 px-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 sm:px-12 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-lg shadow-xl"
        >
          Enroll with us
        </motion.button>
      </div>

      {/* Corporate Customization */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-amber-700 mb-4 sm:mb-6">
            Corporate Customization
          </h2>
          
          <div className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed space-y-4 sm:space-y-6">
            <p>
              Your business travel needs to be more than a regular ride. It should reflect your professionalism, 
              reliable, professional, and on-time rides for all your business needs.
            </p>
            <p>
              With our flexible choices, you can choose your vehicle, plan routes, and set your schedule according to your need. 
              We have professional drivers who are highly skilled and trained to provide comfortable rides for the customers.
            </p>
            <p className="font-medium">
              You focus on what's important and we'll take care of the rest.
            </p>
          </div>

          <div className="mt-10 sm:mt-14">
            <h3 className="text-lg sm:text-2xl font-bold mb-6 sm:mb-10 text-slate-900">
              SignTaxi offers flexible plans to accommodate<br />
              the unique needs of institutions and organizations.
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="text-center group"
                >
                  <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-amber-50 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all">
                    <feature.icon size={40} />
                  </div>
                  <h4 className="font-bold text-base sm:text-xl mb-2 sm:mb-3 text-slate-900">{feature.title}</h4>
                  <p className="text-slate-600 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Privacy */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pb-10 sm:pb-16 px-4">
        <button className="border border-gray-300 hover:border-[#ff914c] px-8 py-3 rounded-full font-medium transition">
          Terms and Conditions
        </button>
        <button className="border border-gray-300 hover:border-[#ff914c] px-8 py-3 rounded-full font-medium transition">
          Privacy Policy
        </button>
      </div>

      {/* Brands Who Trust Us */}
      <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-slate-900">
            Brands <span className="text-amber-700">who trust us</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 sm:gap-x-14 gap-y-8 sm:gap-y-12 items-center justify-items-center opacity-80">
            {[
              "ACC cement", "ASTRAL", "AXIS BANK", "Baker Hughes", 
              "CASAGRAND", "Versa Drives", "EMERALD", "EVEREST", "GEM HOSPITAL"
            ].map((brand, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="text-sm sm:text-lg font-bold text-slate-700 tracking-wide text-center"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Corporate;