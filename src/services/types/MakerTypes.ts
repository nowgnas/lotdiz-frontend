export interface ProjectRegisteredByMakerResponse {
  projects: Array<ProjectInformationForRegistered>,
  totalPage: number
}

export interface ProjectInformationForRegistered {
  projectId: number,
  projectName: string,
  remainingDays: string,
  projectThumbnailImageUrl: string,
  makerName: string,
  fundingAchievementRate: string,
  accumulatedFundingAmount: string,
  lotdealDueTime: string,
  projectStatus: string,
  isAuthorized: boolean,
}