<script setup lang='ts'>

import ProjectCard from '@/modules/maker/components/ProjectCard.vue'
import { onMounted, ref } from 'vue'
import { getRegisteredProjectList } from '@/services/api/MakerMyPageService'
import { useRouter } from 'vue-router'

const project = ref()

onMounted(async () => {
  const registeredProjectList: any = await getRegisteredProjectList(0, 10, 'createdAt')
  project.value = registeredProjectList.projects
})
const router = useRouter()
const showDetail = (projectId: number) => {

  router.push({
    name: 'project-detail',
    params: {
      id: projectId
    }
  })
}

</script>

<template>
  <div class='registered-project-box'>
    <div class='registered-project-list-title'>
      <div class='text'>펀딩중인 프로젝트</div>
    </div>
    <div class='project-list-box'>
      <ProjectCard v-for='item in project' :project='item' @click='showDetail(item.projectId)' />
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/maker/RegisteredProjectList.css";
</style>