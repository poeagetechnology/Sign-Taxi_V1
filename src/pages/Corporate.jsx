import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Route, Calendar, Sparkles } from 'lucide-react';

import logoImage from '../Logo/Sign Taxi.bf513dbcfde59f174016.png';
import taxiOutlineGraphic from '../Logo/red-taxi-outline-city-graphic.webp';

const Corporate = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="SignTaxi" className="h-10" />
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-[#ff914c]">Home</Link>
            <Link to="/about" className="hover:text-[#ff914c]">About Us</Link>
            <Link to="/corporate" className="text-[#ff914c] font-semibold">Corporate</Link>
            <Link to="/cabs" className="hover:text-[#ff914c]">Cabs</Link>
            <a href="/book-trip" className="hover:text-[#ff914c]">Book a Trip</a>
            <a href="#" className="hover:text-[#ff914c]">Become a Partner</a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/login')} className="hidden md:block bg-gradient-to-r from-[#ff5e1a] to-[#ff914c] text-white px-6 py-2.5 rounded-full font-semibold text-sm">Sign In</button>
            <button className="hidden md:block bg-yellow-400 hover:bg-yellow-300 text-gray-800 px-6 py-2.5 rounded-full font-semibold text-sm">Download App</button>
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
              <Link to="/corporate" className="block py-2 text-[#ff914c] font-semibold" onClick={() => setMobileOpen(false)}>Corporate</Link>
              <Link to="/cabs" className="block py-2 hover:text-[#ff914c] transition-colors font-medium" onClick={() => setMobileOpen(false)}>Cabs</Link>
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

      {/* Hero Section */}
      <div className="relative h-96 sm:h-[32rem] md:h-[40rem] lg:h-screen bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297e?w=2000')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff914c]/90 via-[#ff914c]/70 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-3 md:mb-6">Corporate</h1>
              <p className="text-base md:text-xl lg:text-2xl text-white/90">Premium Business Travel Solutions</p>
            </div>
          </div>
        </div>

        {/* Man walking in background (right side) */}
        {/* Image removed */}
      </div>

      {/* Enroll Button */}
      <div className="flex justify-center -mt-8 relative z-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#ff914c] hover:bg-[#ff7d28] text-white px-12 py-4 rounded-full font-semibold text-lg shadow-xl"
        >
          Enroll with us
        </motion.button>
      </div>

      {/* Corporate Customization */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-[#ff914c] mb-6">Corporate Customization</h2>
          
          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
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

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-10">
              SignTaxi offers flexible plans to accommodate<br />
              the unique needs of institutions and organizations.
            </h3>

            <div className="grid md:grid-cols-3 gap-10">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="text-center group"
                >
                  <div className="mx-auto w-20 h-20 bg-[#ff914c]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ff914c] group-hover:text-white transition-all">
                    <feature.icon size={40} />
                  </div>
                  <h4 className="font-bold text-xl mb-3">{feature.title}</h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Privacy */}
      <div className="flex justify-center gap-4 pb-16">
        <button className="border border-gray-300 hover:border-[#ff914c] px-8 py-3 rounded-full font-medium transition">
          Terms and Conditions
        </button>
        <button className="border border-gray-300 hover:border-[#ff914c] px-8 py-3 rounded-full font-medium transition">
          Privacy Policy
        </button>
      </div>

      {/* Brands Who Trust Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-12">
            Brands <span className="text-[#ff914c]">who trust Us</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-16 gap-y-12 items-center justify-items-center opacity-75">
            {[
              "ACC cement", "ASTRAL", "AXIS BANK", "Baker Hughes", 
              "CASAGRAND", "Versa Drives", "EMERALD", "EVEREST", "GEM HOSPITAL"
            ].map((brand, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="text-xl font-bold text-gray-700 tracking-wider"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FOOTER GRAPHIC ==================== */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 py-8 md:py-12 flex justify-center">
        <img src={taxiOutlineGraphic} alt="SignTaxi" className="h-32 md:h-40 lg:h-48 object-contain" />
      </div>

      {/* Footer */}
      <footer className="bg-white text-gray-700 py-12 md:py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={logoImage} alt="SignTaxi" className="h-9" />
                <span className="text-2xl font-bold text-gray-900">SignTaxi</span>
              </div>
              <p className="text-sm max-w-md">
                Experience the cleanest, most comfortable, and well-maintained cabs in the city.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Trips</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition">Oneway Trip</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Round Trip</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Hourly Rental</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Bulk Booking</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition">About Us</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Contact</a></li>
                <li><a href="#" className="hover:text-amber-500 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+918300399599" className="hover:text-amber-500 transition">+91 83003 99599</a></li>
                <li><a href="mailto:support@signtaxi.com" className="hover:text-amber-500 transition">support@signtaxi.com</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-xs border-t border-slate-200 pt-8 text-center">
            © 2026 SignTaxi • All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Corporate;