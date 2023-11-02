<script setup lang='ts'>
const props = defineProps(['product'])
</script>

<template>
  <div class='product-item-box'>
    <div class='product-name'>
      <div class='text'>{{ props.product.productName }}</div>
    </div>
    <div class='remain-amount'>
      <div class='text'>{{ props.product.productCurrentStockQuantity }}개 남음</div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/maker/ProductItem.css";
</style>