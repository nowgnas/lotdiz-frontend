<script setup lang="ts">
const props = defineProps(['content'])
</script>

<template>
  <div class="select-btn">
    <div class="select-btn-title">
      <div class="text">{{ props.content.title }}</div>
      <div class="select-btn-content">
        <div class="text">{{ props.content.content }}</div>
      </div>
      <input type="button" value="선택하기" class="select-lotdeal">
    </div>

  </div>
</template>

<style scoped>
@import "../../../../assets/css/projectregister/SelectLotdeal.css";
</style>