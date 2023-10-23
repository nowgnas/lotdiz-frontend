import axios, {Axios} from 'axios';
import type { ErrorResponse, ResultDataResponse } from '../APIResponse';

const client: Axios = axios.create({
    
    baseURL: import.meta.env.VITE_SERVICE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        // 'Origin': 'http://localhost:5173'
    }
});

export const getData = async <T>(url: string): Promise<ResultDataResponse<T>> => {
    try {
        const response = await client.get<ResultDataResponse<T>>(url);
        return response.data;
    } catch(error: unknown) {
        console.error((<ErrorResponse> error).detail);
        throw new Error((<ErrorResponse> error).message);
    }
}

export const postData = async <T>(url: string, data?: any) => {
    try {
        const response = await client.post<ResultDataResponse<T>>(url, data);
        // console.log("response: " + response.data);
        return response;
    } catch(error: unknown) {
        console.error((<ErrorResponse>error).detail);
        throw new Error((<ErrorResponse>error).message);
    }
}

export const putData = async <T>(url: string, data?: any): Promise<ResultDataResponse<T>> => {
    try {
        const response = await client.put<ResultDataResponse<T>>(url, data);
        return response.data;
    } catch(error: unknown) {
        console.error((<ErrorResponse>error).detail);
        throw new Error((<ErrorResponse>error).message);
    }
}

export const deleteData = async <T>(url: string): Promise<ResultDataResponse<T>> => {
    try {
        const response = await client.delete<ResultDataResponse<T>>(url);
        return response.data;
    } catch(error: unknown) {
        console.error((<ErrorResponse>error).detail);
        throw new Error((<ErrorResponse>error).message);
    }
}