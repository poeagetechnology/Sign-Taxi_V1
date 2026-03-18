import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuthStore from '../store/authStore'

const ProtectedRoute = () => {
  const { user, initialized } = useAuthStore()

  if (!initialized) return null

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
