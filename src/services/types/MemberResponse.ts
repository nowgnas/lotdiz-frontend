export interface MemberInfoForQueryResponse {
    memberId: number;
    memberName: string;
    memberPhoneNumber: string;
    memberEmail: string;
    createdAt: string;
}

export interface KakaoPayReadyResponse {
    next_redirect_pc_url: string;
    membershipSubscriptionId: number;
}

export interface MembershipInfoForShowResponse {
    membershipPolicyGrade: string,
    membershipPolicySubscriptionFee: number,
    membershipPolicyDiscountRate: number,
    membershipPolicyPointAccumulationRate: number,
    membershipSubscriptionCreatedAt: string,
    membershipSubscriptionExpiredAt: string
}

export interface LikesDetailResponse {
    projectId: number,
    remainingDays: number,
    projectName: string,
    projectThumbnailImageUrl: string,
    makerName: string,
    fundingAchievementRate: number,
    accumulatedFundingAmount: number
}