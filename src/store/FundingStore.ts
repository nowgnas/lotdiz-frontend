import {defineStore} from "pinia";
import type {FundingDetail} from "@/services/types/FundingRequest";

interface FundingState {
    fundingDetails: FundingDetail;
}

export const useFundingStore = defineStore("funding", {

    state: (): FundingState => ({
        fundingDetails: {
            itemName: '',
            fundingSupporterEmail: '',
            fundingTotalAmount: 0,
            fundingIsRefundable: false,
            fundingSupportAmount: 0,
            fundingLotdealDiscountAmount: 0,
            fundingMembershipDiscountAmount: 0,
            fundingUsedPoint: 0,
            fundingPrivacyAgreement: true,
            supporterWithUsIsAmountPublic: true,
            supporterWithUsIsNamePublic: true,
            deliveryCost: 0,
            fundingPaymentsActualAmount: 0,
            deliveryAddressRecipientName: '',
            deliveryAddressRecipientPhoneNumber: '',
            deliveryAddressRequest: '',
            deliveryAddressRoadName: '',
            deliveryAddressDetail: '',
            deliveryAddressZipCode: '',
        }
    }),

    actions: {
        // 부분적인 데이터 업데이트를 위한 메소드
        updateData(partialFundingInfos: Partial<FundingDetail>) {
            // Object.assign을 사용하여 현재 상태에 새로운 데이터를 병합
            Object.assign(this.fundingDetails, partialFundingInfos);
        }
    },

});