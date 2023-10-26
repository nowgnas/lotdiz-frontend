import { deleteData, postData } from "./APISpec";
import type { ErrorResponse } from '@/services/types/APIResponse';

export const createLikes = async (projectId: number) => {
  try {
    await postData(`/member-service/api/projects/${projectId}/likes`);
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}

export const deleteLikes = async (projectId: number) => {
  try {
    await deleteData(`/member-service/api/projects/${projectId}/likes`);
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}
