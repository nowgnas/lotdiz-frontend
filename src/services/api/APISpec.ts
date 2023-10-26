import axios, {Axios} from 'axios';
import type { ErrorResponse, ResultDataResponse } from '../APIResponse';

const client: Axios = axios.create({
    
    baseURL: import.meta.env.VITE_SERVICE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsZWV3b295dXAxIiwiYXV0aCI6IlJPTEVfVVNFUiIsIm1lbWJlcklkIjoiMSIsInVzZXJuYW1lIjoidGVzdDFAbmF2ZXIuY29tIiwiZXhwIjoxNjk4Mjk5OTk1fQ.goY92tRr64-TUrQcZu2iBvmGs5lWTp1b0pWH11BCHIxT6FWutITZCFSIULzdCLbj4KjCABI_-Wt8OFwZiUsRYg',
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

export const putData = async <T>(url: string, data?: any): Promise<T> => {
    try {
        const response = await client.put<T>(url, data);
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