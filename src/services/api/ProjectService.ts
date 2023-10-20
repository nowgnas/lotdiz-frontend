import { getData } from '@/services/api/APISpec';
import type { ProjectByCategoryResponse, ProjectDetailResponse } from '@/services/types/ProjectResponse';


export const getProjectsByCategory = async (categoryName: string, page: number, size: number, sort: string): Promise<Array<ProjectByCategoryResponse>> => {
  try {
    const response = await getData<ProjectByCategoryResponse[]>(`/api/projects/category/${categoryName}?page=${page}&sort=${sort}&size=${size}`);
    const projectByCategoryResponseList: ProjectByCategoryResponse[] = response.data["projects"];
    return projectByCategoryResponseList;
  } catch (error: unknown) {
    throw new Error('카테고리 별 조회 실패');
    // throw new Error((<ErrorResponse>error).message);

  }
}

export const getProjectDetails = async (projectId: number) => {
  try {
    const response = await getData<ProjectDetailResponse>(`/api/projects/${projectId}`);
    const projectDetailResponse: ProjectDetailResponse = response.data["projectDetail"];
    return projectDetailResponse;
  } catch (error: unknown) {
    throw new Error('프로젝트 상세 조회 실패');
  }
}
