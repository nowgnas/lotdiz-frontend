<template>
<h3>프로젝트 상세 조회 - 스토리</h3>
{{ projectDetailResponse }}

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getProjectDetails } from '@/services/api/ProjectService';
import type { ProjectDetailResponse } from '@/services/types/ProjectResponse';
import type { Ref } from 'vue'

const projectDetailResponse = ref<ProjectDetailResponse>();


onMounted(async () => {
  try {
    const response: ProjectDetailResponse = await getProjectDetails(1);
    projectDetailResponse.value = response;
  } catch (error) {
    alert("프로젝트 조회 실패");
  }
});

</script>

<style>

</style>