export interface Maker {
  makerEmail: string,
  makerName: string,
  contactEmail: string,
  makerPhoneNumber: string,
  makerKakaoUrl: string,
  makerHomeUrl: string,
  makerSnsUrl: string
}

export interface Product {
  productName: string,
  productPrice: number,
  productDescription: string,
  productRegisteredStockQuantity: number,
  productCurrentStockQuantity: number
}

export interface ProjectRequestData {
  projectName: string,
  projectDescription: string,
  projectTag: string,
  projectTargetAmount: number,
  projectStoryImageUrl: string,
  projectDueDate: string,
  projectThumbnailImageUrl: string,
  projectImages: Array<string>,
  categoryId: number,
  isLotdeal: boolean,
  products: Array<Product>,
  maker: Maker
}

export interface Story {
  projectImages: Array<string>,
  projectDescription: string,
  projectStoryImageUrl: string
}

export interface Products {
  productsData: Array<Product>
}

export interface IsLotdeal {
  isLotdeal: boolean
}

export interface ProjectInformation {
  categoryId: number,
  projectTargetAmount: number
}

export interface DefaultInformation {
  projectName: string,
  projectTag: string,
  projectThumbnailImageUrl: string,
  projectDueDate: string
}

export interface ProjectImagesType {
  projectImageUrl: string,
  projectImageFile: File
}