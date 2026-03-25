import React from 'react'
import { Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: ['Features', 'How It Works', 'Pricing', 'Safety'],
    Company: ['About Us', 'Blog', 'Careers', 'Press'],
    Support: ['Help Center', 'Contact', 'Feedback', 'Status'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance'],
  }

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-700' },
  ]

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -mt-48"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 border-b border-slate-800">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z"/>
                </svg>
              </div>
              <span className="font-display text-2xl font-bold text-white">SignTaxi</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Fast, safe, and reliable taxi service at your fingertips. Your journey, our priority.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href="#"
                    className={`w-9 h-9 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="py-16 border-b border-slate-800">
          <div className="max-w-md">
            <h3 className="font-display text-2xl font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-6">Get exclusive offers and updates delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            <p>&copy; {currentYear} Sign Taxi. All rights reserved.</p>
            <p className="mt-1 text-xs">Transforming urban mobility, one ride at a time.</p>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            Made with
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            by Sign Taxi Team
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
