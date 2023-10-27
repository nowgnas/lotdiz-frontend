<script setup lang='ts'>

import ProductItem from '@/modules/maker/components/ProductItem.vue'
import ProjectFundingItem from '@/modules/maker/components/ProjectFundingItem.vue'
</script>

<template>
  <div class='project-detail-box'>
    <div class='project-name'>
      <div class='text'>새콤달콤 딸기</div>
    </div>
    <div class='achievement-amount'>
      <div class='typography'>지금까지<span class='value'>4,000,000</span>원 달성</div>
    </div>
    <div class='project-due-date'>
      <div class='text'>2023-11-01 까지 (20일 남음)</div>
    </div>
    <div class='number-of-supporter'>
      <div class='typography'><span class='value'>245명의 서포터</span>가 함께하는 중</div>
    </div>
    <div class='achievement-rate'>
      <div class='typography'>현재 달성률 <span class='value'>500%</span></div>
    </div>
    <div class='product-item-list-box'>
      <ProductItem />
    </div>
  </div>
</template>

<style scoped>
@import "../../../assets/css/maker/ProjectDetailInformation.css";
</style>