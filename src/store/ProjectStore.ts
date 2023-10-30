import { defineStore } from "pinia";
import type { ProjectDetail } from '@/services/types/ProjectResponse';
import type { ProjectDetailResponse } from '@/services/types/ProjectResponse'
import { getProjectDetails } from '@/services/api/ProjectService';

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
      isLikes:false,
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
    async setData (projectId: number)  {
      try {
        const response: ProjectDetailResponse = await getProjectDetails(projectId)
        if (response.projectDetail !== undefined) {
          this.projectDetails = response.projectDetail;
        }
      } catch (error) {
        alert('프로젝트 조회 실패')
      }
    }
  },
  persist: true,
});

