<script setup lang='ts'>

import { ref } from 'vue'
import CategoryDropDown from '@/modules/project/components/buttons/CategoryDropDown.vue'
import SaveButton from '@/modules/project/components/buttons/SaveButton.vue'
import ProjectContentTitle from '@/modules/project/components/register-component/ProjectContentTitle.vue'
import { useProjectInformationStore } from '@/store/registerProjectStore'
import { useRouter } from 'vue-router'


const project = ref({
  categoryId: 0,
  projectTargetAmount: null
})

const getCategoryId = (value: number) => {
  project.value.categoryId = value
}
const updateAmount = (value: any) => {
  project.value.projectTargetAmount = value.target.value
}

const content = {
  title: '프로젝트 정보 등록',
  description: '프로젝트 정보를 등록해주세요'
}
const router = useRouter()
const emitData = () => {
  useProjectInformationStore().setProjectInformation({ projectInformation: project.value })
  router.push('/projects/basic-information')
}

</script>

<template>
  <ProjectContentTitle :title='content' />
  <div class='project-content-box'>
    <div class='title'>
      <div class='text'>카테고리</div>
      <div class='is-required'>
        <div class='text'>*</div>
      </div>
    </div>
    <CategoryDropDown @category-id='getCategoryId' />
  </div>
  <div class='project-content-box' style='position: relative'>
    <div class='title'>
      <div class='text'>목표 금액 설정</div>
      <div class='is-required'>
        <div class='text'>*</div>
      </div>
    </div>
    <div class='description'>
      <div class='text'>최소 50만 원 ~ 최대 1억 원 사이에서 설정해 주세요.</div>
    </div>
    <input type='number' @input='updateAmount' class='project-title-input' placeholder='목표 금액을 입력해 주세요.'
           :value='project.projectTargetAmount'
           maxlength='40' />
  </div>
  <SaveButton @click='emitData' />
</template>

<style scoped>
@import "@/assets/css/projectregister/basicInformation.css";
@import "@/assets/css/projectregister/projectRegister.css";
@import "@/assets/css/projectregister/projectContentItem.css";
</style>