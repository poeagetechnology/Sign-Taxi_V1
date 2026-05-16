import React, { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Car,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  CircleAlert,
  Clock3,
  Download,
  HeartPulse,
  Landmark,
  MapPin,
  MountainSnow,
  Plane,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wallet,
} from 'lucide-react'
import PublicNavbar from '../components/layout/PublicNavbar'
import PublicFooter from '../components/layout/PublicFooter'
import FleetCarousel from '../components/landing/FleetCarousel'
import car1 from '../Logo/car1.51065db376274ec8c8ec.png'
import car2 from '../Logo/car2.7cd21a81d443f7de7eb1.png'
import car3 from '../Logo/car3.0ea3c0e7752b7ef7342c.png'
import car4 from '../Logo/car4.1cd395cca91be6ae2cd1.png'
import tamilNaduMap from '../Logo/Maps.6699bd4da22c4d42a29d.png'
import phoneMockup from '../Logo/WhatsApp Image 2026-04-10 at 3.02.23 PM.jpeg'

const fleet = [
  { title: 'Waganor Mini', desc: 'Budget-friendly city and one-way rides.', price: 'One way: Rs. 14/km after 120 km minimum', image: car1 },
  { title: 'Sadon (Shift Dizire / Aura)', desc: 'Comfort sedan for family and office travel.', price: 'One way: Rs. 15/km after 120 km minimum', image: car2 },
  { title: 'SUV (Innova Crista)', desc: 'Premium SUV for long rides and airport comfort.', price: 'One way: Rs. 20/km after 120 km minimum', image: car3 },
  { title: 'MUV (Ertiga)', desc: 'Balanced space and comfort for medium groups.', price: 'One way: Rs. 17/km after 120 km minimum', image: car4 },
  { title: 'Tempo Traveller', desc: 'Best for pilgrim trips and large groups.', price: 'Custom pricing by route and hours', image: car3 },
  { title: 'Urban', desc: 'Executive premium segment for special travel.', price: 'Custom premium slab by route', image: car4 },
]

const trustStats = [
  { value: '50K+', label: 'Happy riders', icon: Users },
  { value: '98%', label: 'On-time arrivals', icon: Clock3 },
  { value: '4.9/5', label: 'Average rating', icon: Star },
  { value: '24x7', label: 'Live support', icon: ShieldCheck },
]

const trustHighlights = ['No cancellation', 'Fixed pricing', 'No hidden charges']

const ratePlans = [
  {
    id: 'oneway',
    label: 'One Way',
    hero: 'Minimum 120 km package',
    highlights: [
      { title: 'Mini', value: 'Rs. 2,300 / 120 km, then Rs. 14/km' },
      { title: 'Sadon', value: 'Rs. 15/km after 120 km minimum' },
      { title: 'MUV', value: 'Rs. 17/km + basic driver pay Rs. 500' },
      { title: 'SUV', value: 'Rs. 20/km + basic driver pay Rs. 500' },
    ],
    points: [
      'Base fare: Rs. 100 for every 4 km',
      'If travel is below 30 km, extra Rs. 25 applies',
      'Toll and statutory charges are paid by customer',
      'Driver tips start from Rs. 400 depending on km',
    ],
  },
  {
    id: 'roundtrip',
    label: 'Round Trip',
    hero: 'Minimum 200 km package',
    highlights: [
      { title: 'Mini', value: 'Rs. 13/km (minimum Rs. 3,000)' },
      { title: 'Sadon', value: 'Rs. 14/km (minimum Rs. 3,200)' },
      { title: 'SUV', value: 'Rs. 19/km (minimum Rs. 4,300)' },
      { title: 'Driver Pay', value: 'Rs. 400-500 based on vehicle' },
    ],
    points: [
      'Designed for outstation and return routes',
      'Fare slab starts from fixed minimum package',
      'Ideal for temple, airport, and hill-station loops',
    ],
  },
  {
    id: 'hourly',
    label: 'Hourly Package',
    hero: 'City rental with fixed hour/km slabs',
    highlights: [
      { title: '1 hr / 10 km', value: 'Mini 320 | Sadon 350 | MUV 400 | SUV 500' },
      { title: '2 hrs / 20 km', value: 'Custom slab available' },
      { title: '4 hrs / 40 km', value: 'Rs. 25 reduction available' },
      { title: 'Beyond slab', value: 'No extra Rs. 25 reduction' },
    ],
    points: [
      'Best for meetings, shopping, and quick city hops',
      'Live waiting and traffic factor applied as per policy',
      'Peak hours can increase final fare',
    ],
  },
]

const waitingCharges = [
  'Mini: Rs. 100',
  'Sadon: Rs. 140',
  'MUV: Rs. 200',
  'SUV: Rs. 250',
]

const airportPickups = [
  { city: 'Chennai', airport: 'Chennai International Airport (MAA)' },
  { city: 'Trichy', airport: 'Tiruchirappalli International Airport (TRZ)' },
  { city: 'Coimbatore', airport: 'Coimbatore International Airport (CJB)' },
  { city: 'Kochi', airport: 'Cochin International Airport (COK)' },
  { city: 'Bangalore', airport: 'Kempegowda International Airport (BLR)' },
  { city: 'Salem', airport: 'Salem Airport (SXV)' },
]

