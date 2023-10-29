<template>
  <div style="display:flex; flex-direction: column; gap:10px; width: fit-content">
    <div> 결제가 진행중입니다. 잠시만 기다려주세요</div>
    <img alt="loading" src="	https://blog.kakaocdn.net/dn/bL4W42/btrbmyGyR6g/Kk66Y0dk5x4H5kHaWDBfNK/img.gif
">
  </div>
</template>

<script lang="ts" setup>
import {onMounted} from 'vue';
import {useRoute} from 'vue-router';
import {postFundingInfoForPayApproval} from "@/services/api/FundingService";
import type {FundingPaymentsApproveInfo} from "@/services/types/FundingPaymentsApproveInfo";

const route = useRoute();

const fundingPaymentsRequest: FundingPaymentsApproveInfo = {
  tid: window.localStorage.getItem("tid"),
  pgToken: '',
  partnerOrderId: '',
  partnerUserId: '',
  projectId: 1,
  products: [
    {
      productId: 1,
      productFundingPrice: 100,
      productFundingQuantity: 10,
      productName: 'Product 1',
      productDescription: 'Description 1',
    },
    {
      productId: 2,
      productFundingPrice: 200,
      productFundingQuantity: 5,
      productName: 'Product 2',
      productDescription: 'Description 2',
    }
  ],
  itemName: '무화과 1kg',
  fundingSupporterEmail: 'abc@gmail.com',
  fundingTotalAmount: '22000',
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
        fundingPaymentsRequest.partnerOrderId = route.params.order;
        fundingPaymentsRequest.partnerUserId = route.params.user;
        fundingPaymentsRequest.pgToken = route.query.pg_token;
        console.log("orderId:" + route.params.order);
        console.log("userId:" + route.params.user);
        console.log("pgToken:" + fundingPaymentsRequest.pgToken);
        console.log("tid:" + localStorage.getItem("tid"));

        const response: string = await postFundingInfoForPayApproval(fundingPaymentsRequest, 1);
        // 이후 response를 처리하는 코드를 작성하면 됩니다.
        console.log(response.message);
        alert(response.data);
        window.opener.postMessage('complete', '*');
        window.close();
      } catch (error) {
        console.error('An error occurred:', error);
      }
    });

</script>
