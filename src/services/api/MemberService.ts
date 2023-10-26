import { getData, postData } from "./APISpec";
import type { MemberInfoForQueryResponse, KakaoPayReadyResponse } from "../types/MemberResponse";
import type { MemberInfoForSignUpRequest, MembershipInfoForJoinRequest, InfoForSignIn } from "../types/MemberRequest";
import type { ResultDataResponse } from "../APIResponse"

export const postMemberInfoForSignUp = async (memberInfoForSignUpRequst: MemberInfoForSignUpRequest) => {
    try {
        const response = await postData<ResultDataResponse<object>>(`http://localhost:8000/member-service/api/sign-up`, memberInfoForSignUpRequst);
        return response;
    } catch (error: unknown) {
        throw new Error('회원 가입 실패');
    }
}

export const getMemberInfo = async (memberId: number) => {
    try {
        const response = await getData<MemberInfoForQueryResponse>(`/api/members`);
        const memberInfoResponse: MemberInfoForQueryResponse = response.data;
        return memberInfoResponse;
    } catch (error: unknown) {
        throw new Error('회원 정보 조회 실패');
    }
}

export const postMembershipInfoForJoin = async (membershipInfoForJoinRequest: MembershipInfoForJoinRequest) => {
    try {
        const response = await postData<string>(`http://localhost:8000/member-service/api/members/membership`, membershipInfoForJoinRequest);
        return response.data.data;
    } catch (error: unknown) {
        throw new Error('멤버십 결제 준비 실패');
    }
}

export const postInfoForSignIn = async(infoForSignIn: InfoForSignIn) => {
    try {
        const response = await postData<object>(`http://localhost:8000/member-service/api/sign-in`, infoForSignIn);
        return response;
    } catch (error: unknown) {
        throw new Error('로그인 실패');
    }
}

export const getIsDulicatedForCheck = async (username: string) => {
    try {
        console.log("username:", username);
        const response = await postData<boolean>(`http://localhost:8000/member-service/api/members/isDuplicated`, username);
        return response.data.data;
    } catch (error: unknown) {
        throw new Error('이메일 중복 조회 실패');
    }
}