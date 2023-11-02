export interface Maker {
  makerEmail: string,
  makerName: string,
  contactEmail: string,
  makerPhoneNumber: string,
  makerKakaoUrl: string,
  makerHomeUrl: string,
  makerSnsUrl: string
}

export interface MakerData {
  makerData: Maker
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
  projectStoryImageFile: unknown,
  projectDueDate: string,
  projectThumbnailImageUrl: string,
  projectThumbnailImageFile: unknown,
  projectImages: Array<ProjectImagesType>,
  categoryId: number,
  isLotdeal: boolean,
  products: Array<Product>,
  maker: Maker
}

export interface Story {
  projectImages: Array<ProjectImagesType>,
  projectDescription: string,
  projectStoryImageUrl: string
  projectStoryImageFile: unknown
}

export interface ProjectStoryData {
  projectStoryData: Story
}

export interface ProductsData {
  products: Array<Product>
}

export interface IsLotdeal {
  isLotdeal: boolean
}

export interface ProjectInformation {
  categoryId: number,
  projectTargetAmount: number
}

export interface ProjectInformationData {
  projectInformation: ProjectInformation
}

export interface DefaultInformation {
  projectName: string,
  projectTag: string,
  projectThumbnailImageUrl: string,
  projectThumbnailFile: any,
  projectDueDate: string
}

export interface DefaultInformationData {
  defaultInformation: DefaultInformation
}

export interface ProjectImagesType {
  projectImageUrl: string,
  projectImageFile: File
}

export interface RegisterProject {
  projectName: string,
  projectDescription: string,
  projectTag: string,
  projectTargetAmount: number,
  projectStoryImageUrl: string,
  projectDueDate: Date,
  projectThumbnailImageUrl: string,
  projectImages: Array<String>,
  categoryId: number,
  isLotdeal: boolean,
  maker: Maker,
  products: Product[]
}