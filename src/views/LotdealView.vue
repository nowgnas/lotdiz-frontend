<template>

  <img alt="lotdeal" class="poster-img" src="/banner-img/banner-lotdeal.png">

  <!-- sort section start -->
  <div id="sort-bar">
    <div class="sort-select-bar">
      <div class="sort" :class="{ 'active': sort === 'createdAt,desc'}"  @click="sort='createdAt,desc'">
        최신순
      </div>
      <div class="sort" :class="{ 'active': sort === 'lotdealDueTime,asc'}" @click="sort='lotdealDueTime,asc'">
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

  <!-- pagination section start -->
  <div class="pages">
    <a href="#" v-if="page !== 0" @click="page -= 1">
      <div class="back-page-btn-container">
        <img class="back-page-btn" src="/common/back-page-btn.svg">
      </div>
    </a>
    <a href="#" v-else>
      <div class="back-page-btn-container">
        <img class="back-page-btn" src="/common/back-page-btn.svg">
      </div>
    </a>
    <li v-for="pageNumber in totalPages" :key="pageNumber">
      <a href="#" @click="page = pageNumber - 1">
        <div class="page-btn" :class="{'selected': (page + 1) === pageNumber }">
          {{ pageNumber }}
        </div>
      </a>
    </li>

    <a href="#" v-if="(page !== (totalPages - 1)) && (totalPages !== 1)"
       @click="page += 1">
      <div class="front-page-btn-container">
        <img class="front-page-btn" src="/common/front-page-btn.svg">
      </div>
    </a>
    <a href="#" v-else>
      <div class="front-page-btn-container">
        <img class="front-page-btn" src="/common/front-page-btn.svg">
      </div>
    </a>
  </div>
  <!-- pagination section end -->

</template>

<script setup lang="ts">
import { ref, onBeforeMount, watch } from 'vue';
import { getLotdealProjects } from '@/services/api/ProjectService';
import type { CommonProjectsResponse, LotdealProject } from '@/services/types/ProjectResponse';
import ProjectCardComponent from '@/modules/project/components/ProjectCardComponent.vue';

const size:number = 12;
const sort = ref<string>('createdAt,desc');
const page = ref<number>(0);

const lotdealProjectResponseList = ref<Array<LotdealProject>>([]);
const totalPages = ref(0);

const getLotdealProjectsRequest = async (page: number, size: number, sort: string) => {
  try {
    const response: CommonProjectsResponse<LotdealProject> = await getLotdealProjects(page, size, sort);
    lotdealProjectResponseList.value = response['projects'];
    totalPages.value = response['totalPages'];
  } catch (error) {
    alert("프로젝트 조회에 실패하였습니다.");
  }
}

onBeforeMount(async () => {
  await getLotdealProjectsRequest(page.value,  size, sort.value);
});

watch([page, sort], async ([newPage, newSort], [oldPage, oldSort])=> {
  await getLotdealProjectsRequest(newPage, size, newSort);
});

</script>

<style scoped>
@import '@/assets/css/project-list.css';
@import '@/assets/css/pagenavbar.css';

</style>