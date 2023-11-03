import { getData, postData, putBinaryType, putData } from '@/services/api/APISpec'
import type {
  BannersResponse,
  BestLotdPlusProject,
  CommonProjectsResponse,
  LotdealProject,
  ProjectDetailResponse,
  ProjectsByCategory,
  SpecialExhibition,
  SupportSignature,
  SupportSignatureResponse,
  SupportWithUsInfo,
  SupportWithUsResponse
} from '@/services/types/ProjectResponse'
import type { ErrorResponse, SuccessResponse } from '@/services/types/APIResponse'
import type { InputSupportSignatureContentsRequest } from '@/services/types/ProjectRequest'
import type { File } from 'vitest'
import type { ProjectRequestData, RegisterProject } from '@/services/types/ProjectRegisterType'

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
    console.error(error)
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
export const uploadImage2S3 = async (presignedUrl: string, file: File) => {
  try {
    await putBinaryType(presignedUrl, file)
  } catch (error) {
    console.error(error)
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
  try {
    // url 저장하기
    const projectThumbnailImageFile: File = projectRequestDto.projectThumbnailImageFile as File
    const projectThumbnailImageUrl = projectRequestDto.projectThumbnailImageUrl
    const thumbnailDbUrl = await makeUrlPresigned2DBUrl(projectThumbnailImageUrl, projectThumbnailImageFile)
    await uploadImage2S3(projectThumbnailImageUrl, projectThumbnailImageFile)

    const projectStoryImageFile = projectRequestDto.projectStoryImageFile as File
    const projectStoryImgUrl = projectRequestDto.projectStoryImageUrl
    const storyDbUrl = await makeUrlPresigned2DBUrl(projectStoryImgUrl, projectStoryImageFile)
    await uploadImage2S3(projectStoryImgUrl, projectStoryImageFile)

    // 이미지 url prefix 분리하기
    const projectRegisterInformationDto: RegisterProject = {
      projectName: projectRequestDto.projectName,
      projectDescription: projectRequestDto.projectDescription,
      projectTag: projectRequestDto.projectTag,
      projectTargetAmount: projectRequestDto.projectTargetAmount,
      projectStoryImageUrl: storyDbUrl,
      projectDueDate: new Date(projectRequestDto.projectDueDate),
      projectThumbnailImageUrl: thumbnailDbUrl,
      projectImages: [],
      categoryId: projectRequestDto.categoryId,
      isLotdeal: projectRequestDto.isLotdeal,
      maker: projectRequestDto.maker,
      products: projectRequestDto.products
    }

    for (const responseElement in projectRequestDto.projectImages) {
      const projectImageUrl = projectRequestDto.projectImages[responseElement].projectImageUrl
      const projectImageFile: File = Object.assign(projectRequestDto.projectImages[responseElement].projectImageFile)
      const projectImageDBUrl = await makeUrlPresigned2DBUrl(projectImageUrl, projectImageFile)
      await uploadImage2S3(projectImageUrl, projectImageFile)
      projectRegisterInformationDto.projectImages.push(projectImageDBUrl)

      const response = await postData(`/project-service/api/project/makers/projects`, {
        projectName: projectRegisterInformationDto.projectName,
        projectDescription: projectRegisterInformationDto.projectDescription,
        projectTag: projectRegisterInformationDto.projectTag,
        projectTargetAmount: projectRegisterInformationDto.projectTargetAmount,
        projectStoryImageUrl: projectRegisterInformationDto.projectStoryImageUrl,
        projectDueDate: new Date(projectRegisterInformationDto.projectDueDate),
        projectThumbnailImageUrl: projectRegisterInformationDto.projectThumbnailImageUrl,
        projectImages: projectRegisterInformationDto.projectImages,
        categoryId: projectRegisterInformationDto.categoryId,
        isLotdeal: projectRegisterInformationDto.isLotdeal,
        maker: projectRegisterInformationDto.maker,
        products: projectRegisterInformationDto.products
      })
      return response.detail
    }
  } catch (e) {
    return e
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


// "{"
// projectName":"sdf"," +
// ""projectDescription":"dfg"," +
// ""projectTag":"sdf"," +
// ""projectTargetAmount":"324"," +
// ""projectStoryImageUrl":"/project-img/f9fca2e8-ba6c-42bd-a38f-8164c3e52d23%E1%84%86%E1%85%A6%E1%86%B7%E1%84%87%E1%85%A5%E1%84%89%E1%85%B5%E1%86%B8%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8.png"," +
// ""projectDueDate":"2023-11-8T0:36:0"," +
// ""projectThumbnailImageUrl":"/project-img/b7d25eee-42b3-4ed2-a745-9bdf044e20ef%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-07-05%2010.50.35.png"," +
// ""projectImages":["/project-img/970ebad1-cf4e-4734-a8f9-7b571aa84b01%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-07-05%2010.50.35.png"]," +
// ""categoryId":2," +
// ""isLotdeal":true," +
// ""maker":{"makerEmail":"asdf","makerName":"sadf","contactEmail":"sdf","makerPhoneNumber":"sdf","makerKakaoUrl":"sdf","makerHomeUrl":"sdf","makerSnsUrl":"sdf"}," +
// ""products":[{"productName":"dfg","productDescription":"dfg","productRegisteredStockQuantity":345,"productCurrentStockQuantity":345,"productPrice":2354}," +
// "{"productName":"dfg","productDescription":"dfg","productRegisteredStockQuantity":345,"productCurrentStockQuantity":345,"productPrice":345}]}"