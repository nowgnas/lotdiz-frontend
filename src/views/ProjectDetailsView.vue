<!-- 
  프로젝트 상세 페이지
  - 헤더
  - 상세 페이지 헤더 (스토리, 지지서명, 함께 하는 서포터)
  - 바디
    1. 스토리 컴포넌트
    2. 지지서명 컴포넌트
    3. 함께 하는 서포터 컴포넌트

  --->
<template>
  <h2>프로젝트 상세 페이지</h2>
  <ProjectDetailsStoryComponent />
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import ProjectDetailsStoryComponent from '@Components/ProjectDetailsStoryComponent.vue';


</script>>

<style>

</style>