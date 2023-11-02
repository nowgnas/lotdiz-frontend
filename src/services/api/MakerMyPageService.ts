import type { ProjectRegisteredByMakerResponse } from '@/services/types/MakerTypes'
import { getData } from '@/services/api/APISpec'

export const getRegisteredProjectList = async (page: number, size: number, sort: string) => {
  try {
    const response = await getData(`/project-service/api/makers/projects?page=${page}&sort=${sort}&size=${size}`)
    return response.data
  } catch (e) {
    console.log(e)
  }

}