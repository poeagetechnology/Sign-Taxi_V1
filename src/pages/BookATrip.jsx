import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Phone, MessageSquare, Calendar, MapPin, Users } from 'lucide-react';

import logoImage from '../Logo/Sign Taxi.bf513dbcfde59f174016.png';
import car1 from '../Logo/car1.51065db376274ec8c8ec.png';
import taxiOutlineGraphic from '../Logo/red-taxi-outline-city-graphic.webp';

const BookATrip = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const navigate = useNavigate();
  
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
            <Link to="/cabs" className="hover:text-[#ff914c] transition-colors">Cabs</Link>
            <a href="#" className="text-[#ff914c] font-semibold">Book a Trip</a>
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
              <Link to="/cabs" className="block py-2 hover:text-[#ff914c] transition-colors font-medium" onClick={() => setMobileOpen(false)}>Cabs</Link>
              <a href="#" className="block py-2 text-[#ff914c] font-semibold">Book a Trip</a>
              <a href="#" className="block py-2 hover:text-[#ff914c] transition-colors font-medium">Become a Partner</a>
              <button onClick={() => {navigate('/login'); setMobileOpen(false);}} className="w-full mt-4 bg-gradient-to-r from-[#ff5e1a] to-[#ff914c] text-white px-6 py-3 rounded-full font-semibold text-sm">Sign In</button>
              <button className="w-full mt-2 bg-yellow-400 hover:bg-yellow-300 text-gray-800 px-6 py-2.5 rounded-full font-semibold text-sm">
                Download App
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Book a Trip Section */}
      <div className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#cc2e1a] to-[#e63946] text-white rounded-3xl overflow-hidden relative">
            <div className="p-6 md:p-8 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-6 md:gap-12 items-center">
                {/* Left - Trip Types List */}
                <div className="lg:col-span-7">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-12">Book a Trip</h1>
                  
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-x-8 md:gap-y-6">
                    {tripTypes.map((trip, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        onClick={() => setSelectedTrip(trip.name)}
                        className={`p-3 md:p-4 rounded-xl md:rounded-2xl cursor-pointer transition-all transform hover:scale-105 ${
                          selectedTrip === trip.name
                            ? 'bg-yellow-400 text-[#cc2e1a]'
                            : 'hover:bg-white/20'
                        }`}
                      >
                        <div className="text-2xl md:text-3xl mb-1 md:mb-2">{trip.icon}</div>
                        <div className="font-bold text-sm md:text-lg">{trip.name}</div>
                        <div className="text-xs md:text-sm opacity-90">{trip.desc}</div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 md:mt-12 bg-yellow-400 hover:bg-yellow-300 text-[#cc2e1a] font-bold text-sm md:text-lg px-6 md:px-10 py-3 md:py-4 rounded-full flex items-center gap-2 md:gap-3"
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
                    <div className="hidden lg:block absolute -bottom-6 -right-10 w-80 h-20 bg-yellow-400 rounded-full -rotate-12" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trip Details Section */}
      <div className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
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
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">{step.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-[#ff914c] mb-3 md:mb-4">{step.step}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== FOOTER GRAPHIC ==================== */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 py-8 md:py-12 flex justify-center">
        <img src={taxiOutlineGraphic} alt="SignTaxi" className="h-32 md:h-40 lg:h-48 object-contain" />
      </div>

      {/* ==================== FOOTER ==================== */}
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

      {/* Floating Action Buttons (Right Side) */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 flex flex-col gap-3 z-40">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 md:w-14 md:h-14 bg-[#ff914c] hover:bg-[#ff7d28] rounded-full flex items-center justify-center text-white shadow-xl text-lg md:text-xl"
          title="Scroll Down"
        >
          ↓
        </motion.button>
        <motion.a
          href="tel:+918300399599"
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 md:w-14 md:h-14 bg-[#ff914c] hover:bg-[#ff7d28] rounded-full flex items-center justify-center text-white shadow-xl"
          title="Call Us"
        >
          <Phone size={20} className="md:w-6 md:h-6" />
        </motion.a>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 md:w-14 md:h-14 bg-[#ff914c] hover:bg-[#ff7d28] rounded-full flex items-center justify-center text-white shadow-xl text-lg md:text-xl"
          title="Book a Cab"
        >
          🚕
        </motion.button>
      </div>
    </div>
  );
};

export default BookATrip;
