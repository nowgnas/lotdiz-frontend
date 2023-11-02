import axios, { Axios } from 'axios'
import type { ErrorResponse, SuccessResponse } from '@/services/types/APIResponse'
import type { AxiosError } from 'axios'

export const client: Axios = axios.create({
  baseURL: import.meta.env.VITE_SERVICE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getData = async <T>(url: string): Promise<SuccessResponse<T>> => {
  try {
    const response = await client.get<SuccessResponse<T>>(url)
    return response.data
  } catch (error: AxiosError | any) {
    console.error(error)
    throw error
  }
}

export const getDataWithAuth = async <T>(url: string): Promise<SuccessResponse<T>> => {
  try {
    const response = await client.get<SuccessResponse<T>>(url)
    return response.data
  } catch (error: AxiosError | any) {
    console.error(error)
    throw error
  }
}

export const postData = async <T>(url: string, data?: any): Promise<SuccessResponse<T>> => {
  try {
    const response = await client.post<SuccessResponse<T>>(url, data)
    return response.data
  } catch (error: AxiosError | any) {
    console.error(error)
    throw error
  }
}

export const postMemberData = async <T>(url: string, data?: any) => {
  try {
    const response = await client.post<SuccessResponse<T>>(url, data)
    return response
  } catch (error: AxiosError | any) {
    console.error(error)
    throw error
  }
}

export const putData = async <T>(url: string, data?: any): Promise<SuccessResponse<T>> => {
  try {
    const response = await client.put<SuccessResponse<T>>(url, data)
    return response.data
  } catch (error: AxiosError | any) {
    console.error(error)
    throw error
  }
}

export const putDataWithAuth = async <T>(url: string, data?: any): Promise<SuccessResponse<T>> => {
  try {
    const response = await client.put<SuccessResponse<T>>(url, data)
    return response.data
  } catch (error: AxiosError | any) {
    console.error(error)
    throw error
  }
}

export const deleteData = async <T>(url: string): Promise<SuccessResponse<T>> => {
  try {
    const response = await client.delete<SuccessResponse<T>>(url)
    return response.data
  } catch (error: AxiosError | any) {
    console.error(error)
    throw error
  }
}
export const putBinaryType = async <T>(url: string, data?: any): Promise<void> => {
  try {
    await axios.put<SuccessResponse<T>>(url, data, {
      headers: {
        timeout: 0,
        processData: false,
        'Content-Type': data.type
      }
    })
  } catch (error: unknown) {
    console.error((<ErrorResponse>error).detail)
    throw new Error((<ErrorResponse>error).message)
  }
}
