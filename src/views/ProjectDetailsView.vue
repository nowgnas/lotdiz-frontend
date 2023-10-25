<template>
    <!-- 프로젝트 스토리(상세 설명), 지지서명, 함께 하는 서포터 -->
    <div v-if="$route.path == '/project-details/support-signature'">
      <SupportSignatureComponent/>
    </div>

    <div v-else-if="$route.path == '/project-details/supporter-with-us'">
      <SupporterWithUsComponent/>
    </div>

    <div v-else>
      <ProjectImageSectionComponent/>
    </div>

</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useProjectStore } from '@/store/ProjectStore';

import { getProjectDetails } from '@/services/api/ProjectService';
import type { ProjectDetailResponse, ProjectDetail } from '@/services/types/ProjectResponse';

import SupporterWithUsComponent from '@/modules/project/components/SupporterWithUsComponent.vue';
import SupportSignatureComponent from '@/modules/project/components/SupportSignatureComponent.vue';
import ProjectImageSectionComponent from '@/modules/project/components/ProjectImageSectionComponent.vue';

const projectStore = useProjectStore();
const projectDetailResponse = ref<ProjectDetail>();

onBeforeMount(async () => {
  try {    
    const response: ProjectDetailResponse = await getProjectDetails(1);
    projectDetailResponse.value = response['projectDetail'];
    if (projectDetailResponse.value != undefined) {
      projectStore.setData(projectDetailResponse.value);
    }
  } catch (error) {
    alert("프로젝트 조회 실패");
  }
});

</script>>

<style>

</style>