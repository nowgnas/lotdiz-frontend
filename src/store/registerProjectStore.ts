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
export const useDefaultInformationStore = defineStore({
  id: 'data',
  state: () => ({
    defaultInformation: null
  }),
  actions: {
    setDefaultInformation(data: any) {
      console.log(this.defaultInformation)
      this.defaultInformation = data
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