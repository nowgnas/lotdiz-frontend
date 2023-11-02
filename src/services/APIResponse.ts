export interface SuccessResponse<T> {
    code: string;
    message: string;
    detail: string;
    data: T
}

export interface ErrorResponse {
    code: string;
    message: string;
    detail: string;
}