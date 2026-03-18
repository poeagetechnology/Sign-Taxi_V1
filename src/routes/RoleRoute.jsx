import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuthStore from '../store/authStore'

const RoleRoute = ({ allowedRoles }) => {
  const { userData } = useAuthStore()

  if (!userData) return <Navigate to="/login" replace />

  if (!allowedRoles.includes(userData.role)) {
    // Redirect to the user's correct home
    if (userData.role === 'admin') return <Navigate to="/admin/dashboard" replace />
    if (userData.role === 'driver') return <Navigate to="/driver/dashboard" replace />
    return <Navigate to="/user/home" replace />
  }

  return <Outlet />
}

export default RoleRoute
