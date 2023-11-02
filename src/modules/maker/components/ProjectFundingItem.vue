<script setup lang='ts'>
import { ref } from 'vue'

const props = defineProps(['funding'])
const deliveryStatus = ref()

const status = {
  'PENDING': '배송 준비중',
  'PROCESSING': '배송중',
  'COMPLETED': '배송 완료',
  'CANCELED': '배송 취소'
}
deliveryStatus.value = status[props.funding.deliveryStatus]
</script>

<template>
  <div class='funding-item'>
    <div class='funding-date'>
      <div class='text'>{{ props.funding.fundingDate }}</div>
    </div>
    <div class='supporter-name'>
      <div class='text'>{{ props.funding.supporterName }}</div>
    </div>
    <div class='funding-amount'>
      <div class='text'>{{ props.funding.totalFundingAmount }}원</div>
    </div>
    <div class='delivery-status'>
      <div class='text'>{{ deliveryStatus }}</div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/maker/ProjectFundingItem.css";
</style>