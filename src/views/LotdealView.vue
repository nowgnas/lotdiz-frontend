<template>

  <img alt="lotdeal" class="poster-img" src="../../public/banner-img/banner-lotdeal.png">

  <!-- sort section start -->
  <div id="sort-bar">
    <div class="sort-select-bar">
      <div class="sort-condition" @click="sort='createdAt,desc'">
          최신순
      </div>
      <div class="sort-condition" @click="sort='lotdealDueTime,asc'">
        마감임박순
      </div>
    </div>
  </div>
  <!-- sort section end -->

    <!-- project-list section start -->
  <div id="project-list">
    <ProjectCardComponent v-for="project in lotdealProjectResponseList"  :key="project.projectId" :project = "project" />
  </div>
  <!-- project list section end -->


</template>

<script setup lang="ts">
import { ref, onBeforeMount, watch } from 'vue';
import { getLotdealProjects } from '@/services/api/ProjectService';
import type { ProjectsResponse, LotdealProject } from '@/services/types/ProjectResponse';
import ProjectCardComponent from '@/modules/project/components/ProjectCardComponent.vue';

const sort = ref('createdAt,desc');
const totalPages = ref(0);
const lotdealProjectResponseList = ref<Array<LotdealProject>>([]);

const getLotdealProjectsRequest = async (page: number, size: number, sort: string) => {
  try {
    const response: ProjectsResponse<LotdealProject> = await getLotdealProjects(page, size, sort);
    lotdealProjectResponseList.value = response['projects'];
    totalPages.value = response['totalPages'];
  } catch (error) {
    alert("프로젝트 조회에 실패하였습니다.");
  }
}

onBeforeMount(async () => {
  await getLotdealProjectsRequest(0, 20, sort.value);
});

watch(sort, async (newSort, oldSort) => {
  await getLotdealProjectsRequest(0, 20, newSort);
});

</script>

<style>

</style>