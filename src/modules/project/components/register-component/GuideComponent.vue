<script setup lang="ts">
const props = defineProps(['guideContent']);

</script>

<template>
  <div class="product-register-guide-box">
    <div class="guide-title">
      <div class="text">{{ props.guideContent.title }}</div>
    </div>
    <div class="guid-description">
      <div class="description-subject">
        <div v-for="item in props.guideContent.key" :key="item" class="item">
          <div class="text">{{ item }}</div>
        </div>
      </div>
      <div class="description-detail">
        <div v-for="item in props.guideContent.value" :key="item" class="item">
          <div class="text">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/projectregister/GuideComponent.css";
</style>