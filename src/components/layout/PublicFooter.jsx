import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MessageSquare, Phone, ShieldCheck, Clock3 } from 'lucide-react'
import LogoWithTM from '../common/LogoWithTM'

export default function PublicFooter() {
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <LogoWithTM imgClassName="h-10 object-contain brightness-110" tmClassName="text-amber-400" />
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              Premium taxi booking with predictable fares, proactive support, and a safety-first ride experience.
            </p>
            <div className="mt-4 space-y-2 text-xs text-slate-400">
              <p className="flex items-center gap-2"><ShieldCheck size={14} className="text-amber-400" /> Driver identity verified</p>
              <p className="flex items-center gap-2"><Clock3 size={14} className="text-amber-400" /> 24x7 operational support</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white text-sm">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:text-amber-300 transition-colors" to="/">Home</Link></li>
              <li><Link className="hover:text-amber-300 transition-colors" to="/about">About</Link></li>
              <li><Link className="hover:text-amber-300 transition-colors" to="/corporate">Corporate</Link></li>
              <li><Link className="hover:text-amber-300 transition-colors" to="/cabs">Fleet</Link></li>
              <li><Link className="hover:text-amber-300 transition-colors" to="/book-trip">Book Trip</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white text-sm">Services</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>City Booking</li>
              <li>Airport Transfer</li>
              <li>Hourly Rental</li>
              <li>Outstation Ride</li>
              <li>Corporate Mobility</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white text-sm">Contact</p>
            <div className="mt-3 space-y-2.5 text-sm">
              <a className="flex items-center gap-2 hover:text-amber-300 transition-colors" href="tel:+918300399599">
                <Phone size={16} className="flex-shrink-0" /> +91 83003 99599
              </a>
              <a className="flex items-center gap-2 hover:text-amber-300 transition-colors" href="tel:+914222314599">
                <Phone size={16} className="flex-shrink-0" /> +91 422 231 4599
              </a>
              <a className="flex items-center gap-2 hover:text-amber-300 transition-colors" href="https://wa.me/918300399599" target="_blank" rel="noreferrer">
                <MessageSquare size={16} className="flex-shrink-0" /> WhatsApp
              </a>
              <a className="flex items-center gap-2 hover:text-amber-300 transition-colors" href="mailto:support@signtaxi.com">
                <Mail size={16} className="flex-shrink-0" /> support@signtaxi.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-400 text-center">
          © 2026 SignTaxi. Crafted for fast, elegant, and safe mobility.
        </div>
      </div>
    </footer>
  )
}
