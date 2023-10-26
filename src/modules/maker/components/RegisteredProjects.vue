<script setup lang='ts'>

import ProjectCard from '@/modules/maker/components/ProjectCard.vue'
</script>

<template>
  <div class='registered-project-box'>
    <div class='registered-project-list-title'>
      <div class='text'>펀딩중인 프로젝트</div>
    </div>
    <div class='project-list-box'>
      <ProjectCard />
    </div>
  </div>
</template>

<style scoped>
@import "../../../assets/css/maker/RegisteredProjectList.css";
</style>