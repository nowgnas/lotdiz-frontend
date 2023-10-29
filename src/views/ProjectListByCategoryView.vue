<template>

  <!-- categoty menu section start -->
  <div id="category-menu-bar">
  <div id="category-menu">
    <div class="category-logo" v-if="category==='가전'">
       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
          <path d="M36.3636 0.5H3.63636C1.63636 0.5 0 2.5 0 4.94444V31.6111C0 34.0556 1.63636 36.0556 3.63636 36.0556H12.7273V40.5H27.2727V36.0556H36.3636C38.3636 36.0556 39.9818 34.0556 39.9818 31.6111L40 4.94444C40 2.5 38.3636 0.5 36.3636 0.5ZM36.3636 31.6111H3.63636V4.94444H36.3636V31.6111Z" fill="#0787FD"/>
        </svg>
    </div>
    <div class="category-logo" v-if="category==='패션'">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
          <path d="M20 0.5C18.1435 0.5 16.363 1.42187 15.0503 3.06282C13.7375 4.70376 13 6.92936 13 9.25H17C17 8.25544 17.3161 7.30161 17.8787 6.59835C18.4413 5.89509 19.2044 5.5 20 5.5C20.7956 5.5 21.5587 5.89509 22.1213 6.59835C22.6839 7.30161 23 8.25544 23 9.25C23 10.2446 22.6839 11.1984 22.1213 11.9017C21.5587 12.6049 20.7956 13 20 13C18.9 13 18 14.125 18 15.5V19.875L0.8 36C0.464188 36.3148 0.216133 36.7537 0.0909729 37.2546C-0.0341874 37.7554 -0.0301079 38.2928 0.102633 38.7906C0.235375 39.2883 0.490048 39.7213 0.830579 40.0281C1.17111 40.3349 1.58024 40.5 2 40.5H38C38.4198 40.5 38.8289 40.3349 39.1694 40.0281C39.51 39.7213 39.7646 39.2883 39.8974 38.7906C40.0301 38.2928 40.0342 37.7554 39.909 37.2546C39.7839 36.7537 39.5358 36.3148 39.2 36L22 19.875V17.625C23.4433 17.0871 24.7093 15.9817 25.61 14.473C26.5108 12.9642 26.9982 11.1326 27 9.25C27 6.92936 26.2625 4.70376 24.9497 3.06282C23.637 1.42187 21.8565 0.5 20 0.5ZM20 24.25L32 35.5H8L20 24.25Z" fill="#FFD233"/>
        </svg>
    </div>
    <div class="category-logo" v-if="category==='테크'">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="51" viewBox="0 0 40 51" fill="none">
        <path d="M24.1667 45.5C24.1667 44.6406 23.7587 43.9049 22.9427 43.293C22.1267 42.681 21.1458 42.375 20 42.375C18.8542 42.375 17.8733 42.681 17.0573 43.293C16.2413 43.9049 15.8333 44.6406 15.8333 45.5C15.8333 46.3594 16.2413 47.0951 17.0573 47.707C17.8733 48.319 18.8542 48.625 20 48.625C21.1458 48.625 22.1267 48.319 22.9427 47.707C23.7587 47.0951 24.1667 46.3594 24.1667 45.5ZM35 39.25V11.75C35 11.4115 34.8351 11.1185 34.5052 10.8711C34.1753 10.6237 33.7847 10.5 33.3333 10.5H6.66667C6.21528 10.5 5.82465 10.6237 5.49479 10.8711C5.16493 11.1185 5 11.4115 5 11.75V39.25C5 39.5885 5.16493 39.8815 5.49479 40.1289C5.82465 40.3763 6.21528 40.5 6.66667 40.5H33.3333C33.7847 40.5 34.1753 40.3763 34.5052 40.1289C34.8351 39.8815 35 39.5885 35 39.25ZM25 6.125C25 5.70833 24.7222 5.5 24.1667 5.5H15.8333C15.2778 5.5 15 5.70833 15 6.125C15 6.54167 15.2778 6.75 15.8333 6.75H24.1667C24.7222 6.75 25 6.54167 25 6.125ZM40 5.5V45.5C40 46.8542 39.3403 48.026 38.0208 49.0156C36.7014 50.0052 35.1389 50.5 33.3333 50.5H6.66667C4.86111 50.5 3.29861 50.0052 1.97917 49.0156C0.659722 48.026 0 46.8542 0 45.5V5.5C0 4.14583 0.659722 2.97396 1.97917 1.98438C3.29861 0.994792 4.86111 0.5 6.66667 0.5H33.3333C35.1389 0.5 36.7014 0.994792 38.0208 1.98438C39.3403 2.97396 40 4.14583 40 5.5Z" fill="#85B6FF"/>
      </svg>
    </div>
    <div class="category-logo" v-if="category==='도서'">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="39" viewBox="0 0 30 39" fill="none">
      <path d="M26.25 0.75H3.75C1.6875 0.75 0 2.4375 0 4.5V34.5C0 36.5625 1.6875 38.25 3.75 38.25H26.25C28.3125 38.25 30 36.5625 30 34.5V4.5C30 2.4375 28.3125 0.75 26.25 0.75ZM9.375 4.5H13.125V13.875L11.25 12.4688L9.375 13.875V4.5ZM26.25 34.5H3.75V4.5H5.625V21.375L11.25 17.1562L16.875 21.375V4.5H26.25V34.5Z" fill="#FF9F2F"/>
      </svg>
    </div>
    <div class="category-logo" v-if="category==='홈리빙'">
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none">
      <path d="M19 0.246094L37.75 15.8723V39.2498H0.25V15.8723L19 0.246094ZM15.25 35.4998H22.75V26.1248H15.25V35.4998ZM26.5 35.4998H34V17.6273L19 5.12859L4 17.6273V35.4998H11.5V22.3748H26.5V35.4998Z" fill="#BEA54B"/>
      </svg>
    </div>
    <div class="category-logo" v-if="category==='음식'">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
      <path d="M2.22222 0.5C2.81159 0.5 3.37682 0.65051 3.79357 0.918419C4.21032 1.18633 4.44444 1.54969 4.44444 1.92857V10.5C4.44372 11.3866 4.87079 12.2516 5.66679 12.9757C6.46279 13.6998 7.58854 14.2473 8.88889 14.5429V1.92857C8.88889 1.54969 9.12302 1.18633 9.53976 0.918419C9.95651 0.65051 10.5217 0.5 11.1111 0.5C11.7005 0.5 12.2657 0.65051 12.6825 0.918419C13.0992 1.18633 13.3333 1.54969 13.3333 1.92857V14.5429C14.6337 14.2473 15.7594 13.6998 16.5554 12.9757C17.3514 12.2516 17.7785 11.3866 17.7778 10.5V1.92857C17.7778 1.54969 18.0119 1.18633 18.4287 0.918419C18.8454 0.65051 19.4106 0.5 20 0.5C20.5894 0.5 21.1546 0.65051 21.5713 0.918419C21.9881 1.18633 22.2222 1.54969 22.2222 1.92857V10.5C22.2227 12.1466 21.3383 13.7428 19.7185 15.0184C18.0987 16.294 15.843 17.1707 13.3333 17.5V39.0714C13.3333 39.4503 13.0992 39.8137 12.6825 40.0816C12.2657 40.3495 11.7005 40.5 11.1111 40.5C10.5217 40.5 9.95651 40.3495 9.53976 40.0816C9.12302 39.8137 8.88889 39.4503 8.88889 39.0714V17.5C6.37919 17.1707 4.12357 16.294 2.50376 15.0184C0.883963 13.7428 -0.000522557 12.1466 2.31619e-07 10.5V1.92857C2.31619e-07 1.54969 0.234127 1.18633 0.650874 0.918419C1.06762 0.65051 1.63285 0.5 2.22222 0.5ZM33.24 4.72571C33.9467 4.26857 34.7422 3.91714 35.5556 3.68571V17.6429H31.1111V7.64286C31.1111 6.68 31.8844 5.59429 33.24 4.72571ZM35.5556 20.5V39.0714C35.5556 39.4503 35.7897 39.8137 36.2064 40.0816C36.6232 40.3495 37.1884 40.5 37.7778 40.5C38.3671 40.5 38.9324 40.3495 39.3491 40.0816C39.7659 39.8137 40 39.4503 40 39.0714V1.92857C40 1.54969 39.7659 1.18633 39.3491 0.918419C38.9324 0.65051 38.3671 0.5 37.7778 0.5C34.8311 0.5 32.0756 1.43143 30.0933 2.70286C28.1156 3.97714 26.6667 5.74857 26.6667 7.64286V19.0714C26.6667 19.4503 26.9008 19.8137 27.3175 20.0816C27.7343 20.3495 28.2995 20.5 28.8889 20.5H35.5556Z" fill="#FF82A0"/>
      </svg>
    </div>
    <div class="category-logo" v-if="category==='레저'">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
        <path d="M0 40.5V31.2L17.5 7.6L14 2.9L17.2 0.5L20 4.25L22.8 0.5L26 2.9L22.5 7.6L40 31.2V40.5H0ZM20 10.95L4 32.5V36.5H10L20 22.5L30 36.5H36V32.5L20 10.95ZM14.9 36.5H25.1L20 29.4L14.9 36.5Z" fill="#2A7529"/>
      </svg>
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
    <ProjectCardComponent v-for="project in projectByCategoryResponseList"  :key="project.projectId" :project = "project" />
  </div>
  <!-- project list section end -->

  
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

const sort = ref('createdAt,desc');

const projectByCategoryResponseList = ref<Array<ProjectsByCategory>>([]);
const totalPages = ref(0);

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
      await getProjectsByCategoryRequest(category.value, 0, 20, sort.value);
  }
})

watch([category, sort], async ([newCategory, newSort], [oldCategory, oldSort]) => {
  if (typeof newCategory === 'string' && typeof newSort === 'string') {
      await getProjectsByCategoryRequest(newCategory, 0, 20, newSort);
  }

});
</script>

<style scoped>
@import '@/assets/css/project-list.css';

</style>