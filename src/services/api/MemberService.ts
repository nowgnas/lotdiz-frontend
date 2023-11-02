import { deleteData, getData, postData, postMemberData, putData } from './APISpec'
import type {
  LikesDetailResponse,
  MemberInfoForQueryResponse,
  MembershipInfoForShowResponse
} from '../types/MemberResponse'
import type {
  InfoForSignIn,
  MemberInfoForChangeRequest,
  MemberInfoForSignUpRequest,
  MembershipInfoForJoinRequest
} from '../types/MemberRequest'
import type { SuccessResponse } from '@/services/types/APIResponse'

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
    throw new Error('로그인 실패.')
  }
}

export const getIsDulicatedForCheck = async (username: string) => {
  const response = await postMemberData<boolean>(`/member-service/api/members/isDuplicated`, username)
  if (response.data.data === undefined) {
    throw new Error(response.data.message)
  }
  return response.data.data
}

export const createLikes = async (projectId: number) => {
  try {
    await postData(`/member-service/api/projects/${projectId}/likes`)
  } catch (error) {
    throw error
  }
}

export const deleteLikes = async (projectId: number) => {
  try {
    await deleteData(`/member-service/api/projects/${projectId}/likes`)
  } catch (error: unknown) {
    throw error
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

export const checkOriginPasswordForChange = async (originPassword: string) => {
  try {
    const response = await postData<boolean>('/member-service/api/origin-password/isSame', originPassword)
    return response.data
  } catch (error: unknown) {
    throw new Error('기존 비밀번호 조회 실패')
  }
}

export const putMemberInfoForChange = async (memberInfoForChangeRequest: MemberInfoForChangeRequest) => {
  try {
    const response = await putData<MemberInfoForChangeRequest>('/member-service/api/members', memberInfoForChangeRequest)
    return response.data
  } catch (error: unknown) {
    console.error(error)
    throw new Error('회원 정보 수정 실패')
  }
}

export const postSignOut = async () => {
  try {
    const response = await postMemberData('/member-service/api/sign-out')
    return response.data
  } catch (error: unknown) {
    throw new Error('로그아웃 실패')
  }
}

export const getLikesList = async () => {
  try {
    const response = await getData<LikesDetailResponse[]>('/member-service/api/members/likes')
    return response.data
  } catch (error: unknown) {
    throw new Error('찜목록 조회 실패')
  }
}

export const getLikesCnts = async () => {
  try {
    const response = await getData<number>('/member-service/api/members/likes/cnts')
    return response.data
  } catch (error: unknown) {
    throw new Error('현재 회원의 찜 개수 조회 실패')
  }
}