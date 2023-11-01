import type { ProjectRegisteredByMakerResponse } from '@/services/types/MakerTypes'
import { getData } from '@/services/api/APISpec'

export const getRegisteredProjectList = async (page: number, size: number, sort: string): Promise<ProjectRegisteredByMakerResponse> => {
  try {
    const response = await getData(`/project-service/api/makers/projects?page=${page}&sort=${sort}&size=${size}`)
    console.log(response.data)
    return response.data
  } catch (e) {
    console.log(e.detail)
  }

}