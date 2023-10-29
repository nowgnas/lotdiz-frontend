import axios, { Axios } from "axios";
import type { SuccessResponse, ErrorResponse } from "@/services/types/APIResponse";

const client: Axios = axios.create({
  baseURL: import.meta.env.VITE_SERVICE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsZWV3b295dXAxIiwiYXV0aCI6IlJPTEVfVVNFUiIsIm1lbWJlcklkIjoiMSIsInVzZXJuYW1lIjoidGVzdDFAbmF2ZXIuY29tIiwiZXhwIjoxNjk4NTUxMzYxfQ.us0_lK8rdE_LSoxCJW2gyf27RfN_c6kv05fHa0GKWbz7q_U-jJMwFEixJpzP3aj4NiBCl00rp3d0geWHbOdk4A',
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
    const response = await client.delete<SuccessResponse<T>>(url);
    return response.data;
  } catch (error: unknown) {
    console.error((<ErrorResponse>error).detail)
    throw new Error((<ErrorResponse>error).message)
  }
};
