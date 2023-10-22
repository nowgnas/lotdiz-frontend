<script setup lang="ts">

import ContentTextInputField from "@/modules/project/components/ContentTextInputField.vue";
import {ref} from "vue";

const project = ref({
  categoryId: 0,
  projectTargetAmount: 0
});

const projectInformationComponent = ref({})
const category = [
  {id: 0, categoryName: "뷰티"},
  {id: 1, categoryName: "아웃도어"}

]
</script>

<template>
  <div class="project-register-content-title">
    <div class="title-text">프로젝트 정보 등록</div>
    <div class="title-description">
      <div class="text">프로젝트 정보를 등록해주세요.</div>
    </div>
  </div>
  <div class="project-content-box">
    <div class="title">
      <div class="text">카테고리</div>
    </div>
    <select v-model="selected" multiple>
      <option v-for="item in category" key="idx">{{ item.categoryName }}</option>
    </select>
  </div>

</template>

<style scoped>
@import "../../../assets/css/projectregister/basicInformation.css";
@import "../../../assets/css/projectregister/projectRegister.css";
@import "../../../assets/css/projectregister/projectContentItem.css";
</style>