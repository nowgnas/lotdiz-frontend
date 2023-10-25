import { deleteData, postData } from "./APISpec";
import type { ErrorResponse } from '@/services/types/APIResponse';

export const createLikes = async (projectId: number) => {
  try {
    await postData(`/api/projects/${projectId}/likes`);
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}

export const deleteLikes = async (projectId: number) => {
  try {
    await deleteData(`/api/projects/${projectId}/likes`);
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail);
  }
}
