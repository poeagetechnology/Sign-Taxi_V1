import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  Download, 
  MapPin, 
  Users, 
  Star, 
  Calendar, 
  Mail, 
  ChevronRight,
  Shield,
  Clock,
  Award,
  Headphones,
  Menu,
  X,
  Navigation,
  Car,
  UserCheck,
  ThumbsUp,
  Sparkles,
  PhoneCall,
  Smartphone,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronDown,
  CircleCheck
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Import images (using placeholder paths - replace with actual imports)
import logoImage from '../Logo/Sign Taxi.bf513dbcfde59f174016.png';
import tamilNaduMap from '../Logo/Maps.6699bd4da22c4d42a29d.png';
import phoneMockupHero from '../Logo/WhatsApp Image 2026-04-10 at 3.02.23 PM.jpeg';
import phoneMockupFooter from '../Logo/WhatsApp Image 2026-04-10 at 3.02.23 PM.jpeg';
import car1 from '../Logo/car1.51065db376274ec8c8ec.png';
import car2 from '../Logo/car2.7cd21a81d443f7de7eb1.png';
import car3 from '../Logo/car3.0ea3c0e7752b7ef7342c.png';
import car4 from '../Logo/car4.1cd395cca91be6ae2cd1.png';
import heroBg from '../Logo/photo-1501785888041-af3ef285b470.avif';
import womanImage from '../Logo/photo-1502877338535-766e1452684a.avif';
import taxiOutlineGraphic from '../Logo/red-taxi-outline-city-graphic.webp';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const scaleOnHover = {
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  whileTap: { scale: 0.95 }
};

