import { getData } from '@/services/api/APISpec';
import type { ProjectByCategoryResponse, ProjectDetailResponse } from '@/services/types/ProjectResponse';
import type { ErrorResponse } from '@/services/types/APIResponse';

export const getProjectsByCategory = async (categoryName: string, page: number, size: number, sort: string): Promise<Array<ProjectByCategoryResponse>> => {
  try {

    console.log(categoryName);

    const response = await getData<ProjectByCategoryResponse[]>(`/api/projects/category/${categoryName}?page=${page}&sort=${sort}&size=${size}`);
    const projectByCategoryResponseList: ProjectByCategoryResponse[] = response.data["projects"];

    return projectByCategoryResponseList;
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}

export const getProjectDetails = async (projectId: number) => {
  try {
    const response = await getData<ProjectDetailResponse>(`/api/projects/${projectId}`);
    const projectDetailResponse: ProjectDetailResponse = response.data["projectDetail"];
    return projectDetailResponse;
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}
