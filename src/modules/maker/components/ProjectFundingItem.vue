<script setup lang='ts'>
import { ref } from 'vue'

const props = defineProps(['funding'])
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
      <div class='text'>{{ props.funding.totalFundingAmount }}</div>
    </div>
    <div class='delivery-status'>
      <div class='text'>{{ props.funding.deliveryStatus }}</div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/maker/ProjectFundingItem.css";
</style>