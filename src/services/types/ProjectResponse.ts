export interface ProjectByCategoryResponse {
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
  projectStoryImageUrl: projectIamge[]
  lotdealDueTime: string;
  projectStatus: string;
  products: products[]

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

