<template>
  <div style='display:flex; flex-direction: column; gap:10px; width: fit-content'>
    <div> 결제가 진행중입니다. 잠시만 기다려주세요</div>
    <img alt='loading' src='@/assets/loading.gif'>
  </div>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { postFundingInfoForPayApproval } from '@/services/api/FundingService'
import type { FundingPaymentsApproveInfo } from '@/services/types/FundingPaymentsApproveInfo'

const route = useRoute()

const fundingPaymentsRequest: FundingPaymentsApproveInfo = {
  tid: window.localStorage.getItem('tid'),
  pgToken: '',
  partnerOrderId: '',
  partnerUserId: '',
  projectId: 3,
  products: [
    {
      productId: 6,
      productFundingPrice: 22000,
      productFundingQuantity: 1,
      productName: 'Product 1',
      productDescription: 'Description 1'
    }
  ],
  itemName: '무화과 1kg',
  fundingSupporterEmail: 'abc@gmail.com',
  fundingTotalAmount: 22000,
  fundingIsRefundable: false,
  fundingSupportAmount: 0,
  fundingLotdealDiscountAmount: 0,
  fundingMembershipDiscountAmount: 660,
  fundingUsedPoint: 400,
  fundingPrivacyAgreement: true,
  supporterWithUsIsAmountPublic: true,
  supporterWithUsIsNamePublic: true,
  deliveryCost: 0,
  fundingPaymentsActualAmount: 20940,
  deliveryAddressRecipientName: '임한결',
  deliveryAddressRecipientPhoneNumber: '010-1234-5678',
  deliveryAddressRequest: '문 앞',
  deliveryAddressRoadName: '서울시 강동구 올림픽로 22길 21-2',
  deliveryAddressDetail: '1101호',
  deliveryAddressZipCode: '05321'
}

onMounted(
  async () => {
    try {
      // index.ts에 url mapping 정의됨.
      fundingPaymentsRequest.partnerOrderId = route.params.order as string
      fundingPaymentsRequest.partnerUserId = route.params.user as string
      fundingPaymentsRequest.pgToken = route.query.pg_token as string

      // TODO: projectID 받아서 넣기
      const response = await postFundingInfoForPayApproval(fundingPaymentsRequest, 1)
      alert(response.detail)
      window.opener.postMessage('complete', '*')
      window.close()
    } catch (error) {
      console.error('An error occurred:' + error)
    }
  })

</script>
