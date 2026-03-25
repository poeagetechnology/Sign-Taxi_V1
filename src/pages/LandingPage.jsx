import React from 'react'
import LandingNavbar from '../components/landing/LandingNavbar'
import Hero from '../components/landing/Hero'
import Stats from '../components/landing/Stats'
import Features from '../components/landing/Features'
import HowItWorks from '../components/landing/HowItWorks'
import Testimonials from '../components/landing/Testimonials'
import Pricing from '../components/landing/Pricing'
import CTA from '../components/landing/CTA'
import Footer from '../components/landing/Footer'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <LandingNavbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default LandingPage
