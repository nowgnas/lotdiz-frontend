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
export const useProjectStoryStore = defineStore({
  id: 'data',
  state: () => ({
    projectStoryData: null
  }),
  actions: {
    setProjectStoryData(data: any) {
      console.log(data)
      this.projectStoryData = data
    }
  }
})
export const useProductRegisterStore = defineStore({
  id: 'data',
  state: () => ({
    productsData: null
  }),
  actions: {
    setProductsData(data: any) {
      this.productsData = data
    }
  }
})