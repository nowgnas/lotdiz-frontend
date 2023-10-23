import { getData, postData } from "./APISpec";
import type { MemberInfoForQueryResponse } from "../types/MemberResponse";
import type { MemberInfoForSignUpRequest } from "../types/MemberRequest";
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