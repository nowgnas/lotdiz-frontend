<template>

  <img alt="camping" class="poster-img" src="/banner-img/banner-camping.png">

  <!-- sort section start -->
  <div id="sort-bar">
    <div class="sort-select-bar">
      <div class="sort" :class="{ 'active': sort === 'createdAt,desc'}"  @click="sort='createdAt,desc'">
        최신순
      </div>
      <div class="sort" :class="{ 'active': sort === 'projectDueDate,asc'}" @click="sort='projectDueDate,asc'">
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
import { ref, watch, onBeforeMount } from 'vue'
import { getSpecialExhibition  } from '@/services/api/ProjectService';
import type { CommonProjectsResponse, SpecialExhibition } from '@/services/types/ProjectResponse';
import ProjectCardComponent from '@/modules/project/components/ProjectCardComponent.vue';

const tag:string= '캠핑';
const size:number = 12;
const sort = ref<string>('createdAt,desc');
const page = ref<number>(0);

const specialExhibitionProjectResponseList = ref<Array<SpecialExhibition>>([]);
const totalPages = ref(0);

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
  await getSpecialExhibitionProjectsRequest(tag, page.value, size, sort.value);
});

watch([page, sort], async ([newPage, newSort], [oldPage, oldSort] )=> {
  await getSpecialExhibitionProjectsRequest(tag, newPage, size, newSort);
});

</script>

<style scoped>
@import '@/assets/css/project-list.css';
@import '@/assets/css/pagenavbar.css';

</style>