import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MessageSquare, Phone } from 'lucide-react'

export default function PublicFooter() {
  return (
    <footer className="bg-white text-slate-700 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display font-extrabold text-slate-900 text-xl tracking-tight">
              SignTaxi
            </p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Clean, comfortable, and reliable rides across Tamil Nadu with transparent pricing and professional drivers.
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900 text-sm">Quick links</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:text-amber-700 transition-colors" to="/">Home</Link></li>
              <li><Link className="hover:text-amber-700 transition-colors" to="/about">About Us</Link></li>
              <li><Link className="hover:text-amber-700 transition-colors" to="/corporate">Corporate</Link></li>
              <li><Link className="hover:text-amber-700 transition-colors" to="/cabs">Cabs</Link></li>
              <li><Link className="hover:text-amber-700 transition-colors" to="/book-trip">Book a Trip</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-slate-900 text-sm">Services</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Oneway Trip</li>
              <li>Airport Transfer</li>
              <li>Hourly Rental</li>
              <li>Outstation Trip</li>
              <li>Corporate Booking</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-slate-900 text-sm">Contact</p>
            <div className="mt-3 space-y-2.5 text-sm">
              <a
                className="flex items-center gap-2 hover:text-amber-700 transition-colors"
                href="tel:+918300399599"
              >
                <Phone size={16} className="flex-shrink-0" /> +91 83003 99599
              </a>
              <a
                className="flex items-center gap-2 hover:text-amber-700 transition-colors"
                href="tel:+914222314599"
              >
                <Phone size={16} className="flex-shrink-0" /> +91 422 231 4599
              </a>
              <a
                className="flex items-center gap-2 hover:text-amber-700 transition-colors"
                href="https://wa.me/918300399599"
                target="_blank"
                rel="noreferrer"
              >
                <MessageSquare size={16} className="flex-shrink-0" /> WhatsApp
              </a>
              <a
                className="flex items-center gap-2 hover:text-amber-700 transition-colors"
                href="mailto:support@signtaxi.com"
              >
                <Mail size={16} className="flex-shrink-0" /> support@signtaxi.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 text-xs text-slate-500 text-center">
          © 2026 SignTaxi. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

