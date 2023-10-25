import { getData } from '@/services/api/APISpec';
import type { ProjectsResponse, ProjectDetailResponse, BannersResponse, LotdealProject, SpecialExhibition, ProjectsByCategory } from '@/services/types/ProjectResponse';
import type { SuccessResponse, ErrorResponse } from '@/services/types/APIResponse';

export const getProjectsByCategory = async (categoryName: string, page: number, size: number, sort: string): Promise<ProjectsResponse<ProjectsByCategory>> => {
  try {
    const response: SuccessResponse<ProjectsResponse<ProjectsByCategory>> = await getData<ProjectsResponse<ProjectsByCategory>>(`/project-service/api/projects/category/${categoryName}?page=${page}&sort=${sort}&size=${size}`);

    return response.data;
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}

export const getProjectDetails = async (projectId: number): Promise<ProjectDetailResponse> => {
  try {
    const response: SuccessResponse<ProjectDetailResponse> = await getData<ProjectDetailResponse>(`/project-service/api/projects/${projectId}`);

    return response.data;
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}

export const getBanners = async (): Promise<BannersResponse> => {
  try {
    const response: SuccessResponse<BannersResponse> = await getData<BannersResponse>('/project-service/api/projects/banner');

    return response.data;
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}

export const getLotdealProjects = async (page: number, size: number, sort: string): Promise<ProjectsResponse<LotdealProject>> => {
  try {
    const response: SuccessResponse<ProjectsResponse<LotdealProject>> = await getData<ProjectsResponse<LotdealProject>>(`/project-service/api/projects/lotdeal?page=${page}&sort=${sort}&size=${size}`);

    return response.data;
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}

export const getSpecialExhibition = async (tag: string, page: number, size: number, sort: string): Promise<ProjectsResponse<SpecialExhibition>> => {
  try {
    const response: SuccessResponse<ProjectsResponse<SpecialExhibition>> = await getData<ProjectsResponse<SpecialExhibition>>(`/project-service/api/projects/special-exhibition?tag=${tag}&page=${page}&sort=${sort}&size=${size}`)
    return response.data;
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}
