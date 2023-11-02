// dataStore.ts
import { defineStore } from 'pinia'
import type {
  DefaultInformationData,
  IsLotdeal,
  MakerData,
  Product,
  ProductsData,
  ProjectImagesType,
  ProjectInformationData,
  ProjectStoryData
} from '@/services/types/ProjectRegisterType'

export const useMakerStore = defineStore({
  id: 'maker',
  state: (): MakerData => ({
    makerData: {
      makerEmail: '',
      makerName: '',
      contactEmail: '',
      makerPhoneNumber: '',
      makerKakaoUrl: '',
      makerHomeUrl: '',
      makerSnsUrl: ''
    }
  }),
  actions: {
    setMakerData(data: any) {
      this.makerData = data
    }
  }
})
export const useProjectStoryStore = defineStore({
  id: 'story',
  state: (): ProjectStoryData => ({
    projectStoryData: {
      projectImages: new Array<ProjectImagesType>(),
      projectDescription: '',
      projectStoryImageUrl: '',
      projectStoryImageFile: null
    }
  }),
  actions: {
    setProjectStoryData(data: any) {
      this.projectStoryData = data
    }
  }
})
export const useProductRegisterStore = defineStore({
  id: 'products',
  state: (): ProductsData => ({
    products: new Array<Product>()
  }),
  actions: {
    setProductsData(data: any) {
      this.products = data
    }
  }
})
export const useSelectLotdealStore = defineStore({
  id: 'lotdeal',
  state: (): IsLotdeal => ({
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
  state: (): ProjectInformationData => ({
    projectInformation: {
      categoryId: 0,
      projectTargetAmount: 0
    }
  }),
  actions: {
    setProjectInformation(data: any) {
      this.projectInformation = data
    }
  }
})
export const useDefaultInformationStore = defineStore({
  id: 'defaultInformation',
  state: (): DefaultInformationData => ({
    defaultInformation: {
      projectName: '',
      projectTag: '',
      projectThumbnailImageUrl: '',
      projectThumbnailFile: null,
      projectDueDate: ''
    }
  }),
  actions: {
    setDefaultInformation(data: any) {
      this.defaultInformation = data
    }
  }
})
