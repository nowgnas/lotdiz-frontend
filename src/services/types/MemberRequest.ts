export interface MemberInfoForSignUpRequest {
  username: string;
  memberPassword: string;
  memberName: string;
  memberPhoneNumber: string;
  memberPrivacyAgreement: boolean;
}

export interface MembershipInfoForJoinRequest {
  membershipPolicyId: number;
  itemName: string;
  totalAmount: string;
  taxFreeAmount: string;
}

export interface InfoForSignIn {
  username: string,
  password: string,
}

export interface MemberInfoForChangeRequest {
  memberName: string,
  originPassword: string,
  newPassword?: string,
  memberPhoneNumber: string
}