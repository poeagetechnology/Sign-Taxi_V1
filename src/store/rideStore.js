import { create } from 'zustand'

const useRideStore = create((set) => ({
  activeRide: null,
  rideHistory: [],
  pendingRides: [],
  allRides: [],

  setActiveRide: (ride) => set({ activeRide: ride }),
  setRideHistory: (history) => set({ rideHistory: history }),
  setPendingRides: (rides) => set({ pendingRides: rides }),
  setAllRides: (rides) => set({ allRides: rides }),
  clearActiveRide: () => set({ activeRide: null }),
}))

export default useRideStore
