import { defineStore } from 'pinia'

export const appStore = defineStore('app', {
  state: () => ({
    count: 0,
    name: 'App Store'
  }),
  
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})