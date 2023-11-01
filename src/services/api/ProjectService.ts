import { getData, postData, putBinaryType, putData } from '@/services/api/APISpec'
import type {
  BannersResponse, BestLotdPlusProject,
  CommonProjectsResponse,
  LotdealProject,
  ProjectDetailResponse,
  ProjectsByCategory,
  SpecialExhibition,
  SupportSignature,
  SupportSignatureResponse, SupportWithUsInfo, SupportWithUsResponse
} from '@/services/types/ProjectResponse'
import type { ErrorResponse, SuccessResponse } from '@/services/types/APIResponse'
import type { InputSupportSignatureContentsRequest } from '@/services/types/ProjectRequest'
import type { File } from 'vitest'
import type { Product, ProjectRequestData, RegisterProject } from '@/services/types/ProjectRegisterType'

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

export const getPresignedUrl = async (imageName: String) => {
  try {
    const response = await postData(`/project-service/api/presigned-url`, imageName)
    // presigned
    return JSON.parse(JSON.stringify(response.data)).presignedUrl
  } catch (e) {
    throw new Error((<ErrorResponse>e).detail)
  }
}
export const uploadImage2S3 = async (presignedUrl: '', file: File) => {
  try {
    const response = await putBinaryType(presignedUrl, file)
  } catch (error) {
    throw new Error((<ErrorResponse>error).detail)
  }
}
export const getPresignedUrlByImageName = async (file: File) => {
  try {
    return getPresignedUrl(file.name).then((data) => {
      return data
    })
  } catch (e) {
    throw new Error((<ErrorResponse>e).detail)
  }
}
export const makeUrlPresigned2DBUrl = async (url: String, file: File) => {
  const splitUrl = url.split('.com')[1]
  const fileType = file.type.split('/')[1]
  return `${splitUrl.split(fileType)[0]}${fileType}`
}

export const registerProject = async (projectRequestDto: ProjectRequestData) => {
  // url 저장하기
  const projectThumbnailImageFile: File = projectRequestDto.projectThumbnailImageFile as File
  const projectThumbnailImageUrl = projectRequestDto.projectThumbnailImageUrl
  const thumbnailDbUrl = await makeUrlPresigned2DBUrl(projectThumbnailImageUrl, projectThumbnailImageFile)

  const projectStoryImageFile = projectRequestDto.projectStoryImageFile as File
  const projectStoryImgUrl = projectRequestDto.projectStoryImageUrl
  const storyDbUrl = await makeUrlPresigned2DBUrl(projectStoryImgUrl, projectStoryImageFile)

  // 이미지 url prefix 분리하기
  let registerData: RegisterProject = {
    projectName: '',
    projectDescription: '',
    projectTag: '',
    projectTargetAmount: 0,
    projectStoryImageUrl: '',
    projectDueDate: '',
    projectThumbnailImageUrl: '',
    projectImages: [],
    categoryId: 0,
    isLotdeal: false,
    maker: {
      makerEmail: '',
      makerName: '',
      contactEmail: '',
      makerPhoneNumber: '',
      makerKakaoUrl: '',
      makerHomeUrl: '',
      makerSnsUrl: ''
    },
    products: new Array<Product>()
  }
  registerData.projectName = projectRequestDto.projectName
  registerData.projectDescription = projectRequestDto.projectDescription
  registerData.projectTag = projectRequestDto.projectTag
  registerData.projectTargetAmount = projectRequestDto.projectTargetAmount
  registerData.projectThumbnailImageUrl = thumbnailDbUrl
  registerData.projectStoryImageUrl = storyDbUrl
  registerData.projectDueDate = projectRequestDto.projectDueDate
  registerData.categoryId = projectRequestDto.categoryId
  registerData.isLotdeal = projectRequestDto.isLotdeal
  registerData.maker = projectRequestDto.maker
  registerData.products = projectRequestDto.products
  console.log(registerData.products)

  for (const responseElement in projectRequestDto.projectImages) {
    const projectImageUrl = projectRequestDto.projectImages[responseElement].projectImageUrl
    const projectImageFile: File = Object.assign(projectRequestDto.projectImages[responseElement].projectImageFile)
    const projectImageDBUrl = await makeUrlPresigned2DBUrl(projectImageUrl, projectImageFile)
    registerData.projectImages.push(projectImageDBUrl)
  }
  // 이미지 dto 만들기
  console.log('request data')
  console.log(registerData)
  // 최종 request dto 생성

  // post 요청
  const response = await postData(`/project-service/api/project/makers/projects`, registerData)
  console.log(response)
}
export const getSupportWithUsInfo = async (projectId: number, page: number, size: number, sort: string): Promise<SupportWithUsInfo> => {
  try {
    const response: SuccessResponse<SupportWithUsResponse> = await getData<SupportWithUsResponse>(`/funding-service/api/projects/${projectId}/supporter-with-us?page=${page}&sort=${sort}&size=${size}`)
    return response.data['supporterWithUsInfo']
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail)
  }
}