const SignTaxiLandingPage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTripType, setActiveTripType] = useState('oneway');
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Carousel slides data
  const carouselSlides = [
    {
      title: "No Ride Cancellations,",
      highlight: "No Extra Charges",
      desc: "We ensure safe rides and great value for your money every time",
      image: car1,
      background: heroBg
    },
    {
      title: "24/7 Direct",
      highlight: "Customer Support & Well Maintained Cabs",
      desc: "Your safety and comfort is our top priority always",
      image: car2,
      background: heroBg
    },
    {
      title: "Fixed Pricing,",
      highlight: "No Hidden Charges",
      desc: "Transparent fares - know your price before you book",
      image: car3,
      background: heroBg
    },
    {
      title: "Professional Drivers,",
      highlight: "Verified & Trained",
      desc: "Background checked and regularly trained for your safety",
      image: car4,
      background: heroBg
    }
  ];

  // Trip Types data
  const tripTypes = [
    {
      title: "Hourly Rental",
      desc: "With SignTaxi's hourly rentals, you can make multiple stops as needed without any difficulties. Book rentals from 1 to 12 hours.",
      image: car1,
      features: ["Flexible stops", "Affordable rates", "24/7 support"],
      price: "₹199/hr"
    },
    {
      title: "Airport Taxi",
      desc: "We ensure punctuality, transparent fares, and experienced & well-mannered drivers as a spectacle of our taxi service.",
      image: car2,
      features: ["Flight tracking", "Meet & greet", "Luggage assistance"],
      price: "From ₹499"
    },
    {
      title: "Oneway Trip",
      desc: "Travel comfortably in the city with SignTaxi sedans and minivans, starting at just ₹12/km. Book anytime, even during rush hours.",
      image: car3,
      features: ["No return fare", "Fixed pricing", "Instant booking"],
      price: "₹12/km"
    },
  ];

  // Cab Types
  const cabTypes = [
    { title: "Pink Taxi", desc: "By Women, for Women - Safe and comfortable rides driven by trained female drivers.", image: car1, tag: "Women Safety" },
    { title: "Traveller", desc: "Perfect for family trips and group outings with spacious seating and luggage space.", image: car2, tag: "Group Travel" },
    { title: "Urbania", desc: "Luxury travel is just a click away with premium interiors and professional chauffeurs.", image: car4, tag: "Premium" },
  ];

  // Cities
  const cities = [
    "Trichy", "Madurai", "Erode", "Hosur", "Thanjavur", "Dindigul", "Salem", "Tirupur",
    "Karur", "Pollachi", "Vellore", "Tirunelveli", "Mettupalayam", "Villupuram"
  ];

  // Testimonials
  const testimonials = [
    { name: "Pragatheeswaran R", role: "Business Traveler", text: "Very pleased with their service. The booking process is very clear and simple. Punctuality is outstanding!", rating: 5, image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Praveen Kumar", role: "Frequent Flyer", text: "Very professional and prompt service. Drivers are well trained and courteous. My go-to for airport transfers.", rating: 5, image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Pavithra Radhakrishnan", role: "Family Customer", text: "Great experience with Pink Taxi service. Felt completely safe during my late-night commute. Highly recommended!", rating: 5, image: "https://randomuser.me/api/portraits/women/3.jpg" },
  ];

  // Stats
  const stats = [
    { value: "50K+", label: "Happy Customers", icon: Users },
    { value: "98%", label: "On-Time Arrival", icon: Clock },
    { value: "4.9", label: "Customer Rating", icon: Star },
    { value: "24/7", label: "Customer Support", icon: Headphones },
  ];

  // Features
  const features = [
    { title: "No Cancellations", desc: "We never cancel last minute", icon: Shield },
    { title: "Fixed Pricing", desc: "No surge pricing or hidden charges", icon: Award },
    { title: "Safe Rides", desc: "Verified drivers and GPS tracking", icon: UserCheck },
    { title: "24/7 Support", desc: "Round the clock customer service", icon: Headphones },
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* ==================== NAVIGATION ==================== */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img src={logoImage} alt="SignTaxi" className="h-12" />
          </motion.div>

          <div className="hidden lg:flex items-center gap-10">
            <motion.a
              href="/"
              className="text-gray-700 hover:text-[#ff5e1a] font-medium transition-colors relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 * 0.05 }}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff5e1a] transition-all group-hover:w-full"></span>
            </motion.a>
            <motion.a
              href="/about"
              className="text-gray-700 hover:text-[#ff5e1a] font-medium transition-colors relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 * 0.05 }}
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff5e1a] transition-all group-hover:w-full"></span>
            </motion.a>
            <motion.a
              href="/corporate"
              className="text-gray-700 hover:text-[#ff5e1a] font-medium transition-colors relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 * 0.05 }}
            >
              Corporate
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff5e1a] transition-all group-hover:w-full"></span>
            </motion.a>
            <motion.a
              href="/cabs"
              className="text-gray-700 hover:text-[#ff5e1a] font-medium transition-colors relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 * 0.05 }}
            >
              Cabs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff5e1a] transition-all group-hover:w-full"></span>
            </motion.a>
            <motion.a
              href="/book-trip"
              className="text-gray-700 hover:text-[#ff5e1a] font-medium transition-colors relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4 * 0.05 }}
            >
              Book a Trip
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff5e1a] transition-all group-hover:w-full"></span>
            </motion.a>
            <motion.button
              onClick={() => navigate('/login')}
              className="text-gray-700 hover:text-[#ff5e1a] font-medium transition-colors relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5 * 0.05 }}
            >
              Become a Partner
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff5e1a] transition-all group-hover:w-full"></span>
            </motion.button>
          </div>

          <motion.button
            {...scaleOnHover}
            onClick={() => navigate('/login')}
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#ff5e1a] to-[#ff914c] text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-md hover:shadow-xl transition-all"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Sign In
          </motion.button>

          <motion.button
            {...scaleOnHover}
            className="hidden lg:flex items-center gap-2 bg-white/10 text-gray-700 hover:bg-white/20 border border-gray-200 px-6 py-2.5 rounded-full font-semibold text-sm shadow-md hover:shadow-xl transition-all ml-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Download size={18} /> Download App
          </motion.button>

          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: mobileOpen ? 'auto' : 0, opacity: mobileOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white border-t"
        >
          <div className="px-6 py-4 space-y-3 flex flex-col">
            <Link
              to="/"
              className="py-2 text-gray-700 hover:text-[#ff5e1a] font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-2 text-gray-700 hover:text-[#ff5e1a] font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/corporate"
              className="py-2 text-gray-700 hover:text-[#ff5e1a] font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Corporate
            </Link>
            <Link
              to="/cabs"
              className="py-2 text-gray-700 hover:text-[#ff5e1a] font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Cabs
            </Link>
            <button
              onClick={() => {
                window.location.href = '/book-trip';
                setMobileOpen(false);
              }}
              className="py-2 text-gray-700 hover:text-[#ff5e1a] font-medium transition-colors text-left"
            >
              Book a Trip
            </button>
            <button
              onClick={() => {
                navigate('/login');
                setMobileOpen(false);
              }}
              className="py-2 text-gray-700 hover:text-[#ff5e1a] font-medium transition-colors text-left"
            >
              Become a Partner
            </button>
            <button
              onClick={() => {
                navigate('/login');
                setMobileOpen(false);
              }}
              className="py-3 px-6 bg-gradient-to-r from-[#ff5e1a] to-[#ff914c] text-white rounded-full font-semibold text-sm text-center w-full mt-2"
            >
              Sign In
            </button>
            <button className="w-full mt-4 bg-white text-gray-800 hover:bg-gray-100 px-6 py-2.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2">
              <Download size={18} /> Download App
            </button>
          </div>
        </motion.div>
      </nav>

      {/* ==================== HERO CAROUSEL SECTION ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          {/* <img 
            src={carouselSlides[currentSlide].background} 
            alt="Background" 
            className="w-full h-full object-cover transition-opacity duration-1000"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff5e1a]/95 to-[#ff914c]/90"></div>
        </div>

        {/* Carousel Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center min-h-[auto] lg:min-h-[600px]">
              {/* Left Content */}
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 md:space-y-8 text-white"
              >
                <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                  {carouselSlides[currentSlide].title}
                  <br />
                  <span className="text-amber-300">{carouselSlides[currentSlide].highlight}</span>
                </motion.h1>
                
                <motion.p className="text-sm md:text-lg lg:text-xl max-w-md text-white/90">
                  {carouselSlides[currentSlide].desc}
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <motion.a
                    {...scaleOnHover}
                    href="#"
                    className="flex items-center justify-center gap-2 md:gap-3 bg-amber-400 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold shadow-2xl hover:bg-amber-300 text-sm md:text-base"
                  >
                    <Download size={20} className="md:w-6 md:h-6" /> Download App
                  </motion.a>
                  <motion.a
                    {...scaleOnHover}
                    href="#"
                    className="flex items-center justify-center gap-2 md:gap-3 border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-white/10 transition-colors text-sm md:text-base"
                  >
                    <PhoneCall size={18} className="md:w-5 md:h-5" /> Book Now
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Right Side - Car Image - Hidden on mobile, shown on md+ */}
              <motion.div
                key={`car-${currentSlide}`}
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 50 }}
                transition={{ duration: 0.6 }}
                className="hidden md:relative md:flex justify-center lg:justify-end"
              >
                <img
                  src={carouselSlides[currentSlide].image}
                  alt="SignTaxi Car"
                  className="w-full max-w-xs md:max-w-md lg:max-w-lg drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <div className="hidden md:flex absolute bottom-16 md:bottom-20 left-6 lg:left-12 z-20 gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentSlide((prev) => (prev - 1 + 4) % 4)}
              className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white text-white flex items-center justify-center hover:bg-white/30 transition-all"
            >
              <ChevronRight size={24} className="rotate-180" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentSlide((prev) => (prev + 1) % 4)}
              className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white text-white flex items-center justify-center hover:bg-white/30 transition-all"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
            {[0, 1, 2, 3].map((idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-3 rounded-full transition-all ${
                  currentSlide === idx 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 w-3 hover:bg-white/70'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative h-16 w-full">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="white"></path>
            <path d="M0,0V15.81C13,21.25,27.93,25.67,44.24,28.45c69.76,11.6,136.47,7.22,206.42-5.49C336.52,7.77,413.68,30.6,483.81,47.8c56.24,13.55,111.87,21.34,168.23,16.58,49.1-4.16,95.86-19.17,142.24-34.73,38.1-12.8,75.88-26.17,114.82-32.86C1003.48,0,1102.62,1.24,1200,15.81V0Z" opacity=".5" fill="white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* ==================== BOOKING FORM ==================== */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 -mt-8 md:-mt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 border border-gray-100"
        >
          <div className="flex flex-wrap gap-2 border-b pb-4 mb-6 overflow-x-auto">
            {[
              { id: 'oneway', label: 'Oneway Trip', icon: Navigation },
              { id: 'outstation', label: 'Outstation', icon: MapPin },
              { id: 'rental', label: 'Rental', icon: Clock }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTripType(tab.id)}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-2xl font-semibold transition-all flex items-center gap-2 text-xs md:text-base whitespace-nowrap ${
                  activeTripType === tab.id 
                    ? 'bg-gradient-to-r from-[#ff5e1a] to-[#ff914c] text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <tab.icon size={16} className="md:w-5 md:h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-6">
            <div className="md:col-span-2">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">From*</label>
              <div className="border rounded-xl md:rounded-2xl p-3 md:p-4 mt-1 flex items-center gap-2 md:gap-3 focus-within:border-[#ff914c] focus-within:ring-2 focus-within:ring-[#ff914c]/20 transition-all">
                <MapPin className="text-[#ff914c] flex-shrink-0" size={18} />
                <select className="w-full outline-none bg-transparent text-gray-700 text-sm md:text-base">
                  <option>Select Pickup City</option>
                  {cities.map(city => <option key={city}>{city}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">To*</label>
              <div className="border rounded-xl md:rounded-2xl p-3 md:p-4 mt-1 flex items-center gap-2 md:gap-3 focus-within:border-[#ff914c] focus-within:ring-2 focus-within:ring-[#ff914c]/20 transition-all">
                <MapPin className="text-[#ff914c] flex-shrink-0" size={18} />
                <input type="text" placeholder="Destination" className="w-full outline-none bg-transparent text-sm md:text-base" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Date*</label>
              <div className="border rounded-xl md:rounded-2xl p-3 md:p-4 mt-1 flex items-center gap-2 md:gap-3 focus-within:border-[#ff914c] focus-within:ring-2 focus-within:ring-[#ff914c]/20 transition-all">
                <Calendar className="text-[#ff914c] flex-shrink-0" size={18} />
                <input type="date" className="w-full outline-none bg-transparent text-sm md:text-base" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile No*</label>
              <div className="border rounded-xl md:rounded-2xl p-3 md:p-4 mt-1 flex items-center gap-2 md:gap-3 focus-within:border-[#ff914c] focus-within:ring-2 focus-within:ring-[#ff914c]/20 transition-all">
                <Phone className="text-[#ff914c] flex-shrink-0" size={18} />
                <input type="tel" placeholder="Mobile" className="w-full outline-none bg-transparent text-sm md:text-base" />
              </div>
            </div>
          </div>

          <motion.button
            {...scaleOnHover}
            className="w-full mt-6 md:mt-8 bg-gradient-to-r from-[#ff5e1a] to-[#ff914c] text-white py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg shadow-xl flex items-center justify-center gap-2"
          >
            Find Your Ride <ChevronRight size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* ==================== FEATURES ==================== */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="text-center p-5 md:p-6 rounded-xl md:rounded-2xl bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-[#ff5e1a] to-[#ff914c] rounded-2xl flex items-center justify-center mb-3 md:mb-4 shadow-lg">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== BOOK A TRIP SECTION ==================== */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#ff5e1a] to-[#ff914c] text-white relative overflow-hidden">
        {/* Decorative curve at bottom */}
        <div className="hidden md:block absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full -mr-48 -mb-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-12">
                Book a Trip
              </motion.h2>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-6 mb-10"
              >
                {[
                  { title: "Oneway Trip", desc: "Quick and affordable city rides" },
                  { title: "Round Trip", desc: "Come back without extra charges" },
                  { title: "Hourly Rental", desc: "Travel at your own pace" },
                  { title: "Bulk Booking", desc: "Group travel made easy" },
                  { title: "Airport Taxi", desc: "Reliable airport transfers" }
                ].map((trip, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                    <div>
                      <h3 className="font-bold text-lg">{trip.title}</h3>
                      <p className="text-white/80 text-sm">{trip.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                {...scaleOnHover}
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-xl"
              >
                Explore all trips →
              </motion.button>
            </motion.div>

            {/* Right Content - Car Image - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:flex justify-center lg:justify-end relative"
            >
              <img
                src={car1}
                alt="Book a Trip"
                className="w-full max-w-xs md:max-w-md lg:max-w-lg drop-shadow-2xl"
              />
              {/* Yellow curve decoration */}
              <div className="hidden lg:block absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== TRIP TYPES ==================== */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10 md:mb-16"
          >
            <motion.span variants={fadeInUp} className="text-[#ff5e1a] font-semibold uppercase tracking-wider text-xs md:text-sm">Our Services</motion.span>
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Choose Your Perfect Trip</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Whether you need a quick city ride or a comfortable outstation journey, we've got you covered
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {tripTypes.map((trip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
              >
                <div className="relative overflow-hidden h-48 md:h-64">
                  <img 
                    src={trip.image} 
                    alt={trip.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold text-[#ff5e1a]">
                    {trip.price}
                  </div>
                </div>
                <div className="p-5 md:p-8">
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">{trip.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">{trip.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {trip.features.map((feat, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 px-2 md:px-3 py-1 rounded-full text-gray-600">
                        {feat}
                      </span>
                    ))}
                  </div>
                  <button className="text-[#ff5e1a] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Book Now <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CAB TYPES ==================== */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10 md:mb-16"
          >
            <motion.span variants={fadeInUp} className="text-[#ff5e1a] font-semibold uppercase tracking-wider text-xs md:text-sm">Our Fleet</motion.span>
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Cab Types for Every Traveler</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              From economical rides to luxury experiences, choose the perfect cab for your journey
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {cabTypes.map((cab, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-40 md:h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 md:p-6">
                  <img src={cab.image} alt={cab.title} className="max-h-32 md:max-h-40 object-contain" />
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-[#ff5e1a] text-white text-xs px-2 md:px-3 py-1 rounded-full">
                    {cab.tag}
                  </div>
                </div>
                <div className="p-5 md:p-8">
                  <h3 className="font-bold text-lg md:text-2xl mb-2">{cab.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{cab.desc}</p>
                  <button className="mt-6 text-[#ff5e1a] font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                    Learn More <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#ff5e1a] to-[#ff914c] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-amber-200 font-semibold uppercase tracking-wider text-xs md:text-sm">Why Choose Us</motion.span>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 md:mb-6">
                Your Safety & Comfort, Our Priority
              </motion.h2>
              <motion.div variants={staggerContainer} className="space-y-3 md:space-y-4">
                {[
                  "24/7 Customer Support with Real-time Tracking",
                  "Verified & Professional Drivers with Background Check",
                  "Clean, Sanitized & Well-maintained Vehicles",
                  "Transparent Pricing with No Hidden Charges",
                  "Instant Booking & Quick Confirmation"
                ].map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex items-center gap-2 md:gap-3">
                    <CircleCheck className="text-amber-300 flex-shrink-0" size={20} />
                    <span className="text-sm md:text-base">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:relative relative"
            >
              <img src={car4} alt="Premium Car" className="rounded-2xl md:rounded-3xl shadow-2xl w-full" />
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <ThumbsUp className="text-[#ff5e1a] flex-shrink-0" size={20} />
                  <div>
                    <div className="font-bold text-gray-900 text-sm md:text-base">98% Customer</div>
                    <div className="text-xs md:text-sm text-gray-500">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICEABLE CITIES ==================== */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-[#ff5e1a] font-semibold uppercase tracking-wider text-xs md:text-sm">Coverage</motion.span>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 md:mb-8">
                Our Serviceable Cities in Tamil Nadu
              </motion.h2>
              <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-y-3 md:gap-y-4 gap-x-4 md:gap-x-8">
                {cities.map((city, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-center gap-2 md:gap-3 text-gray-700 text-sm md:text-base">
                    <div className="w-2 h-2 bg-[#ff5e1a] rounded-full flex-shrink-0"></div>
                    {city}
                  </motion.div>
                ))}
              </motion.div>
              <motion.button
                {...scaleOnHover}
                className="mt-6 md:mt-10 px-6 md:px-8 py-2 md:py-3 border-2 border-[#ff5e1a] text-[#ff5e1a] rounded-full font-semibold hover:bg-[#ff5e1a] hover:text-white transition-all text-sm md:text-base"
              >
                View All Cities
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden md:flex justify-center lg:justify-end"
            >
              <img src={tamilNaduMap} alt="Tamil Nadu Map" className="max-w-xs md:max-w-lg drop-shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10 md:mb-16"
          >
            <motion.span variants={fadeInUp} className="text-[#ff5e1a] font-semibold uppercase tracking-wider text-xs md:text-sm">Testimonials</motion.span>
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
              Your Satisfaction, Our Success
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Hear what our customers have to say about their experience with SignTaxi
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <img src={t.image} alt={t.name} className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm md:text-base">{t.name}</p>
                    <p className="text-xs md:text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 text-lg md:text-xl mb-3 md:mb-4">
                  {[...Array(t.rating)].map((_, idx) => <Star key={idx} fill="currentColor" size={16} className="md:w-5 md:h-5" />)}
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PARTNER / DRIVER SECTION ==================== */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-10 text-white shadow-2xl"
            >
              <div className="flex items-start justify-between">
                <div>
                  <Users size={40} className="text-[#ff914c] mb-3 md:mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Partner with Us</h3>
                  <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">Have a fleet? Join our network and get consistent bookings with competitive earnings.</p>
                  <button className="px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-[#ff5e1a] to-[#ff914c] rounded-full font-semibold hover:shadow-lg transition-all text-sm md:text-base">
                    Become a Partner
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#ff5e1a] to-[#ff914c] rounded-2xl md:rounded-3xl p-6 md:p-10 text-white shadow-2xl"
            >
              <div className="flex items-start justify-between">
                <div>
                  <Car size={40} className="text-amber-300 mb-3 md:mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Drive with Us</h3>
                  <p className="text-white/90 mb-4 md:mb-6 text-sm md:text-base">Don't have a car? Join as a driver and earn a stable income with flexible working hours.</p>
                  <button className="px-6 md:px-8 py-2 md:py-3 bg-white text-[#ff5e1a] rounded-full font-semibold hover:shadow-lg transition-all text-sm md:text-base">
                    Become a Driver
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== DOWNLOAD APP SECTION ==================== */}
      <section className="py-12 md:py-20 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Ready to experience the best rides?</h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8">Download the SignTaxi App now and get exclusive offers on your first ride!</p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
                <motion.a
                  {...scaleOnHover}
                  href="#"
                  className="flex items-center justify-center gap-2 md:gap-3 bg-amber-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold text-sm md:text-base"
                >
                  <Smartphone size={20} className="md:w-6 md:h-6" /> App Store
                </motion.a>
                <motion.a
                  {...scaleOnHover}
                  href="#"
                  className="flex items-center justify-center gap-2 md:gap-3 bg-amber-100 backdrop-blur-sm text-amber-900 px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold border border-amber-200 text-sm md:text-base"
                >
                  <Download size={20} className="md:w-6 md:h-6" /> Google Play
                </motion.a>
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                <div className="bg-gray-100 p-2 md:p-3 rounded-2xl flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-lg md:rounded-xl flex items-center justify-center">
                    <span className="text-gray-900 text-xs">QR Code</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-600">Scan to download</p>
                  <p className="font-semibold text-gray-900 text-sm md:text-base">Available on iOS & Android</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              className="hidden md:flex justify-center lg:justify-end"
            >
              <img
                src={phoneMockupFooter}
                alt="Download App"
                className="w-64 md:w-72 lg:w-80 shadow-2xl rounded-2xl md:rounded-3xl border-4 border-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER GRAPHIC ==================== */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 py-8 md:py-12 flex justify-center">
        <img src={taxiOutlineGraphic} alt="SignTaxi" className="h-32 md:h-40 lg:h-48 object-contain" />
      </div>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-white text-gray-700 py-12 md:py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <img src={logoImage} alt="SignTaxi" className="h-8 md:h-10" />
              </div>
              <p className="text-xs md:text-sm leading-relaxed">Experience the cleanest, most comfortable, and well-maintained cabs in the city. Your trusted partner for safe and reliable transportation.</p>
              <div className="flex gap-3 md:gap-4 mt-4 md:mt-6">
                <Facebook size={16} className="hover:text-amber-500 cursor-pointer transition-colors" />
                <Twitter size={16} className="hover:text-amber-500 cursor-pointer transition-colors" />
                <Instagram size={16} className="hover:text-amber-500 cursor-pointer transition-colors" />
                <Linkedin size={16} className="hover:text-amber-500 cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                {['Home', 'About Us', 'Corporate', 'Contact Us', 'Blog'].map(link => (
                  <li key={link} className="hover:text-amber-500 cursor-pointer transition-colors">{link}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Our Services</h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                {['Oneway Trip', 'Airport Transfer', 'Hourly Rental', 'Outstation Trip', 'Corporate Booking'].map(service => (
                  <li key={service} className="hover:text-amber-500 cursor-pointer transition-colors">{service}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Contact Us</h4>
              <div className="space-y-2 md:space-y-3 text-sm md:text-lg font-medium">
                <a href="tel:+918300399599" className="flex items-center gap-2 md:gap-3 hover:text-amber-500 transition-colors">
                  <Phone size={16} className="md:w-5 md:h-5 flex-shrink-0" /> +91 83003 99599
                </a>
                <a href="tel:+914222314599" className="flex items-center gap-2 md:gap-3 hover:text-amber-500 transition-colors">
                  <Phone size={16} className="md:w-5 md:h-5 flex-shrink-0" /> +91 422 231 4599
                </a>
                <a href="https://wa.me/918300399599" target="_blank" className="flex items-center gap-2 md:gap-3 hover:text-amber-500 transition-colors">
                  <MessageSquare size={16} className="md:w-5 md:h-5 flex-shrink-0" /> WhatsApp
                </a>
                <a href="mailto:support@signtaxi.com" className="flex items-center gap-2 md:gap-3 hover:text-amber-500 transition-colors">
                  <Mail size={16} className="md:w-5 md:h-5 flex-shrink-0" /> support@signtaxi.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-xs md:text-xs">
            <p>&copy; 2026 SignTaxi. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignTaxiLandingPage;