import { getData, postMemberData, deleteData, postData, putData } from './APISpec'
import type {
  MemberInfoForQueryResponse,
  KakaoPayReadyResponse,
  MembershipInfoForShowResponse,
  LikesDetailResponse
} from '../types/MemberResponse'
import type {
  MemberInfoForSignUpRequest,
  MembershipInfoForJoinRequest,
  InfoForSignIn,
  MemberInfoForChangeRequest
} from '../types/MemberRequest'
import type { SuccessResponse, ErrorResponse } from '@/services/types/APIResponse'

export const postMemberInfoForSignUp = async (memberInfoForSignUpRequst: MemberInfoForSignUpRequest) => {
  try {
    const response = await postMemberData<SuccessResponse<object>>(`/member-service/api/sign-up`, memberInfoForSignUpRequst)
    return response
  } catch (error: unknown) {
    throw new Error('회원 가입 실패')
  }
}

export const getMemberInfo = async () => {
  try {
    const response = await getData<MemberInfoForQueryResponse>(`/member-service/api/members`)
    const memberInfoResponse: MemberInfoForQueryResponse = response.data
    return memberInfoResponse
  } catch (error: unknown) {
    throw new Error('회원 정보 조회 실패')
  }
}

export const postMembershipInfoForJoin = async (membershipInfoForJoinRequest: MembershipInfoForJoinRequest) => {
  try {
    const response = await postMemberData<string>(`/member-service/api/members/membership`, membershipInfoForJoinRequest)
    return response.data.data
  } catch (error: unknown) {
    throw new Error('멤버십 결제 준비 실패')
  }
}

export const postInfoForSignIn = async (infoForSignIn: InfoForSignIn) => {
  try {
    const response = await postMemberData<object>(`/member-service/api/sign-in`, infoForSignIn)
    return response
  } catch (error: unknown) {
    console.error(error)
    throw new Error('로그인 실패')
  }
}

export const getIsDulicatedForCheck = async (username: string) => {
  try {
    const response = await postMemberData<boolean>(`/member-service/api/members/isDuplicated`, username)
    return response.data.data
  } catch (error: unknown) {
    throw new Error('이메일 중복 조회 실패')
  }
}

export const createLikes = async (projectId: number) => {
  try {
    await postData(`/member-service/api/projects/${projectId}/likes`)
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail)
  }
}

export const deleteLikes = async (projectId: number) => {
  try {
    await deleteData(`/member-service/api/projects/${projectId}/likes`)
  } catch (error: unknown) {
    throw new Error((<ErrorResponse>error).detail)
  }
}

export const getMemberPointsForShow = async () => {
  try {
    const response = await getData<number>(`/member-service/api/members/points`)
    return response.data
  } catch (error: unknown) {
    throw new Error('포인트 조회 실패')
  }
}

export const getMembershipInfoForShow = async () => {
  try {
    const response = await getData<MembershipInfoForShowResponse>('/member-service/api/members/membership')
    return response.data
  } catch (error: unknown) {
    throw new Error('멤버십 정보 조회 실패')
  }
}

export const putMemberInfoForChange = async (memberInfoForChangeRequest: MemberInfoForChangeRequest) => {
  try {
    const response = await putData<MemberInfoForChangeRequest>('/member-service/api/members', memberInfoForChangeRequest)
    return response.data
  } catch (error: unknown) {
    throw new Error('회원 정보 수정 실패')
  }
}

export const postSignOut = async () => {
  try {
    const response = await postMemberData('/member-service/api/sign-out')
    return response.data;
  } catch (error: unknown) {
    throw new Error('로그아웃 실패')
  }
}

export const getLikesList = async () => {
  try {
    const response = await getData<LikesDetailResponse[]>('/member-service/api/members/likes')
    return response.data;
  } catch (error: unknown) {
    throw new Error('찜목록 조회 실패')
  }
}