import { create } from 'zustand'
import { subscribeToAuthChanges, logoutUser, getCurrentUserData } from '../services/authService'

const useAuthStore = create((set, get) => ({
  user: null,
  userData: null,
  loading: true,
  initialized: false,

  setUser: (user) => set({ user }),
  setUserData: (userData) => set({ userData }),
  setLoading: (loading) => set({ loading }),

  initialize: () => {
    const unsubscribe = subscribeToAuthChanges(async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const userData = await getCurrentUserData(firebaseUser.uid)
          set({ user: firebaseUser, userData, loading: false, initialized: true })
        } catch (err) {
          console.error('Error loading user data:', err)
          set({ user: null, userData: null, loading: false, initialized: true })
        }
      } else {
        set({ user: null, userData: null, loading: false, initialized: true })
      }
    })
    
    return unsubscribe
  },

  logout: async () => {
    await logoutUser()
    set({ user: null, userData: null })
  },

  refreshUserData: async () => {
    const { user } = get()
    if (user) {
      const userData = await getCurrentUserData(user.uid)
      set({ userData })
    }
  },
}))
export default useAuthStore
