// dataStore.ts
import { defineStore } from 'pinia'

export const useMakerStore = defineStore({
  id: 'data',
  state: () => ({
    makerData: null
  }),
  actions: {
    setMakerData(data: any) {
      this.makerData = data
    }
  }
})