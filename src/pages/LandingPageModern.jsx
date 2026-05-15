import React, { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CalendarDays,
  Car,
  CheckCircle2,
  Clock3,
  Download,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'
import PublicNavbar from '../components/layout/PublicNavbar'
import PublicFooter from '../components/layout/PublicFooter'
import car1 from '../Logo/car1.51065db376274ec8c8ec.png'
import car2 from '../Logo/car2.7cd21a81d443f7de7eb1.png'
import car3 from '../Logo/car3.0ea3c0e7752b7ef7342c.png'
import car4 from '../Logo/car4.1cd395cca91be6ae2cd1.png'
import tamilNaduMap from '../Logo/Maps.6699bd4da22c4d42a29d.png'
import phoneMockup from '../Logo/WhatsApp Image 2026-04-10 at 3.02.23 PM.jpeg'

const fleet = [
  { title: 'City Sedan', desc: 'Quiet and comfortable rides for daily trips.', price: 'From Rs. 12/km', image: car1 },
  { title: 'Airport Prime', desc: 'Priority pickup, live ETA, and luggage help.', price: 'From Rs. 499', image: car2 },
  { title: 'Pink Safety Cab', desc: 'Women-first, high-safety fleet with trained drivers.', price: 'From Rs. 14/km', image: car3 },
  { title: 'Urbania XL', desc: 'Large groups, premium interiors, and long routes.', price: 'From Rs. 19/km', image: car4 },
]

const trustStats = [
  { value: '50K+', label: 'Happy riders', icon: Users },
  { value: '98%', label: 'On-time arrivals', icon: Clock3 },
  { value: '4.9/5', label: 'Average rating', icon: Star },
  { value: '24x7', label: 'Live support', icon: ShieldCheck },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function LandingPageModern() {
  const navigate = useNavigate()
  const [tripMode, setTripMode] = useState('oneway')
  const [form, setForm] = useState({
    pickup: '',
    destination: '',
    date: '',
    phone: '',
  })

  const cities = useMemo(
    () => ['Trichy', 'Madurai', 'Erode', 'Hosur', 'Thanjavur', 'Salem', 'Tirupur', 'Vellore', 'Tirunelveli'],
    []
  )

  const tabs = [
    { id: 'oneway', label: 'One Way' },
    { id: 'roundtrip', label: 'Round Trip' },
    { id: 'rental', label: 'Rental' },
  ]

  return (
    <div className="min-h-screen bg-slate-100">
      <PublicNavbar />
      <section className="relative overflow-hidden pt-14 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-12 left-[8%] h-60 w-60 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute top-24 right-[6%] h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <motion.div className="lg:col-span-7 glass-card p-7 md:p-10 relative overflow-hidden" initial="hidden" animate="visible" variants={fadeUp}>
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-amber-300/30 to-transparent rounded-full -mr-10 -mt-10" />
              <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full">
                <Sparkles size={14} /> World-Class Taxi Experience
              </p>
              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
                Premium taxi booking,
                <span className="block bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
                  modern comfort in every ride.
                </span>
              </h1>
              <p className="mt-5 text-slate-600 text-base sm:text-lg max-w-2xl">
                Book fast, travel safely, and track everything in real time. SignTaxi blends elegant design with reliable operations.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => navigate('/book-trip')} className="btn-primary inline-flex items-center gap-2">
                  Book Ride Now <ArrowRight size={16} />
                </button>
                <button type="button" onClick={() => navigate('/login')} className="btn-secondary inline-flex items-center gap-2">
                  Driver / Partner Login
                </button>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trustStats.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white border border-slate-100 p-3.5">
                    <item.icon size={16} className="text-amber-700" />
                    <p className="mt-2 text-lg font-black text-slate-900">{item.value}</p>
                    <p className="text-xs text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="lg:col-span-5 glass-card p-6 sm:p-7" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}>
              <h2 className="text-xl font-bold text-slate-900">Instant Ride Estimate</h2>
              <p className="mt-1 text-sm text-slate-500">Flexible booking across cities and airports.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setTripMode(tab.id)}
                    className={[
                      'px-3.5 py-2 rounded-xl text-sm font-semibold transition-all',
                      tripMode === tab.id ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200',
                    ].join(' ')}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                <label className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Pickup City</label>
                <div className="input-field flex items-center gap-2">
                  <MapPin size={16} className="text-amber-700" />
                  <select className="w-full bg-transparent outline-none text-sm" value={form.pickup} onChange={(e) => setForm((f) => ({ ...f, pickup: e.target.value }))}>
                    <option value="">Select city</option>
                    {cities.map((city) => <option key={city} value={city}>{city}</option>)}
                  </select>
                </div>

                <label className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Destination</label>
                <div className="input-field flex items-center gap-2">
                  <Car size={16} className="text-amber-700" />
                  <input type="text" placeholder="Where do you want to go?" value={form.destination} onChange={(e) => setForm((f) => ({ ...f, destination: e.target.value }))} className="w-full bg-transparent outline-none text-sm" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Travel Date</label>
                    <div className="input-field mt-1 flex items-center gap-2">
                      <CalendarDays size={16} className="text-amber-700" />
                      <input type="date" value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} className="w-full bg-transparent outline-none text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Phone</label>
                    <div className="input-field mt-1 flex items-center gap-2">
                      <Phone size={16} className="text-amber-700" />
                      <input type="tel" placeholder="+91" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} className="w-full bg-transparent outline-none text-sm" />
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn-primary mt-6 w-full justify-center inline-flex items-center gap-2">
                Get Fare & Driver Match <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-amber-700 font-semibold uppercase tracking-wider text-xs">Our Fleet</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Designed for every travel need</h2>
          </motion.div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {fleet.map((cab, index) => (
              <motion.article key={cab.title} className="glass-card p-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -6 }}>
                <div className="rounded-2xl bg-slate-50 border border-slate-100 h-44 flex items-center justify-center p-4">
                  <img src={cab.image} alt={cab.title} className="max-h-36 w-full object-contain" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{cab.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{cab.desc}</p>
                <p className="mt-3 text-sm font-semibold text-amber-700">{cab.price}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-700 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-amber-100 font-semibold uppercase tracking-wide text-xs">Why Riders Choose SignTaxi</p>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold">Safety-first operations with premium support</h2>
            <div className="mt-6 space-y-3">
              {[
                'Verified drivers with transparent IDs',
                'No hidden charges and predictable fares',
                'Live tracking with customer support coverage',
                'Optimized dispatch for faster pickup time',
              ].map((point) => (
                <p key={point} className="flex items-center gap-2.5 text-white/95">
                  <CheckCircle2 size={18} className="text-amber-100 shrink-0" />
                  {point}
                </p>
              ))}
            </div>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold bg-white text-amber-700 px-4 py-2.5 rounded-xl">
              Explore standards <ArrowRight size={15} />
            </Link>
          </motion.div>
          <motion.div className="hidden md:flex justify-center lg:justify-end" initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={tamilNaduMap} alt="Service map" className="max-w-md rounded-3xl bg-white/10 p-5 backdrop-blur-sm" />
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-amber-700 font-semibold uppercase tracking-wider text-xs">Get The App</p>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">Book, track, and manage rides from one polished app.</h2>
            <p className="mt-4 text-slate-600">Experience smooth pickup flows, accurate ETAs, secure payments, and loyalty benefits designed for repeat riders.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="btn-primary inline-flex items-center gap-2"><Download size={16} /> Download Android</button>
              <button className="btn-secondary">Download iOS</button>
            </div>
          </motion.div>
          <motion.div className="hidden md:flex justify-center lg:justify-end" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img src={phoneMockup} alt="SignTaxi app preview" className="w-72 rounded-[2rem] shadow-2xl border-4 border-white" />
          </motion.div>
        </div>
      </section>
      <PublicFooter />
    </div>
  )
}
