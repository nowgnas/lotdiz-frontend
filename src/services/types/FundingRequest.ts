export interface FundingProductsRequest {
  productId: number;
  productFundingPrice: number;
  productFundingQuantity: number;
  productName: string;
  productDescription: string;
}


export interface FundingPaymentsReadyInfo {
  quantity: number;
  itemName: string;
  totalAmount: string;
  taxFreeAmount: string;
}

export interface FundingPaymentReadyResponse {
  tid: string;
  next_redirect_pc_url: string;
}

export interface FundingDetail {
  // projectId: number,   // projectStore 사용할것
  // products: [],        // projectStore 사용할것
  itemName: string,
  fundingSupporterEmail: string,
  fundingTotalAmount: number,
  fundingIsRefundable: false,
  fundingSupportAmount: number,
  fundingLotdealDiscountAmount: number,
  fundingMembershipDiscountAmount: number,
  fundingUsedPoint: number,
  fundingPrivacyAgreement: boolean,
  supporterWithUsIsAmountPublic: boolean,
  supporterWithUsIsNamePublic: boolean,
  deliveryCost: number,
  fundingPaymentsActualAmount: number,
  deliveryAddressRecipientName: string,
  deliveryAddressRecipientPhoneNumber: string,
  deliveryAddressRequest: string,
  deliveryAddressRoadName: string,
  deliveryAddressDetail: string,
  deliveryAddressZipCode: string,
}