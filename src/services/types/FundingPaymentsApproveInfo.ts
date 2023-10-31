import type {FundingProductsRequest} from "@/services/types/FundingRequest";

export interface FundingPaymentsApproveInfo {
    tid: string | null;
    pgToken: string;
    partnerOrderId: string;
    partnerUserId: string;
    projectId: number;
    products: FundingProductsRequest[];
    itemName: string;
    fundingSupporterEmail: string;
    fundingTotalAmount: number;
    fundingIsRefundable: boolean;
    fundingSupportAmount: number;
    fundingLotdealDiscountAmount: number;
    fundingMembershipDiscountAmount: number;
    fundingUsedPoint: number;
    fundingPrivacyAgreement: boolean;
    supporterWithUsIsNamePublic: boolean;
    supporterWithUsIsAmountPublic: boolean;
    deliveryCost: number;
    fundingPaymentsActualAmount: number;
    deliveryAddressRecipientName: string;
    deliveryAddressRecipientPhoneNumber: string;
    deliveryAddressRequest: string;
    deliveryAddressRoadName: string;
    deliveryAddressDetail: string;
    deliveryAddressZipCode: string;
}