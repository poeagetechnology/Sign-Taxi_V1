import { create } from 'zustand'

const useDriverStore = create((set) => ({
  driverProfile: null,
  onlineDriverLocations: [],
  isOnline: false,

  setDriverProfile: (profile) => set({ driverProfile: profile, isOnline: profile?.isOnline ?? false }),
  setOnlineDriverLocations: (locations) => set({ onlineDriverLocations: locations }),
  setIsOnline: (isOnline) => set({ isOnline }),
  updateDriverProfile: (updates) =>
    set((state) => ({ driverProfile: state.driverProfile ? { ...state.driverProfile, ...updates } : null })),
}))

export default useDriverStore
