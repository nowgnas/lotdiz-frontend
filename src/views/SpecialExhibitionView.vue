<template>

  <img alt="camping" class="camping-img" src="../../public/banner-camping.png">

  <!-- sort section start -->
  <div id="sort-bar">
    <div class="sort-select-bar">
      <div class="sort-condition" @click="sort='createdAt,desc'">
          최신순
      </div>
      <div class="sort-condition" @click="sort='projectDueDate,asc'">
        마감임박순
      </div>
    </div>
  </div>
  <!-- sort section end -->

    <!-- project-list section start -->
  <div id="project-list">
    <ProjectCardComponent v-for="project in specialExhibitionProjectResponseList"  :key="project.projectId" :project = "project" />
  </div>
  <!-- project list section end -->
  
</template>

<script setup lang="ts">
import { ref, watch, onBeforeMount } from 'vue'
import { getSpecialExhibition  } from '@/services/api/ProjectService';
import type { ProjectsResponse, SpecialExhibitionResponse } from '@/services/types/ProjectResponse';
import ProjectCardComponent from '@Components/ProjectCardComponent.vue';

const tag = ref('캠핑');
const sort = ref('createdAt,desc');
const totalPages = ref(0);
const specialExhibitionProjectResponseList = ref<Array<SpecialExhibitionResponse>>([]);

const getSpecailExhibitionProjectsRequest = async (tag: string, page: number, size: number, sort: string) => {
  try {
    const response: ProjectsResponse<SpecialExhibitionResponse> = await getSpecialExhibition(tag, page, size, sort);
    specialExhibitionProjectResponseList.value = response['projects'];
    totalPages.value = response['totalPages'];
  } catch (error) {
    throw error;
  }
}

onBeforeMount(async () => {
  await getSpecailExhibitionProjectsRequest(tag.value, 0, 20, sort.value);
});

watch(sort, async (newSort, oldSort) => {
  await getSpecailExhibitionProjectsRequest(tag.value, 0, 20, sort.value);
});

</script>

<style>

</style>