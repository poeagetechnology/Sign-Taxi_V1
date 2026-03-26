import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Phone,
  MessageSquare,
  MapPin,
  Calculator,
  ShieldCheck,
  Zap,
  Info,
  CheckSquare,
  ArrowRight,
} from 'lucide-react'

const LandingPage = () => {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [current, setCurrent] = useState(0)
  const [showOffer, setShowOffer] = useState(true)
  const [tripType, setTripType] = useState('Oneway')
  const [tripModal, setTripModal] = useState(null)
  const [cabModal, setCabModal] = useState(null)
  const [distance, setDistance] = useState('')
  const [fare, setFare] = useState(null)

  const slides = [
    {
      title: '24/7 Direct Customer Support',
      subtitle: 'Premium Toyota Innova Crysta',
      image:
        'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80',
      bg: 'from-red-600 to-red-500',
    },
    {
      title: 'No Ride Cancellations',
      subtitle: 'Luxury Hyundai Verna',
      image:
        'https://images.unsplash.com/photo-1549399542-7e82138bc5f1?auto=format&fit=crop&w=1200&q=80',
      bg: 'from-black via-gray-900 to-black',
    },
    {
      title: 'Corporate and Airport Transfers',
      subtitle: 'Elite Kia Carens',
      image:
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
      bg: 'from-blue-700 to-indigo-600',
    },
    {
      title: 'Affordable City Rides',
      subtitle: 'Swift Dzire Sedan',
      image:
        'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
      bg: 'from-emerald-700 to-cyan-600',
    },
    {
      title: 'Outstation Premium Trips',
      subtitle: 'Mahindra XUV700',
      image:
        'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80',
      bg: 'from-orange-600 to-amber-500',
    },
  ]

  const tripCards = [
    {
      title: 'Oneway Trip',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
      description:
        'Book a single destination ride with transparent pricing and zero hidden charges.',
    },
    {
      title: 'Round Trip',
      image:
        'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80',
      description:
        'Travel to your destination and return comfortably with flexible waiting time.',
    },
    {
      title: 'Airport Transfer',
      image:
        'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80',
      description:
        'On-time airport pickups and drops with professional drivers and luggage assistance.',
    },
  ]

  const cabCards = [
    {
      title: 'Sedan',
      desc: 'Business Class Ride',
      pricePerKm: 18,
      image:
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Mini',
      desc: 'Economy Class Ride',
      pricePerKm: 14,
      image:
        'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Traveller',
      desc: 'Perfect Family Trips',
      pricePerKm: 25,
      image:
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80',
    },
  ]

  const today = new Date().toISOString().split('T')[0]
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: today,
    mobile: '',
    email: '',
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const validate = () => {
    const newErrors = {}
    if (!formData.from) newErrors.from = 'Enter pickup location'
    if (!formData.to) newErrors.to = 'Enter drop location'
    if (!formData.date) newErrors.date = 'Select date'
    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Enter valid 10 digit number'
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Enter valid email'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const message = `\nSIGN TAXI Booking Request\n\nTrip Type: ${tripType}\nPickup: ${formData.from}\nDrop: ${formData.to}\nDate: ${formData.date}\nMobile: ${formData.mobile}\nEmail: ${formData.email}`
    window.open(`https://wa.me/918300399599?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleCabBook = () => {
    if (!cabModal || !fare) return
    const message = `\nSIGN TAXI Booking\nVehicle: ${cabModal.title}\nDistance: ${distance} km\nEstimated Fare: INR ${fare}`
    window.open(`https://wa.me/918300399599?text=${encodeURIComponent(message)}`, '_blank')
    setCabModal(null)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-black tracking-tight text-red-600">SIGN TAXI</Link>

          <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-800">
            <a href="#trips" className="hover:text-red-600 transition">Trip Types</a>
            <a href="#cabs" className="hover:text-red-600 transition">Cab Types</a>
            <a href="#services" className="hover:text-red-600 transition">Service Cities</a>
            <div className="flex gap-3 ml-4">
              <button
                onClick={() => navigate('/login')}
                className="px-6 py-2 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate('/register')}
                className="px-6 py-2 rounded-full border-2 border-red-600 text-red-600 font-semibold hover:bg-red-50 transition"
              >
                Sign Up
              </button>
            </div>
          </nav>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="lg:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-6 py-4 flex flex-col gap-3">
                <a href="#trips" onClick={() => setMobileOpen(false)} className="font-semibold">Trip Types</a>
                <a href="#cabs" onClick={() => setMobileOpen(false)} className="font-semibold">Cab Types</a>
                <a href="#services" onClick={() => setMobileOpen(false)} className="font-semibold">Service Cities</a>
                <button onClick={() => navigate('/login')} className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold">Sign In</button>
                <button onClick={() => navigate('/register')} className="w-full border-2 border-red-600 text-red-600 py-3 rounded-xl font-bold">Sign Up</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="w-full overflow-hidden">
        <section className={`relative w-full h-[88vh] bg-gradient-to-r ${slides[current].bg} text-white transition-all duration-1000`}>
          <motion.div
            className="max-w-7xl mx-auto px-6 h-full grid md:grid-cols-2 items-center gap-8"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -50) setCurrent((prev) => (prev + 1) % slides.length)
              if (offset.x > 50) setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
            }}
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] font-black text-white/80 mb-4">Trusted Taxi Network</p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{slides[current].title}</h1>
              <p className="mt-4 text-xl text-white/90">{slides[current].subtitle}</p>
              <div className="mt-8 flex gap-3">
                <button onClick={() => navigate('/register')} className="px-6 py-3 rounded-full bg-black text-white font-bold hover:bg-gray-900">Get Started</button>
                <a href="#booking" className="px-6 py-3 rounded-full border border-white/70 text-white font-bold hover:bg-white/15">Book Quick Ride</a>
              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={slides[current].image}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-[420px] object-cover rounded-3xl shadow-2xl border border-white/20"
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </section>

        <section id="booking" className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
          <div className="flex gap-4 mb-6">
            {['Oneway', 'Outstation', 'Rental'].map((type) => (
              <button
                key={type}
                onClick={() => setTripType(type)}
                className={`px-6 py-2 rounded-t-xl font-semibold ${tripType === type ? 'bg-white text-red-600' : 'bg-gray-200 text-gray-700'}`}
              >
                {type}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-100 rounded-3xl shadow-2xl p-8 grid md:grid-cols-5 gap-4">
            <div>
              <input value={formData.from} onChange={(e) => setFormData({ ...formData, from: e.target.value })} placeholder="Pickup Location" className="w-full px-4 py-3 rounded-xl border" />
              {errors.from && <p className="text-red-500 text-xs mt-1">{errors.from}</p>}
            </div>
            <div>
              <input value={formData.to} onChange={(e) => setFormData({ ...formData, to: e.target.value })} placeholder="Drop Location" className="w-full px-4 py-3 rounded-xl border" />
              {errors.to && <p className="text-red-500 text-xs mt-1">{errors.to}</p>}
            </div>
            <div>
              <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full px-4 py-3 rounded-xl border" />
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
            </div>
            <div>
              <input value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border" />
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
            </div>
            <div>
              <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email ID" className="w-full px-4 py-3 rounded-xl border" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="md:col-span-5 flex justify-center mt-4">
              <button type="submit" className="px-10 py-3 bg-black text-white rounded-full font-bold">Book Now</button>
            </div>
          </form>
        </section>

        <section id="trips" className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Explore Trip Types</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tripCards.map((trip) => (
              <motion.div
                key={trip.title}
                whileHover={{ scale: 1.03 }}
                className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden"
                onClick={() => setTripModal(trip)}
              >
                <img src={trip.image} alt={trip.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{trip.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">Click to view details</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="cabs" className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h2 className="text-4xl font-bold"><span className="text-red-600">Cab Types</span> for Every Traveler</h2>
            <p className="text-gray-500 mt-4">Premium vehicles for every journey.</p>
          </div>
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {cabCards.map((cab) => (
              <div
                key={cab.title}
                onClick={() => {
                  setCabModal(cab)
                  setDistance('')
                  setFare(null)
                }}
                className="cursor-pointer bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition"
              >
                <h3 className="text-lg font-semibold">{cab.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{cab.desc}</p>
                <img src={cab.image} alt={cab.title} className="w-full h-44 mt-4 object-cover rounded-2xl" />
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold leading-tight">Our Serviceable <span className="text-orange-600">Cities</span> in Tamil Nadu</h2>
              <div className="grid grid-cols-2 gap-8 mt-10 text-gray-700">
                <ul className="space-y-3">
                  {['Coimbatore', 'Chennai', 'Trichy', 'Madurai', 'Erode', 'Hosur'].map((city) => (
                    <li key={city} className="flex items-center gap-3"><span className="w-3 h-3 border-2 border-blue-600 rounded-full"></span>{city}</li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {['Salem', 'Tirupur', 'Karur', 'Pollachi', 'Vellore', 'Tirunelveli'].map((city) => (
                    <li key={city} className="flex items-center gap-3"><span className="w-3 h-3 border-2 border-blue-600 rounded-full"></span>{city}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative flex justify-center">
              <motion.img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Tamil_Nadu_district_map.svg"
                alt="Tamil Nadu map"
                className="w-full max-w-md"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white text-2xl font-black">SIGN TAXI</h3>
            <p className="mt-3 text-sm text-gray-400">Reliable taxi services for city, airport, and outstation travel across Tamil Nadu.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Trips</h4>
            <ul className="space-y-2 text-sm">
              <li>Oneway</li>
              <li>Round Trip</li>
              <li>Hourly Rental</li>
              <li>Airport Taxi</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Service Cities</h4>
            <p className="text-sm leading-7">Coimbatore, Chennai, Trichy, Madurai, Erode, Salem, Tirupur, Vellore</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+918300399599" className="flex items-center gap-2 hover:text-white"><Phone size={14} /> +91 83003 99599</a>
              <a href="https://wa.me/918300399599" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white"><MessageSquare size={14} /> WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 py-5 text-center text-xs text-gray-500">© {new Date().getFullYear()} Sign Taxi. All rights reserved.</div>
      </footer>

      <AnimatePresence>
        {showOffer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-[380px] w-full shadow-2xl overflow-hidden relative border border-gray-100"
            >
              <button
                onClick={() => setShowOffer(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/90 hover:bg-red-50 text-gray-500 hover:text-red-600 rounded-xl flex items-center justify-center z-[11] shadow-sm border border-gray-100"
              >
                <X size={16} />
              </button>

              <div className="h-40 w-full relative group">
                <iframe
                  title="Karur to Coimbatore"
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d501511.970222047!2d76.9632!3d10.9996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3baae245df84b2cb%3A0xe67755866f28148b!2sKarur%2C%20Tamil%20Nadu!3m2!1d10.9601!2d78.0766!4m5!1s0x3ba859af2f971cb5%3A0x2d460b5776d6ec0a!2sCoimbatore%2C%20Tamil%20Nadu!3m2!1d11.0168!2d76.9558!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>
              </div>

              <div className="p-6 pt-2 text-center">
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-black mb-4 uppercase">Route Special</div>
                <h2 className="text-2xl font-black text-gray-900 leading-tight">Karur <span className="text-red-600">→</span> Kovai</h2>
                <div className="my-4">
                  <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest block">Starting from</span>
                  <div className="text-4xl font-black text-gray-900">₹2133</div>
                </div>
                <div className="flex gap-2">
                  <a href="tel:+918300399599" className="flex-1 bg-gray-900 text-white py-3 px-4 rounded-xl font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-2"><Phone size={14} /> Call</a>
                  <a href="https://wa.me/918300399599" target="_blank" rel="noreferrer" className="flex-1 bg-green-500 text-white py-3 px-4 rounded-xl font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-2"><MessageSquare size={14} /> WhatsApp</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {tripModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[110] p-4">
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} className="bg-white rounded-3xl max-w-xl w-full overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img src={tripModal.image} alt={tripModal.title} className="h-full w-full object-cover" />
                <button onClick={() => setTripModal(null)} className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/85 flex items-center justify-center"><X size={18} /></button>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-black">{tripModal.title}</h3>
                <div className="mt-5 flex items-start gap-3 text-gray-600">
                  <Info size={18} className="mt-1" />
                  <p>{tripModal.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <CheckSquare size={18} className="text-red-600 mb-2" />
                    <p className="text-xs font-black uppercase text-gray-400">Pricing</p>
                    <p className="font-bold">Transparent</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <ShieldCheck size={18} className="text-red-600 mb-2" />
                    <p className="text-xs font-black uppercase text-gray-400">Safety</p>
                    <p className="font-bold">Verified Drivers</p>
                  </div>
                </div>
                <button onClick={() => setTripModal(null)} className="mt-6 w-full bg-gray-900 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2">Close <ArrowRight size={16} /></button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {cabModal && (
          <motion.div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[120] p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} className="bg-white rounded-3xl max-w-xl w-full overflow-hidden relative border border-gray-100">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-3 text-[10px] font-black tracking-[0.2em] uppercase">Instant Fare Estimation</div>
              <button onClick={() => setCabModal(null)} className="absolute top-12 right-6 w-10 h-10 bg-gray-100/85 rounded-xl flex items-center justify-center"><X size={18} /></button>
              <div className="p-8 pt-12">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase">{cabModal.desc}</div>
                  <h3 className="text-4xl font-black text-gray-900">{cabModal.title}</h3>
                </div>

                <img src={cabModal.image} alt={cabModal.title} className="w-full h-48 object-cover rounded-2xl mb-6" />

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-red-600"><ShieldCheck size={20} /></div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Per KM</p>
                      <p className="text-gray-900 font-bold text-lg">₹{cabModal.pricePerKm}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-red-600"><Calculator size={20} /></div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Est. Fare</p>
                      <p className="text-gray-900 font-bold text-lg">{fare ? `₹${fare}` : '---'}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"><MapPin size={18} /></div>
                    <input
                      type="number"
                      placeholder="Enter Estimated Distance (KM)"
                      value={distance}
                      onChange={(e) => {
                        const val = e.target.value
                        setDistance(val)
                        if (val && !Number.isNaN(Number(val))) {
                          setFare(Number(val) * cabModal.pricePerKm)
                        } else {
                          setFare(null)
                        }
                      }}
                      className="w-full pl-14 pr-6 py-5 bg-gray-50 border-2 border-transparent focus:border-red-500 rounded-2xl font-bold outline-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button onClick={handleCabBook} disabled={!fare} className="flex-[2] bg-red-600 text-white py-5 px-8 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-700 transition shadow-xl disabled:opacity-50 flex items-center justify-center gap-3"><MessageSquare size={18} /> Book on WhatsApp</button>
                    <button onClick={() => setCabModal(null)} className="flex-1 bg-gray-900 text-white py-5 px-6 rounded-2xl font-black text-sm uppercase tracking-widest">Close</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LandingPage
