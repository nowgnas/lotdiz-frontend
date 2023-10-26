import {getData, postData, putData} from '@/services/api/APISpec';
import type {
  CommonItemsResponse,
  ProjectDetailResponse,
  BannersResponse,
  LotdealProject,
  SpecialExhibition,
  ProjectsByCategory,
  SupportSignature
} from '@/services/types/ProjectResponse';
import type { SuccessResponse, ErrorResponse } from '@/services/types/APIResponse';

export const getProjectsByCategory = async (categoryName: string, page: number, size: number, sort: string): Promise<CommonItemsResponse<ProjectsByCategory>> => {
  try {
    const response: SuccessResponse<CommonItemsResponse<ProjectsByCategory>> = await getData<CommonItemsResponse<ProjectsByCategory>>(`/project-service/api/projects/category/${categoryName}?page=${page}&sort=${sort}&size=${size}`);

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

export const getLotdealProjects = async (page: number, size: number, sort: string): Promise<CommonItemsResponse<LotdealProject>> => {
  try {
    const response: SuccessResponse<CommonItemsResponse<LotdealProject>> = await getData<CommonItemsResponse<LotdealProject>>(`/project-service/api/projects/lotdeal?page=${page}&sort=${sort}&size=${size}`);

    return response.data;
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}

export const getSpecialExhibition = async (tag: string, page: number, size: number, sort: string): Promise<CommonItemsResponse<SpecialExhibition>> => {
  try {
    const response: SuccessResponse<CommonItemsResponse<SpecialExhibition>> = await getData<CommonItemsResponse<SpecialExhibition>>(`/project-service/api/projects/special-exhibition?tag=${tag}&page=${page}&sort=${sort}&size=${size}`);
    return response.data;
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}

export const getSupportSignature = async  (projectId: number, page: number, size: number, sort: string): Promise<CommonItemsResponse<SupportSignature>> => {
  try {
    const response: SuccessResponse<CommonItemsResponse<SupportSignature>> = await getData<CommonItemsResponse<SupportSignature>>(`/project-service/api/projects/${projectId}/support-signature?page=${page}&sort=${sort}&size=${size}`);
    return response.data;
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}

export const createSupportSignature = async (projectId: number)=> {
  try {
    await  postData(`/project-service/api/projects/${projectId}/support-signature`);
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}

export const modifySupportSignature = async (projectId: number) => {
  try {
    await putData(`/project-service/api/projects/${projectId}/support-signature`);
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}

