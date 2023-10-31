<template>

  <div id='project-details-nav-bar'>
    <div id='project-details' v-for='(value, idx) in projectDetailsNavBar' :key='idx'>
      <RouterLink :to='value.url'>
        <div class='title' :class="{'active' : currentPath === value.path }">{{ value.name }}</div>
      </RouterLink>
    </div>
  </div>

  <div id='project-details-contents'>
    <RouterView />
    <ProjectInfoComponent />

  </div>

</template>

<script setup lang='ts'>
import { ref, onBeforeMount, watch, onMounted } from 'vue'
import { useProjectStore } from '@/store/ProjectStore'
import { RouterView, useRoute } from 'vue-router'

import type { ProjectDetail } from '@/services/types/ProjectResponse'

import ProjectInfoComponent from '@/modules/project/components/ProjectInfoComponent.vue'

const projectStore = useProjectStore()
const projectDetailResponse = ref<ProjectDetail>()

const route = useRoute()
const projectId = Number(route.params.id)
const currentPath = ref<string>('')

const projectDetailsNavBar: any = ref([
    {
      name: '스토리',
      url: '/project-details/' + projectId,
      path: '/story'
    },
    {
      name: '지지서명',
      url: '/project-details/' + projectId + '/support-signature',
      path: '/support-signature'
    },
    {
      name: '함께 하는 서포터',
      url: '/project-details/' + projectId + '/supporter-with-us',
      path: '/supporter-with-us'
    }
  ]
)

const checkPath = (path: string) => {
  if (path.includes('/support-signature')) {
    currentPath.value = '/support-signature'
  } else if (path.includes('/supporter-with-us')) {
    currentPath.value = '/supporter-with-us'
  } else {
    currentPath.value = '/story'
  }
}

onBeforeMount(async () => {
  await projectStore.setData(projectId)
  projectDetailResponse.value = projectStore.projectDetails
})

onMounted(() => {
  checkPath(route.path)
})

watch(() => route.path, (newPath) => {
  checkPath(newPath)
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
  border-bottom: 3px solid rgba(191, 214, 215, 0.83);

  color: #000;
  text-align: center;
  /*font-family: Open Sans;*/
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
}

.title.active {
  border-bottom: 3px solid #54cccd;
}
</style>