import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

import logoImage from '../Logo/Sign Taxi.bf513dbcfde59f174016.png';
import car1 from '../Logo/car1.51065db376274ec8c8ec.png';
import taxiOutlineGraphic from '../Logo/red-taxi-outline-city-graphic.webp';


const Cities = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const cities = [
   "Trichy", "Madurai", "Erode", "Hosur", "Thanjavur", "Dindigul", "Salem", "Tirupur",
    "Karur", "Pollachi", "Vellore", "Tirunelveli", "Mettupalayam", "Villupuram"
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="SignTaxi" className="h-10" />
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-[#ff914c] transition-colors">Home</Link>
            <Link to="/about" className="hover:text-[#ff914c] transition-colors">About Us</Link>
            <Link to="/corporate" className="hover:text-[#ff914c] transition-colors">Corporate</Link>
            <Link to="/cities" className="text-[#ff914c] font-semibold">Cabs</Link>
            <a href="/book-trip" className="hover:text-[#ff914c] transition-colors">Book a Trip</a>
            <a href="#" className="hover:text-[#ff914c] transition-colors">Become a Partner</a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/login')} className="hidden md:block bg-gradient-to-r from-[#ff5e1a] to-[#ff914c] text-white px-6 py-2.5 rounded-full font-semibold text-sm">Sign In</button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="hidden md:block bg-yellow-400 hover:bg-yellow-300 text-gray-800 px-6 py-2.5 rounded-full font-semibold text-sm"
            >
              Download App
            </motion.button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-3xl text-gray-800">
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-6 py-4 space-y-3 flex flex-col">
              <Link to="/" className="block py-2 hover:text-[#ff914c] transition-colors font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link to="/about" className="block py-2 hover:text-[#ff914c] transition-colors font-medium" onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link to="/corporate" className="block py-2 hover:text-[#ff914c] transition-colors font-medium" onClick={() => setMobileOpen(false)}>Corporate</Link>
              <Link to="/cities" className="block py-2 text-[#ff914c] font-semibold" onClick={() => setMobileOpen(false)}>Cabs</Link>
              <a href="/book-trip" className="block py-2 hover:text-[#ff914c] transition-colors font-medium">Book a Trip</a>
              <a href="#" className="block py-2 hover:text-[#ff914c] transition-colors font-medium">Become a Partner</a>
              <button onClick={() => {navigate('/login'); setMobileOpen(false);}} className="w-full mt-4 bg-gradient-to-r from-[#ff5e1a] to-[#ff914c] text-white px-6 py-3 rounded-full font-semibold text-sm">Sign In</button>
              <button className="w-full mt-2 bg-yellow-400 hover:bg-yellow-300 text-gray-800 px-6 py-2.5 rounded-full font-semibold text-sm">
                Download App
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Cities Section - Exact Match */}
      <div className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#ff914c] text-white rounded-3xl overflow-hidden relative">
            <div className="p-12 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* Left - Cities List */}
                <div className="lg:col-span-7">
                  <h1 className="text-6xl font-black mb-12">Cities</h1>
                  
                  <div className="grid grid-cols-3 gap-x-12 gap-y-6 text-xl">
                    {cities.map((city, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className="hover:text-yellow-300 transition-colors cursor-pointer font-medium"
                      >
                        {city}
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-16 bg-yellow-400 hover:bg-yellow-300 text-[#ff914c] font-bold text-lg px-10 py-4 rounded-full flex items-center gap-3"
                  >
                    Explore all Cities
                    <ArrowRight size={24} />
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
                      className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                    />
                    {/* Yellow accent curve */}
                    <div className="absolute -bottom-6 -right-10 w-80 h-20 bg-yellow-400 rounded-full -rotate-12" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons (Right Side) */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40 md:flex hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 bg-[#ff914c] hover:bg-[#ff7d28] rounded-full flex items-center justify-center text-white shadow-xl text-xl"
          title="Scroll Down"
        >
          ↓
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 bg-[#ff914c] hover:bg-[#ff7d28] rounded-full flex items-center justify-center text-white shadow-xl"
          title="Contact Us"
        >
          <MessageSquare size={24} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 bg-[#ff914c] hover:bg-[#ff7d28] rounded-full flex items-center justify-center text-white shadow-xl text-xl"
          title="Book a Cab"
        >
          🚕
        </motion.button>
      </div>

      {/* ==================== FOOTER GRAPHIC ==================== */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 py-8 md:py-12 flex justify-center">
        <img src={taxiOutlineGraphic} alt="SignTaxi" className="h-32 md:h-40 lg:h-48 object-contain" />
      </div>

      {/* Footer */}
      <footer className="bg-white text-gray-700 py-12 md:py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logoImage} alt="SignTaxi" className="h-8 md:h-10" />
              </div>
              <p className="text-xs md:text-sm leading-relaxed">Experience the cleanest, most comfortable, and well-maintained cabs in the city.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Home</li>
                <li className="hover:text-amber-500 cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Our Services</h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Oneway Trip</li>
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Airport Transfer</li>
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Hourly Rental</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Contact</h4>
              <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
                <a href="tel:+918300399599" className="flex items-center gap-2 md:gap-3 hover:text-amber-500 transition-colors">
                  <Phone size={14} /> +91 83003 99599
                </a>
                <a href="mailto:support@signtaxi.com" className="flex items-center gap-2 md:gap-3 hover:text-amber-500 transition-colors">
                  <MessageSquare size={14} /> Email
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-6 md:pt-8 text-center text-xs md:text-sm">
            © 2026 SignTaxi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cities;