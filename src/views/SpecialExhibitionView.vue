<template>

  <img alt="camping" class="poster-img" src="/banner-img/banner-camping.png">

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
import type { CommonProjectsResponse, SpecialExhibition } from '@/services/types/ProjectResponse';
import ProjectCardComponent from '@/modules/project/components/ProjectCardComponent.vue';

const tag = ref('캠핑');
const sort = ref('createdAt,desc');
const totalPages = ref(0);
const specialExhibitionProjectResponseList = ref<Array<SpecialExhibition>>([]);

const getSpecialExhibitionProjectsRequest = async (tag: string, page: number, size: number, sort: string) => {
  try {
    const response: CommonProjectsResponse<SpecialExhibition> = await getSpecialExhibition(tag, page, size, sort);
    specialExhibitionProjectResponseList.value = response['projects'];
    totalPages.value = response['totalPages'];
  } catch (error) {
    alert("조회에 실패하였습니다.")
  }
}

onBeforeMount(async () => {
  await getSpecialExhibitionProjectsRequest(tag.value, 0, 20, sort.value);
});

watch(sort, async (newSort, oldSort) => {
  await getSpecialExhibitionProjectsRequest(tag.value, 0, 20, sort.value);
});

</script>

<style scoped>
@import '@/assets/css/project-list.css';

</style>