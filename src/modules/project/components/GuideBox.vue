<script setup lang="ts">

const props = defineProps(['guideContent']);

</script>

<template>
  <div class="guide-box">
    <div class="guide-title-box">
      <svg class="exclamation-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
           fill="none">
        <path d="M12 19V19.01M12 15V5" stroke="#4FAFB1" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>
      <div class="guide-title">{{ props.guideContent.title }}</div>
    </div>
    <div class="guide-content">
      <ul class="text">
        <li v-for="item in props.guideContent.description" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import "../../../assets/css/projectregister/GuideBox.css";
</style>