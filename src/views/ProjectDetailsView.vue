<template>

  <div id='project-details-nav-bar'>
    <div id='project-details' v-for='(value, idx) in projectDetailsNavBar' :key='idx'>
      <RouterLink :to='value.url'>
        <div class='title'>{{ value.name }}</div>
      </RouterLink>
    </div>
  </div>

  <div id='project-details-contents'>
    <RouterView />
    <ProjectInfoComponent />

  </div>

</template>

<script setup lang='ts'>
import { ref, onBeforeMount } from 'vue'
import { useProjectStore } from '@/store/ProjectStore'
import { RouterView, useRoute } from 'vue-router'

import { getProjectDetails } from '@/services/api/ProjectService'
import type { ProjectDetailResponse, ProjectDetail } from '@/services/types/ProjectResponse'

import ProjectInfoComponent from '@/modules/project/components/ProjectInfoComponent.vue'

const projectStore = useProjectStore()
const projectDetailResponse = ref<ProjectDetail>()

const route = useRoute()
const projectId = Number(route.params.id)

const projectDetailsNavBar: any = [
  {
    name: '스토리',
    url: '/project-details/' + projectId
  },
  {
    name: '지지서명',
    url: '/project-details/' + projectId + '/support-signature'
  },
  {
    name: '함께 하는 서포터',
    url: '/project-details/' + projectId + '/supporter-with-us'
  }
]

onBeforeMount(async () => {
  if (!isNaN(projectId)) {
    try {
      const response: ProjectDetailResponse = await getProjectDetails(projectId)
      projectDetailResponse.value = response.projectDetail
      if (projectDetailResponse.value !== undefined) {
        projectStore.setData(projectDetailResponse.value)
      }
    } catch (error) {
      alert('프로젝트 조회 실패')
    }
  }
})

</script>>

<style scoped>

#project-details-nav-bar {
  display: flex;
  margin-top: 34px;
  align-items: center;
  margin-bottom: 50px;
  justify-content: center;
}

#project-details {
  display: flex;
  align-items: flex-start;
  gap: 19px;
  /* border-bottom: 4px solid #EBEBEB;*/
}

.title {
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 3px solid #65B9BB;

  color: #000;
  text-align: center;
  /*font-family: Open Sans;*/
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
}
</style>