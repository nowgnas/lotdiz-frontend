<script setup lang="ts">

import {ref} from "vue";
import CategoryDropDown from "@/modules/project/components/buttons/CategoryDropDown.vue";
import SaveButton from "@/modules/project/components/buttons/SaveButton.vue";
import ProjectContentTitle from "@/modules/project/components/ProjectContentTitle.vue";

const project = ref({
  categoryId: 0,
  projectTargetAmount: 0
});

const getCategoryId = (value: number) => {
  project.value.categoryId = value;
}

const content = {
  title: "프로젝트 정보 등록",
  description: "프로젝트 정보를 등록해주세요",
};

</script>

<template>
  <ProjectContentTitle :title="content"/>
  <div class="project-content-box">
    <div class="title">
      <div class="text">카테고리</div>
      <div class="is-required">
        <div class="text">*</div>
      </div>
    </div>
    <CategoryDropDown @category-id="getCategoryId"/>
  </div>
  <div class="project-content-box" style="position: relative">
    <div class="title">
      <div class="text">목표 금액 설정</div>
      <div class="is-required">
        <div class="text">*</div>
      </div>
    </div>
    <div class="description">
      <div class="text">최소 50만 원 ~ 최대 1억 원 사이에서 설정해 주세요.</div>
    </div>
    <input @input="project.projectTargetAmount" class="project-title-input" placeholder="목표 금액을 입력해 주세요."
           maxlength="40"/>
  </div>
  <SaveButton/>
</template>

<style scoped>
@import "../../../assets/css/projectregister/basicInformation.css";
@import "../../../assets/css/projectregister/projectRegister.css";
@import "../../../assets/css/projectregister/projectContentItem.css";
</style>