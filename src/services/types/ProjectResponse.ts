export interface ProjectsResponse<T> {
  totalPages: number,
  projects: Array<T>
}

export interface ProjectsByCategoryResponse {
  projectId: number;
  projectName: string;
  remainingDays: number;
  projectThumbnailImage: string;
  makerName: string;
  fundingAchievementRate: string;
  accumulatedFundingAmount: number;
  lotdealDueTime: string;
  projectStatus: string;
  isLike: boolean;
}

export interface ProjectDetailResponse {
  projectId: number;
  projectName: string;
  projectDescription: string;
  remainingDays: number;
  makerName: string;
  catagoryName: string;
  projectTag: string;
  numberOfBuyers: number;
  numberOfSupporter: number;
  fundingAchievementRate: number;
  accumlatedFundingAmount: number;
  projectStoryImageUrl: Array<projectIamge>
  lotdealDueTime: string;
  projectStatus: string;
  products: Array<products>

}

export interface BannerResponse {
  bannerId: number
  bannerImageUrl: string
  bannerUrl: string
}

export interface LotdealProjectResponse {
  projectId: number;
  projectName: string;
  remainingDays: number;
  projectThumbnailImage: string;
  makerName: string;
  fundingAchievementRate: string;
  accumulatedFundingAmount: number;
  lotdealDueTime: string;
  projectStatus: string;
  isLike: boolean;
}

export interface SpecialExhibitionResponse {
  projectId: number;
  projectName: string;
  remainingDays: number;
  projectThumbnailImage: string;
  makerName: string;
  fundingAchievementRate: string;
  accumulatedFundingAmount: number;
  lotdealDueTime: string;
  projectStatus: string;
  isLike: boolean;
}

interface projectIamge {
  projectImageId: number;
  projectImageUrl: string;
  projectImaageThumbnail: boolean;
}

interface products {
  productId: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productCurrentStockQuantity: number
}