const templePackages = [
  'Navagraha Trip',
  'Tirupati',
  'Madurai',
  'Kanyakumari',
  'Tiruchendur',
  'Rameshwaram',
  'Maruthamalai',
  'Palani',
  'Thanjai Periya Kovil',
  'Tiruvannamalai',
  'Bannari Amman Kovil',
]

const hillStations = ['Ooty', 'Kodaikanal', 'Yercaud', 'Yelagiri', 'Hasanur', 'Mysore', 'Kadambur']

const packageShowcase = [
  {
    id: 'temple',
    label: 'Temple Package',
    icon: Landmark,
    intro: 'Covering major spiritual destinations in Tamil Nadu with planned multi-stop routing.',
    items: templePackages,
  },
  {
    id: 'hill',
    label: 'Hill Stations',
    icon: MountainSnow,
    intro: 'Comfort-focused long rides for cool-weather trips with round-trip options.',
    items: hillStations,
  },
  {
    id: 'sabari',
    label: 'Sabari Malai',
    icon: Building2,
    intro: 'Exclusive packages from all over Tamil Nadu with pickup-based pricing.',
    items: ['Direct Visit Package', 'Temples Circuit Package', 'Charges depend on pickup location'],
  },
  {
    id: 'medical',
    label: 'Medical Support',
    icon: HeartPulse,
    intro: 'Hospital pickup and waiting-friendly travel for patient care journeys.',
    items: ['12 hours up-and-down package', 'Starts from Rs. 4,000', 'Within 240 km (location based variations)'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function LandingPageModern() {
  const navigate = useNavigate()
  const [tripMode, setTripMode] = useState('oneway')
  const [rateTab, setRateTab] = useState('oneway')
  const [airportIndex, setAirportIndex] = useState(0)
  const [packageTab, setPackageTab] = useState('temple')
  const [form, setForm] = useState({
    pickup: '',
    destination: '',
    date: '',
    phone: '',
  })

  const cities = useMemo(
    () => ['Trichy', 'Madurai', 'Erode', 'Hosur', 'Thanjavur', 'Salem', 'Tirupur', 'Vellore', 'Tirunelveli', 'Namakkal'],
    []
  )

  const tabs = [
    { id: 'oneway', label: 'One Way' },
    { id: 'roundtrip', label: 'Round Trip' },
    { id: 'rental', label: 'Rental' },
  ]

  const activeRatePlan = ratePlans.find((plan) => plan.id === rateTab) || ratePlans[0]
  const activePackage = packageShowcase.find((item) => item.id === packageTab) || packageShowcase[0]
  const ActivePackageIcon = activePackage.icon

  const goToAirport = (nextIndex) => {
    const count = airportPickups.length
    setAirportIndex(((nextIndex % count) + count) % count)
  }

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

              <motion.div className="mt-5 flex flex-wrap gap-2">
                {trustHighlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs sm:text-sm font-semibold text-amber-800"
                  >
                    <CheckCircle2 size={14} className="shrink-0" />
                    {item}
                  </span>
                ))}
              </motion.div>

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
          <FleetCarousel items={fleet} />
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-amber-700 font-semibold uppercase tracking-wider text-xs">Rate Card</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Transparent pricing with premium clarity</h2>
            <p className="mt-3 text-slate-600 max-w-3xl">
              Rates vary by vehicle category and trip type. Peak-hour surge, city traffic, and local municipal charges can increase final fare.
            </p>
          </motion.div>

          <div className="mt-7 flex flex-wrap gap-2">
            {ratePlans.map((plan) => (
              <button
                key={plan.id}
                type="button"
                onClick={() => setRateTab(plan.id)}
                className={[
                  'px-4 py-2 rounded-xl text-sm font-semibold transition-all',
                  rateTab === plan.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-amber-300 hover:text-amber-700',
                ].join(' ')}
              >
                {plan.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeRatePlan.id}
            className="mt-5 glass-card p-6 sm:p-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-bold text-slate-900">{activeRatePlan.label}</h3>
              <span className="px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800">
                {activeRatePlan.hero}
              </span>
            </div>

            <div className="mt-5 grid md:grid-cols-2 gap-3">
              {activeRatePlan.highlights.map((highlight) => (
                <div key={highlight.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-wide text-amber-700 font-semibold">{highlight.title}</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">{highlight.value}</p>
                </div>
              ))}
            </div>

            <ul className="mt-5 grid md:grid-cols-2 gap-2.5">
              {activeRatePlan.points.map((point) => (
                <li key={point} className="text-sm text-slate-600 flex gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 text-amber-700 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="mt-6 grid md:grid-cols-3 gap-5">
            <div className="glass-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">Waiting Charge</p>
              <ul className="mt-3 space-y-2">
                {waitingCharges.map((item) => (
                  <li key={item} className="text-sm text-slate-600 flex gap-2">
                    <Clock3 size={16} className="mt-0.5 text-amber-700 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">Important Notes</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><CircleAlert size={16} className="mt-0.5 text-amber-700 shrink-0" /><span>Peak hour pricing may be higher.</span></li>
                <li className="flex gap-2"><Wallet size={16} className="mt-0.5 text-amber-700 shrink-0" /><span>Traffic and city charges may apply each hour.</span></li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 text-amber-700 shrink-0" /><span>No cancellation on confirmed bookings.</span></li>
              </ul>
            </div>
            <div className="glass-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">12 Hour Medical Package</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><HeartPulse size={16} className="mt-0.5 text-amber-700 shrink-0" /><span>Up and down coverage within 240 km.</span></li>
                <li className="flex gap-2"><HeartPulse size={16} className="mt-0.5 text-amber-700 shrink-0" /><span>Starts from Rs. 4,000 (location dependent).</span></li>
                <li className="flex gap-2"><HeartPulse size={16} className="mt-0.5 text-amber-700 shrink-0" /><span>Hospital pickup includes waiting-charge policy.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-amber-700 font-semibold uppercase tracking-wider text-xs">Airport Pickup Coverage</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Reliable airport rides with city-specific dispatch</h2>
          </motion.div>

          <div className="mt-8 glass-card p-6 sm:p-7">
            <div className="grid lg:grid-cols-12 gap-5 items-stretch">
              <motion.article
                key={airportPickups[airportIndex].city}
                className="lg:col-span-7 rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">Featured Pickup Airport</p>
                <h3 className="mt-2 text-2xl font-extrabold text-slate-900">{airportPickups[airportIndex].city}</h3>
                <p className="mt-2 text-sm text-slate-600">{airportPickups[airportIndex].airport}</p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-3 py-1.5 text-xs font-semibold text-amber-700">
                  <Plane size={14} /> Live airport dispatch available
                </div>
              </motion.article>

              <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-bold text-slate-900">Quick City Switch</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {airportPickups.map((airport, index) => (
                    <button
                      key={airport.city}
                      type="button"
                      onClick={() => goToAirport(index)}
                      className={[
                        'text-left rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold transition-all',
                        airportIndex === index
                          ? 'bg-amber-600 text-white'
                          : 'bg-slate-50 text-slate-600 hover:bg-amber-50 hover:text-amber-700',
                      ].join(' ')}
                    >
                      {airport.city}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <button
                type="button"
                onClick={() => goToAirport(airportIndex - 1)}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:border-amber-300 hover:text-amber-700"
              >
                <ChevronLeft size={16} /> Previous
              </button>

              <div className="flex items-center gap-2">
                {airportPickups.map((item, index) => (
                  <button
                    key={item.city}
                    type="button"
                    onClick={() => goToAirport(index)}
                    className={['h-2 rounded-full transition-all', airportIndex === index ? 'w-8 bg-amber-600' : 'w-2 bg-slate-300'].join(' ')}
                    aria-label={`Go to ${item.city}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => goToAirport(airportIndex + 1)}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:border-amber-300 hover:text-amber-700"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
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
                'No cancellation — your confirmed ride stays confirmed',
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

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-amber-700 font-semibold uppercase tracking-wider text-xs">Special Travel Packages</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Pilgrim, hill-station, and custom long-route packages</h2>
          </motion.div>

          <div className="mt-7 flex flex-wrap gap-2">
            {packageShowcase.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setPackageTab(item.id)}
                className={[
                  'px-4 py-2 rounded-xl text-sm font-semibold transition-all',
                  packageTab === item.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-amber-300 hover:text-amber-700',
                ].join(' ')}
              >
                {item.label}
              </button>
            ))}
          </div>

          <motion.article
            key={activePackage.id}
            className="mt-5 glass-card p-6 sm:p-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="inline-flex items-center gap-2 text-amber-700 font-semibold text-sm">
              <ActivePackageIcon size={16} /> {activePackage.label}
            </div>
            <p className="mt-2 text-sm text-slate-600 max-w-3xl">{activePackage.intro}</p>

            <div className="mt-5 flex gap-3 overflow-x-auto pb-2 snap-x">
              {activePackage.items.map((place) => (
                <div
                  key={place}
                  className="snap-start min-w-[180px] sm:min-w-[220px] rounded-2xl border border-slate-200 bg-white px-4 py-4"
                >
                  <p className="text-sm font-semibold text-slate-800">{place}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid md:grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white border border-slate-200 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Route Planning</p>
                <p className="mt-1 text-sm text-slate-600">Stops, darshan timing, and return windows are optimized by route.</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Premium Comfort</p>
                <p className="mt-1 text-sm text-slate-600">Vehicle category and distance slab are matched to traveler count.</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Pickup-based Fare</p>
                <p className="mt-1 text-sm text-slate-600">Final package fare changes by pickup city and total travel route.</p>
              </div>
            </div>
          </motion.article>
          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
            Exclusive Sabari Malai package supports both Direct Visit and Temples Circuit from all major Tamil Nadu pickup points.
          </div>
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
