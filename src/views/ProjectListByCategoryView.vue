<template>

  <!-- categoty menu section start -->
  <div id="category-menu-bar">
  <div id="category-menu">
    <div class="category-logo" v-if="category==='가전'">
      <img alt='food.svg' src='/common/home-appliances-icon.svg'>
    </div>
    <div class="category-logo" v-else-if="category==='패션'">
      <img alt='food.svg' src='/common/fashion-icon.svg'>
    </div>
    <div class="category-logo" v-else-if="category==='테크'">
      <img alt='food.svg' src='/common/tech-icon.svg'>
    </div>
    <div class="category-logo" v-else-if="category==='도서'">
      <img alt='food.svg' src='/common/book-icon.svg'>
    </div>
    <div class="category-logo" v-else-if="category==='홈리빙'">
      <img alt='food.svg' src='/common/home-living-icon.svg'>
    </div>
    <div class="category-logo" v-else-if="category==='음식'">
      <img alt='food.svg' src='/common/food-icon.svg'>
    </div>
    <div class="category-logo" v-else-if="category==='레저'">
      <img alt='food.svg' src='/common/leisure-icon.svg'>
    </div>
    
    <div class="category-name">
      {{  category }}
    </div>
  </div>
  </div>
  <!-- category menu section end -->

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
    <ProjectCardComponent v-for="project in projectByCategoryResponseList"  :key="project.projectId" :project = "project" />
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

<script setup lang = "ts">
import { ref, computed, watch, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { getProjectsByCategory } from '@/services/api/ProjectService';
import type { ProjectsByCategory, CommonProjectsResponse } from '@/services/types/ProjectResponse';
import ProjectCardComponent from '@/modules/project/components/ProjectCardComponent.vue';

const route = useRoute();
const category = computed(() => {
    return typeof route.query.category === 'string' ? route.query.category : null;
});

const size:number = 12;
const sort = ref<string>('createdAt,desc');
const page = ref<number>(0);

const projectByCategoryResponseList = ref<Array<ProjectsByCategory>>([]);
const totalPages = ref<number>(0);

const getProjectsByCategoryRequest = async (categoryName: string, page: number, size: number, sort: string) => {
  try {
    const response:CommonProjectsResponse<ProjectsByCategory> = await getProjectsByCategory(categoryName, page, size, sort);
    projectByCategoryResponseList.value = response['projects'];
    totalPages.value = response['totalPages'];

  } catch (error) {
    alert("프로젝트 조회에 실패하였습니다.")
  }
};

onBeforeMount(async () => {
  if (category.value != undefined) {
      await getProjectsByCategoryRequest(category.value, page.value,  size, sort.value);
  }
})

watch([category, page, sort], async ([newCategory, newPage,  newSort], [oldCategory, oldPage, oldSort]) => {
  if (typeof newCategory === 'string' && typeof newSort === 'string'
    && typeof newPage === 'number' ) {
      await getProjectsByCategoryRequest(newCategory, newPage, size, newSort);
  }
});

</script>

<style scoped>
@import '@/assets/css/project-list.css';
@import '@/assets/css/pagenavbar.css';
</style>