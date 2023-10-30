import { defineStore } from "pinia";
import type { ProjectDetail } from '@/services/types/ProjectResponse';

interface ProjectState {
  projectDetails: ProjectDetail;
}

export const useProjectStore = defineStore("project", {

  state: (): ProjectState => ({
    projectDetails: {
      projectId: 0,
      projectName: '',
      projectDescription: '',
      remainingDays: 0,
      makerName: '',
      categoryName: '',
      projectTag: '',
      numberOfBuyers: 0,
      numberOfSupporter: 0,
      numberOfLikes: 0,
      isLike:false,
      fundingAchievementRate: 0,
      accumulatedFundingAmount: 0,
      projectStoryImageUrl: '',
      projectImages: [],
      lotdealDueTime: '',
      projectStatus: '',
      products: []
    }
  }),
  actions: {
    setData(projectDetails: ProjectDetail) {
      this.projectDetails = projectDetails;
    }
  },
  persist: true,
});

