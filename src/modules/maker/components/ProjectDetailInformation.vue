<script setup lang='ts'>

import ProductItem from '@/modules/maker/components/ProductItem.vue'

const props = defineProps(['status'])

</script>

<template>
  <div class='project-detail-box'>
    <div class='project-name'>
      <div class='text'>{{ props.status.projectName }}</div>
    </div>
    <div class='achievement-amount'>
      <div class='typography'>지금까지<span class='value'>{{ props.status.accumulatedFundingAmount }}</span>원 달성</div>
    </div>
    <div class='project-due-date'>
      <div class='text'>{{ props.status.projectDueDate }} 까지 ({{ props.status.remainDate }}일 남음)</div>
    </div>
    <div class='number-of-supporter'>
      <div class='typography'><span class='value'>{{ props.status.numberOfBuyers }}명의 서포터</span>가 함께하는 중</div>
    </div>
    <div class='achievement-rate'>
      <div class='typography'>현재 달성률 <span class='value'>{{ props.status.fundingAchievementRate }}%</span></div>
    </div>
    <div class='product-item-list-box'>
      <ProductItem v-for='item in props.status.products' :product='item' />
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/maker/ProjectDetailInformation.css";
</style>