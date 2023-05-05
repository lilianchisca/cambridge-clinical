import { create } from 'zustand'

type State = {
  showLogin: boolean
}

type Actions = {
  showLoginSet: (showLogin: boolean) => void
}

export const useGlobalStore = create<State & Actions>()((set) => ({
  showLogin: false,
  showLoginSet: (showLogin) => set({ showLogin }),
}))
