// dataStore.ts
import { defineStore } from 'pinia'

export const useMakerStore = defineStore({
  id: 'maker',
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
  id: 'story',
  state: () => ({
    projectStoryData: null
  }),
  actions: {
    setProjectStoryData(data: any) {
      this.projectStoryData = data
    }
  }
})
export const useProductRegisterStore = defineStore({
  id: 'products',
  state: () => ({
    productsData: null
  }),
  actions: {
    setProductsData(data: any) {
      this.productsData = data
    }
  }
})
export const useSelectLotdealStore = defineStore({
  id: 'lotdeal',
  state: () => ({
    isLotdeal: false
  }),
  actions: {
    setLotdealData(data: any) {
      this.isLotdeal = data.isLotdeal.value == 'lotdeal'
    }
  }
})
export const useProjectInformationStore = defineStore({
  id: 'information',
  state: () => ({
    projectInformation: null
  }),
  actions: {
    setProjectInformation(data: any) {
      this.projectInformation = data
    }
  }
})
export const useDefaultInformationStore = defineStore({
  id: 'defaultInformation',
  state: () => ({
    defaultInformation: null
  }),
  actions: {
    setDefaultInformation(data: any) {
      this.defaultInformation = data
    }
  }
})