export interface MemberInfoForSignUpRequest {
    username: string;
    memberPassword: string;
    memberName: string;
    memberPhoneNumber: string;
    memberPrivacyAgreement: boolean;
}

// {
//     "memberEmail": "zjadlspun1114@naver.com",
//     "memberPassword": "woo1234@",
//     "memberName": "WOOYUP2",
//     "memberPhoneNumber": "01011111111",
//     "memberPrivacyAgreement": true
// }

export interface MembershipInfoForJoinRequest {
    membershipPolicyId: number;
    itemName: string;
    totalAmount: string;
    taxFreeAmount: string;
}