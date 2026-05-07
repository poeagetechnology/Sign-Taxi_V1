import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Clock, Shield, Smile, Users, Award, ChevronRight } from 'lucide-react';
import PublicLayout from '../components/layout/PublicLayout';

import carImage from '../Logo/car1.51065db376274ec8c8ec.png';

const AboutUs = () => {
  // (kept local state/hooks for timeline animations)
  
  const milestones = [
    { year: "2012", event: "Inception in Coimbatore", description: "Started our journey with a vision to revolutionize taxi services", icon: "🚀" },
    { year: "2013", event: "Roll Out of Go Taxi", description: "Launched our first fleet of premium taxis", icon: "🚕" },
    { year: "2017", event: "Expansion to Erode", description: "Extended our services to Erode city", icon: "🏙️" },
    { year: "2018", event: "Starts Moving People of Madurai & Trichy", description: "Became the preferred choice in two major cities", icon: "🌆" },
    { year: "2019", event: "Launched in Salem & Tiruppur", description: "Rapid expansion across Tamil Nadu", icon: "📍" },
    { year: "2019", event: "Launched Pink Taxi", description: "Specialized service for women's safety", icon: "💕" },
    { year: "2020", event: "Red Auto Launched in Madurai", description: "Introduced auto-rickshaw services", icon: "🛺" },
    { year: "2023", event: "Launched in Chennai", description: "Entered the metropolitan market", icon: "🌊" },
    { year: "2024", event: "Launched in Pollachi", description: "Connected smaller towns to our network", icon: "🏞️" },
    { year: "2025", event: "Launched in Karur & Tirunelveli", description: "Continuing our expansion across Tamil Nadu", icon: "✨" },
  ];

  return (
    <PublicLayout>
      <div className="min-h-screen bg-white font-sans">

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-amber-600 to-rose-600 pt-10 sm:pt-12 md:pt-16 pb-8 md:pb-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">About Us</h1>
              <p className="text-base md:text-lg lg:text-xl mt-2 md:mt-3">Tamil Nadu's Most Trusted Taxi Services</p>
            </div>
            <img 
              src={carImage}
              alt="White Car" 
              className="hidden md:block h-40 md:h-48 lg:h-52 -mb-0 md:-mb-6" 
            />
          </div>
        </div>
      </div>

      {/* Trusted Service Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Most Trusted <span className="text-amber-700">Service</span> Provider
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                SignTaxi has emerged as the most trusted taxi service provider in Tamilnadu 
                covering all major cities, with more than 15,000+ cabs running successfully.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                We take pride in serving millions of satisfied customers with our commitment 
                to safety, punctuality, and comfort.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { number: "15K+", label: "Active Cabs", icon: <Car className="w-6 h-6 md:w-8 md:h-8" /> },
                { number: "5M+", label: "Happy Riders", icon: <Smile className="w-6 h-6 md:w-8 md:h-8" /> },
                { number: "50K+", label: "Daily Trips", icon: <Clock className="w-6 h-6 md:w-8 md:h-8" /> },
                { number: "98%", label: "On-Time Rate", icon: <Award className="w-6 h-6 md:w-8 md:h-8" /> },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md text-center">
                  <div className="text-[#ff914c] flex justify-center mb-2 md:mb-3">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-800">{stat.number}</div>
                  <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Timeline Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-slate-900">
              Our Journey
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Tracing our path of growth and excellence across Tamil Nadu
            </p>
            <div className="w-20 sm:w-24 h-1 bg-amber-600 mx-auto mt-5 sm:mt-6 rounded-full"></div>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-600/20 via-amber-600 to-amber-600/20"></div>

            {/* Milestones */}
            <div className="space-y-20">
              {milestones.map((milestone, index) => (
                <TimelineItem key={index} milestone={milestone} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </PublicLayout>
  );
};

// Timeline Item Component with Scroll Animation
const TimelineItem = ({ milestone, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { 
            duration: 0.6, 
            ease: "easeOut",
            staggerChildren: 0.2
          }
        }
      }}
      className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content */}
      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff914c] to-[#ff5e1a] rounded-2xl flex items-center justify-center text-3xl shadow-md group-hover:scale-110 transition-transform">
              {milestone.icon}
            </div>
            <div>
              <div className="text-sm font-semibold text-[#ff914c] uppercase tracking-wide">Milestone</div>
              <div className="text-3xl font-bold text-gray-800">{milestone.year}</div>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">{milestone.event}</h3>
          <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-0.5 bg-gradient-to-r from-[#ff914c] to-transparent mt-4"
          />
        </motion.div>
      </div>

      {/* Center Dot */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex justify-center z-10">
        <motion.div
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { 
              scale: 1, 
              opacity: 1,
              transition: { 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: 0.2
              }
            }
          }}
          className="relative"
        >
          <div className="w-5 h-5 bg-[#ff914c] rounded-full shadow-lg"></div>
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.6, 0, 0.6]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="absolute inset-0 w-5 h-5 bg-[#ff914c] rounded-full"
          />
        </motion.div>
      </div>

      {/* Empty spacer for alignment */}
      <div className="hidden md:block w-1/2"></div>
    </motion.div>
  );
};

// Import missing icons
const Car = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 4h8m-8 4h8M4 3h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2z" />
  </svg>
);

export default AboutUs;