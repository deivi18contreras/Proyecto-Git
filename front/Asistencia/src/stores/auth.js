import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false
  }),
  actions: {
    login(email) {
      if (email && email.endsWith('@sanjose.edu.co')) {
        this.user = { email }
        this.isAuthenticated = true
      }
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
    }
  },
  persist: true
})
