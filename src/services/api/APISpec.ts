import axios, {Axios} from 'axios';
import type { ErrorResponse, SuccessResponse } from '../APIResponse';
import { usePersistentedStateStore } from '@/stores/persistentedStateStore';

const persistentStateStore = usePersistentedStateStore();

export const client: Axios = axios.create({
    
    baseURL: import.meta.env.VITE_SERVICE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': persistentStateStore.$state.jwtToken,
    }
});

export const getData = async <T>(url: string): Promise<SuccessResponse<T>> => {
    try {
        const response = await client.get<SuccessResponse<T>>(url);
        return response.data;
    } catch(error: unknown) {
        console.error((<ErrorResponse> error).detail);
        throw new Error((<ErrorResponse> error).message);
    }
}

export const postMemberData = async <T>(url: string, data: any) => {
    try {
        const response = await client.post<SuccessResponse<T>>(url, data);
        // console.log("response: " + response.data);
        return response;
    } catch(error: unknown) {
        console.error((<ErrorResponse>error).detail);
        throw new Error((<ErrorResponse>error).message);
    }
}

export const putData = async <T>(url: string, data?: any): Promise<T> => {
    try {
        const response = await client.put<T>(url, data);
        return response.data;
    } catch(error: unknown) {
        console.error((<ErrorResponse>error).detail);
        throw new Error((<ErrorResponse>error).message);
    }
}

export const deleteData = async <T>(url: string): Promise<SuccessResponse<T>> => {
    try {
        const response = await client.delete<SuccessResponse<T>>(url);
        return response.data;
    } catch(error: unknown) {
        console.error((<ErrorResponse>error).detail);
        throw new Error((<ErrorResponse>error).message);
    }
}