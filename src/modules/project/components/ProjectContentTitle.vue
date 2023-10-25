<script setup lang="ts">
const props = defineProps(['title']);
</script>

<template>
  <div class="project-register-content-title">
    <div class="title-text">{{ props.title.title }}</div>
    <div class="title-description">
      <div class="text">{{ props.title.description }}</div>
    </div>
  </div>
</template>

<style scoped>
@import "../../../assets/css/projectregister/ProjectContentTitle.css";
</style>