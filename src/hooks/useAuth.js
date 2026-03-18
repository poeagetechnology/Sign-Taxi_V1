import { useEffect } from 'react'
import useAuthStore from '../store/authStore'

export const useAuth = () => {
  const { user, userData, loading, initialized, initialize, logout, refreshUserData } = useAuthStore()

  useEffect(() => {
    const unsubscribe = initialize()
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe()
    }
  }, [])

  return { user, userData, loading, initialized, logout, refreshUserData }
}
