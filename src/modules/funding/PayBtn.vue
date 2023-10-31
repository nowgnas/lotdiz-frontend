<template>
  <input
      style='
      width: 100%;
      height: 500%;
      background-color: #58c1c2;
      color: white;
      font-size: 1.5rem;
      padding: 20px;
      border: 1px solid;
      margin: 10px 0 50px 0;
    '
      type='button'
      value='결제하기'
      @click='readyForFundingPayments'
  />
</template>

<script lang='ts' setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import type {
  FundingPaymentReadyResponse,
  FundingPaymentsReadyInfo,
  PayReadyResponse
} from '@/services/types/FundingRequest'
import { postFundingInfoForPayReady } from '@/services/api/FundingService'

const router = useRouter()

const readyForFundingPayments = () => {
  const fundingPaymentsRequest: FundingPaymentsReadyInfo = {
    quantity: 1,
    itemName: '무화과 1kg',
    totalAmount: '22000',
    taxFreeAmount: '0'
  }
  const response: Promise<PayReadyResponse> = postFundingInfoForPayReady(fundingPaymentsRequest)

  response
      .then((data: PayReadyResponse) => {
        const fundingPaymentReadyResponse: FundingPaymentReadyResponse = data.payReady
        const redirectUrl: string = fundingPaymentReadyResponse.next_redirect_pc_url
        const tid: string = fundingPaymentReadyResponse.tid

        window.localStorage.setItem('tid', tid)
        window.open(
            redirectUrl,
            '펀딩 결제 QR 코드',
            'top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no'
        )
      })
      .catch((error) => {
        console.error('오류발생: ', error)
      })
}

const messageHandler = (event: MessageEvent) => {
  if (event.data === 'complete') {
    // 자식 페이지 작업 완료 후 route
    router.push('/funding/details')
  }
}

onMounted(() => {
  window.addEventListener('message', messageHandler)
})

onUnmounted(() => {
  window.removeEventListener('message', messageHandler)
})

</script>

<style></style>
