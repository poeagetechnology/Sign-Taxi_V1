import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import PublicLayout from '../components/layout/PublicLayout';
import car1 from '../Logo/car1.51065db376274ec8c8ec.png';

const BookATrip = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);
  
  const tripTypes = [
    { name: "Oneway Trip", icon: "→", desc: "Point A to Point B" },
    { name: "Round Trip", icon: "⟲", desc: "Return Journey" },
    { name: "Hourly Rental", icon: "⏱", desc: "Book by Hours" },
    { name: "Airport Taxi", icon: "✈", desc: "Airport Transfer" },
    { name: "Bulk Booking", icon: "👥", desc: "Group Travel" },
    { name: "Corporate Travel", icon: "🏢", desc: "Business Rides" },
    { name: "Outstation Trip", icon: "🛣", desc: "City to City" },
    { name: "City Tour", icon: "🗺", desc: "Explore & Sightseeing" }
  ];

  return (
    <PublicLayout>
      {/* Book a Trip Section */}
      <div className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-rose-600 to-orange-500 text-white rounded-3xl overflow-hidden relative">
            <div className="p-6 sm:p-10 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 items-center">
                {/* Left - Trip Types List */}
                <div className="lg:col-span-7">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-10">
                    Book a Trip
                  </h1>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-x-8 md:gap-y-6">
                    {tripTypes.map((trip, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        onClick={() => setSelectedTrip(trip.name)}
                        className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl cursor-pointer transition-all transform hover:scale-[1.03] ${
                          selectedTrip === trip.name
                            ? 'bg-white text-slate-900'
                            : 'hover:bg-white/15'
                        }`}
                      >
                        <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">{trip.icon}</div>
                        <div className="font-bold text-xs sm:text-sm md:text-lg leading-snug">{trip.name}</div>
                        <div className="text-[11px] sm:text-xs md:text-sm opacity-90">{trip.desc}</div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 sm:mt-10 bg-white text-slate-900 font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3.5 md:py-4 rounded-full flex items-center gap-2.5 shadow-xl"
                  >
                    Book Now
                    <ArrowRight size={20} className="md:w-6 md:h-6" />
                  </motion.button>
                </div>

                {/* Right - White Car */}
                <div className="hidden md:flex lg:col-span-5 relative justify-center lg:justify-end">
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="relative"
                  >
                    <img
                      src={car1}
                      alt="SignTaxi Car"
                      className="w-full max-w-xs md:max-w-md lg:max-w-lg drop-shadow-2xl"
                    />
                    {/* Yellow accent curve */}
                    <div className="hidden lg:block absolute -bottom-6 -right-10 w-80 h-20 bg-white/25 rounded-full -rotate-12 pointer-events-none" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trip Details Section */}
      <div className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: 1,
                title: "Select Your Trip",
                desc: "Choose from various trip options that suit your needs"
                
              },
              {
                step: 2,
                title: "Enter Details",
                desc: "Provide pickup, destination, date and contact details"
                
              },
              {
                step: 3,
                title: "Confirm & Enjoy",
                desc: "Book your ride and enjoy a comfortable journey"
                
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-3 md:mb-4">{step.step}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Buttons (Right Side) */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 flex flex-col gap-3 z-40">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 md:w-14 md:h-14 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center text-white shadow-xl text-lg md:text-xl"
          title="Scroll Down"
        >
          ↓
        </motion.button>
        <motion.a
          href="tel:+918300399599"
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 md:w-14 md:h-14 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center text-white shadow-xl"
          title="Call Us"
        >
          <Phone size={20} className="md:w-6 md:h-6" />
        </motion.a>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 md:w-14 md:h-14 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center text-white shadow-xl text-lg md:text-xl"
          title="Book a Cab"
        >
          🚕
        </motion.button>
      </div>
    </PublicLayout>
  );
};

export default BookATrip;
