import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import MobileDrawer from './MobileDrawer'
import useAuthStore from '../../store/authStore'

const AppLayout = ({ children, title }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { userData } = useAuthStore()
  const role = userData?.role || 'user'

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar role={role} />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} role={role} />

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar onMenuClick={() => setDrawerOpen(true)} title={title} />
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AppLayout
