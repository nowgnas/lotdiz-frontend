import { postData } from './APISpec'
import type { ErrorResponse, SuccessResponse } from '../types/APIResponse'
import type { FundingPaymentsReadyInfo, PayReadyResponse } from '../types/FundingRequest'
import type { FundingPaymentsApproveInfo } from '@/services/types/FundingPaymentsApproveInfo'

export const postFundingInfoForPayReady = async (fundingPaymentsInfo: FundingPaymentsReadyInfo): Promise<PayReadyResponse> => {
    try {
        const response: SuccessResponse<PayReadyResponse> = await postData<PayReadyResponse>(`/payment-service/api/funding/payments/ready`, fundingPaymentsInfo)
        return response.data
    } catch (error: unknown) {
        throw new Error('펀딩 결제 준비 실패')
    }
}

export const postFundingInfoForPayApproval = async (fundingPaymentsApproveInfo: FundingPaymentsApproveInfo, projectId: number) => {
    try {
        const response = await postData<object>(`/funding-service/api/projects/${projectId}/fundings`, fundingPaymentsApproveInfo)
        return response

    } catch (error: unknown) {
        throw new Error((<ErrorResponse>error).detail)
    }
}