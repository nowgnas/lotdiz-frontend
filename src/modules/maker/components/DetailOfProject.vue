<script setup lang='ts'>

import ProjectDetailInformation from '@/modules/maker/components/ProjectDetailInformation.vue'
import ProjectFundingItem from '@/modules/maker/components/ProjectFundingItem.vue'
import { getRegisteredProjectDetailStatus, getRegisteredProjectFundingList } from '@/services/api/MakerMyPageService'
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'

const projectId = ref()
const route = useRoute()
const detailStatus = ref()
const detailFunding = ref()

onBeforeMount(async () => {

  projectId.value = route.params.id

  // get project status
  let defaultStatus = await getRegisteredProjectDetailStatus(projectId.value)
  detailStatus.value = defaultStatus
// get project funding list
  let detailFundingList: any = await getRegisteredProjectFundingList(projectId.value)
  detailFunding.value = detailFundingList['registeredProjectFundingDtos']
})

</script>

<template>
  <div class='project-detail-component'>
    <ProjectDetailInformation :status='detailStatus' />
  </div>
  <div class='funding-history'>
    <ProjectFundingItem v-for='item in detailFunding' :funding='item' />
  </div>
</template>

<style scoped>
@import "@/assets/css/maker/ProjectFundingItem.css";
</style>