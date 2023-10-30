import { getData, postData, putData } from '@/services/api/APISpec'
import type {
  CommonProjectsResponse,
  ProjectDetailResponse,
  BannersResponse,
  LotdealProject,
  SpecialExhibition,
  ProjectsByCategory,
  SupportSignature,
  SupportSignatureResponse,
  BestLotdPlusProject,
  SupportWithUsResponse,
  SupportWithUsInfo
} from '@/services/types/ProjectResponse'
import type { SuccessResponse, ErrorResponse } from '@/services/types/APIResponse'
import type { InputSupportSignatureContentsRequest } from '@/services/types/ProjectRequest'


export const getProjectsByCategory = async (categoryName: string, page: number, size: number, sort: string): Promise<CommonProjectsResponse<ProjectsByCategory>> => {
  try {
    const response: SuccessResponse<CommonProjectsResponse<ProjectsByCategory>> = await getData<CommonProjectsResponse<ProjectsByCategory>>(`/project-service/api/projects/category/${categoryName}?page=${page}&sort=${sort}&size=${size}`)

    return response.data
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail)
  }
}

export const getProjectDetails = async (projectId: number): Promise<ProjectDetailResponse> => {
  try {
    const response: SuccessResponse<ProjectDetailResponse> = await getData<ProjectDetailResponse>(`/project-service/api/projects/${projectId}`)

    return response.data
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail)
  }
}

export const getBanners = async (): Promise<BannersResponse> => {
  try {
    const response: SuccessResponse<BannersResponse> = await getData<BannersResponse>('/project-service/api/projects/banner')

    return response.data
  } catch (error: unknown) {
    console.log(error)
    throw new Error((<ErrorResponse>error).detail)
  }
}

export const getLotdealProjects = async (page: number, size: number, sort: string): Promise<CommonProjectsResponse<LotdealProject>> => {
  try {
    const response: SuccessResponse<CommonProjectsResponse<LotdealProject>> = await getData<CommonProjectsResponse<LotdealProject>>(`/project-service/api/projects/lotdeal?page=${page}&sort=${sort}&size=${size}`)

    return response.data
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail)
  }
}

export const getSpecialExhibition = async (tag: string, page: number, size: number, sort: string): Promise<CommonProjectsResponse<SpecialExhibition>> => {
  try {
    const response: SuccessResponse<CommonProjectsResponse<SpecialExhibition>> = await getData<CommonProjectsResponse<SpecialExhibition>>(`/project-service/api/projects/special-exhibition?tag=${tag}&page=${page}&sort=${sort}&size=${size}`)
    return response.data
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail)
  }
}

export const getBestLotdPlus = async (): Promise<CommonProjectsResponse<BestLotdPlusProject>> => {
  try {
    const response: SuccessResponse<CommonProjectsResponse<BestLotdPlusProject>> = await getData<CommonProjectsResponse<BestLotdPlusProject>>(`/project-service/api/projects`)
    return response.data
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail)
  }
}

export const getSupportSignature = async (projectId: number, page: number, size: number, sort: string): Promise<SupportSignatureResponse<SupportSignature>> => {
  try {
    const response: SuccessResponse<SupportSignatureResponse<SupportSignature>> = await getData<SupportSignatureResponse<SupportSignature>>(`/project-service/api/projects/${projectId}/support-signature?page=${page}&sort=${sort}&size=${size}`)
    return response.data
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail)
  }
}

export const createSupportSignature = async (projectId: number, supportSignatureContents: InputSupportSignatureContentsRequest) => {
  try {
    await postData(`/project-service/api/projects/${projectId}/support-signature`, supportSignatureContents)
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail)
  }
}

export const modifySupportSignature = async (projectId: number, supportSignatureContents: InputSupportSignatureContentsRequest) => {
  try {
    await putData(`/project-service/api/projects/${projectId}/support-signature`, supportSignatureContents)
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail)
  }
}

export const getSupportWithUsInfo = async (projectId: number, page: number, size: number, sort: string): Promise<SupportWithUsInfo> => {
  try {
    const response: SuccessResponse<SupportWithUsResponse> = await getData<SupportWithUsResponse>(`/funding-service/api/projects/${projectId}/supporter-with-us?page=${page}&sort=${sort}&size=${size}`)
    return response.data['supporterWithUsInfo']
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail)
  }
}
