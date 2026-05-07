import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import PublicLayout from '../components/layout/PublicLayout';
import car1 from '../Logo/car1.51065db376274ec8c8ec.png';


const Cities = () => {
  const cities = [
   "Trichy", "Madurai", "Erode", "Hosur", "Thanjavur", "Dindigul", "Salem", "Tirupur",
    "Karur", "Pollachi", "Vellore", "Tirunelveli", "Mettupalayam", "Villupuram"
  ];

  return (
    <PublicLayout>
      {/* Cities Section */}
      <div className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-3xl overflow-hidden relative">
            <div className="p-6 sm:p-10 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left - Cities List */}
                <div className="lg:col-span-7">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-10">
                    Cities
                  </h1>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-5 text-sm sm:text-lg">
                    {cities.map((city, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className="hover:text-amber-200 transition-colors cursor-pointer font-semibold"
                      >
                        {city}
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-8 sm:mt-12 bg-white text-slate-900 font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full flex items-center gap-2.5 shadow-xl"
                  >
                    Explore all Cities
                    <ArrowRight size={20} />
                  </motion.button>
                </div>

                {/* Right - White Car */}
                <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="relative"
                  >
                    <img
                      src={car1}
                      alt="SignTaxi Car"
                      className="w-full max-w-xs sm:max-w-md lg:max-w-lg drop-shadow-2xl"
                    />
                    {/* Yellow accent curve */}
                    <div className="hidden lg:block absolute -bottom-6 -right-10 w-80 h-20 bg-amber-300/90 rounded-full -rotate-12 pointer-events-none" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons (desktop only) */}
      <div className="fixed bottom-8 right-8 hidden md:flex flex-col gap-3 z-40">
        <motion.button
          whileHover={{ scale: 1.08 }}
          className="w-12 h-12 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center text-white shadow-xl text-lg"
          title="Scroll Down"
        >
          ↓
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.08 }}
          className="w-12 h-12 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center text-white shadow-xl"
          title="Contact Us"
        >
          <MessageSquare size={20} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.08 }}
          className="w-12 h-12 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center text-white shadow-xl text-lg"
          title="Book a Cab"
        >
          🚕
        </motion.button>
      </div>
    </PublicLayout>
  );
};

export default Cities;