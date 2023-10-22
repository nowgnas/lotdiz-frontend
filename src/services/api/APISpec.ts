import axios, { Axios } from "axios";
import type { SuccessResponse, ErrorResponse } from "@/services/types/APIResponse";

const client: Axios = axios.create({
  baseURL: import.meta.env.VITE_SERVICE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getData = async <T>(url: string): Promise<SuccessResponse<T>> => {
  try {
    const response = await client.get<SuccessResponse<T>>(url);
    return response.data;
  } catch (error: unknown) {
    console.error((<ErrorResponse>error).detail)
    throw new Error((<ErrorResponse>error).message)
  }
};

export const postData = async <T>(url: string, data?: any): Promise<SuccessResponse<T>> => {
  try {
    const response = await client.post<SuccessResponse<T>>(url, data);
    return response.data;
  } catch (error: unknown) {
    console.error((<ErrorResponse>error).detail)
    throw new Error((<ErrorResponse>error).message)
  }
};

export const putData = async <T>(url: string, data?: any): Promise<SuccessResponse<T>> => {
  try {
    const response = await client.put<SuccessResponse<T>>(url, data);
    return response.data;
  } catch (error: unknown) {
    console.error((<ErrorResponse>error).detail)
    throw new Error((<ErrorResponse>error).message)
  }
};

export const deleteData = async <T>(url: string): Promise<SuccessResponse<T>> => {
  try {
    const response = await client.put<SuccessResponse<T>>(url);
    return response.data;
  } catch (error: unknown) {
    console.error((<ErrorResponse>error).detail)
    throw new Error((<ErrorResponse>error).message)
  }
};







