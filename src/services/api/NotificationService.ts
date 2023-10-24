import {getDataWithAuth, putDataWithAuth} from "@/services/api/APISpec";
import type {SuccessResponse} from "@/services/types/APIResponse";

const accessToken: string = "";

export interface GetNotificationPageResponseDto<T> {
    totalPages: number,
    notifications: Array<T>
}

export interface GetNotificationResponseDto {
    notificationId: number;
    notificationTitle: string;
    notificationContent: string;
    notificationIsRead: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface SetNotificationIsReadRequestDto {
    notificationIds: Array<number>
}

export const getNotifications = async (page: number, size: number, sort: string)
    : Promise<GetNotificationPageResponseDto<GetNotificationResponseDto>> => {
    try {
        // TODO: Access Token 인자
        const response: SuccessResponse<GetNotificationPageResponseDto<GetNotificationResponseDto>>
            = await getDataWithAuth<GetNotificationPageResponseDto<GetNotificationResponseDto>>(
            `/api/notifications?page=${page}&size=${size}&sort=${sort}`, accessToken);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to get notification');
    }
}

export const setNotificationsIsRead = async (notificationIds: Array<number>): Promise<void> => {
    try {
        const setNotificationIsReadRequestDto: SetNotificationIsReadRequestDto = {
            notificationIds: notificationIds
        }
        // TODO: Access Token 인자
        await putDataWithAuth(`/api/notifications/read-status`, setNotificationIsReadRequestDto, accessToken);
    } catch (error) {
        throw new Error('Failed to set notification is read');
    }
}

