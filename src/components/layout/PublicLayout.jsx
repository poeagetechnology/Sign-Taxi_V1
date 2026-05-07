import React from 'react'
import PublicNavbar from './PublicNavbar'
import PublicFooter from './PublicFooter'

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <PublicNavbar />
      <main className="min-w-0">{children}</main>
      <PublicFooter />
    </div>
  )
}

