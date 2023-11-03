import { getData, getDataWithAuth } from '@/services/api/APISpec'

export const getRegisteredProjectList = async (page: number, size: number, sort = 'createdAt') => {
  try {
    const response = await getData(`/project-service/api/makers/projects?page=${page}&sort=${sort}&size=${size}`)
    return response.data
  } catch (e) {
    console.error(e)
  }

}

export const getRegisteredProjectDetailStatus = async (projectId: number) => {
  const response = await getDataWithAuth(`/project-service/api/makers/projects/${projectId}/status`)
  return response.data
}

export const getRegisteredProjectFundingList = async (projectId: number) => {
  const response = await getDataWithAuth(`/project-service/api/makers/projects/${projectId}`)
  return response.data
}
