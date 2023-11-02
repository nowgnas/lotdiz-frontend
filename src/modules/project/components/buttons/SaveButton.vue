<script setup lang='ts'>
const props = defineProps(['register'])

</script>

<template>
  <div class='project-register-save-box'>
    <div class='save-btn'>
      <div v-if='!props.register' class='text'>저장하기</div>
      <div v-else-if='props.register' class='text'>프로젝트 등록하기</div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/projectregister/SaveButton.css";
</style>