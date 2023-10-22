import { getData } from '@/services/api/APISpec';
import type { ProjectsResponse, ProjectsByCategoryResponse, ProjectDetailResponse, BannerResponse } from '@/services/types/ProjectResponse';
import type { SuccessResponse, ErrorResponse } from '@/services/types/APIResponse';

export const getProjectsByCategory = async (categoryName: string, page: number, size: number, sort: string): Promise<Array<ProjectByCategoryResponse>> => {
  try {
    const response = await getData<SuccessResponse<ProjectsResponse<ProjectsByCategoryResponse>>>(`/api/projects/category/${categoryName}?page=${page}&sort=${sort}&size=${size}`);
    const projectByCategoryResponseList: ProjectsResponse<ProjectsByCategoryResponse> = response.data;

    return projectByCategoryResponseList;
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}

export const getProjectDetails = async (projectId: number) => {
  try {
    const response = await getData<SuccessResponse<Map<String, ProjectDetailResponse>>>(`/api/projects/${projectId}`);
    const projectDetailResponse: ProjectDetailResponse = response.data;
    return projectDetailResponse;
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}

export const getBanners = async () => {
  try {
    const response = await getData<SuccessResponse<Map<String, BannerResponse>>>('/api/projects/banner');
    const bannerResponse: BannerResponse = response.data;
    return bannerResponse;
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}
