<script setup lang='ts'>

import ProjectDetailInformation from '@/modules/maker/components/ProjectDetailInformation.vue'
import ProjectFundingItem from '@/modules/maker/components/ProjectFundingItem.vue'
</script>

<template>
  <div class='project-detail-component'>
    <ProjectDetailInformation />
  </div>
  <div class='funding-history'>
    <ProjectFundingItem />
  </div>
</template>

<style scoped>
@import "../../../assets/css/maker/ProjectFundingItem.css";
</style>