<script setup lang='ts'>
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import SaveButton from '@/modules/project/components/buttons/SaveButton.vue'
import ContentTextInputField from '@/modules/project/components/register-component/ContentTextInputField.vue'
import GuideBox from '@/modules/project/components/register-component/GuideBox.vue'
import ProjectContentTitle from '@/modules/project/components/register-component/ProjectContentTitle.vue'
import { useDefaultInformationStore } from '@/store/registerProjectStore'
import { getPresignedUrlByImageName } from '@/services/api/ProjectService'
import { useRouter } from 'vue-router'

const inputComponentData = ref({
  projectName: {
    title: '프로젝트 제목',
    placeholder: '제목을 입력해 주세요'
  },
  projectTag: {
    title: '검색용 태그 (#)',
    placeholder: '태그를 입력해주세요'
  }
})

const projectNameCnt = ref(40)
const projectDefaultInfo = ref({
  projectName: '',
  projectTag: '',
  projectThumbnailImageUrl: '',
  projectThumbnailFile: null,
  projectDueDate: ''
})

const format = (date: string) => {
  projectDefaultInfo.value.projectDueDate = date
}
const inputFile = ref()
const thumbnailGuideBox = {
  title: '썸네일 등록 가이드',
  description: [
    '롯디즈에서 노출될 대표 이미지 입니다.',
    '10MB 이하의 JPG, JPEG, PNG 파일'
  ]
}

const imageInput = async (event: any) => {
  const file = event.target.files[0]
  projectDefaultInfo.value.projectThumbnailFile = file
  projectDefaultInfo.value.projectThumbnailImageUrl = await getPresignedUrlByImageName(file)
}
const addImage = () => {
  // 콜백으로 image ref를 동작 시키면 - 파일 선택 창이 뜬다
  inputFile.value.click()
}


const countProjectTitle = () => {
  projectNameCnt.value = 40 - projectDefaultInfo.value.projectName.length
}

const projectName = (event: any) => {
  projectDefaultInfo.value.projectName = event.target.value
  countProjectTitle()
}

const projectContentTitle = {
  title: '기본 정보 등록',
  description: '프로젝트를 대표하는 중요한 정보들을 입력해 주세요.'
}
const router = useRouter()
const emitData = () => {
  useDefaultInformationStore().setDefaultInformation({ defaultInformation: projectDefaultInfo })
  router.push('/projects/story')
}

</script>

<template>
  <ProjectContentTitle :title='projectContentTitle' />
  <ContentTextInputField
    v-model:model-value='projectDefaultInfo.projectName'
    :placeholder='inputComponentData.projectName.placeholder'
    :title='inputComponentData.projectName.title'
    :is-required='true' />
  <div class='thumbnail-image'>
    <div class='thumbnail-image-title-box'>
      <div class='text'>프로젝트 썸네일 이미지</div>
    </div>
    <GuideBox :guide-content='thumbnailGuideBox' />
    <div class='camera-image-box' @click='addImage'>
      <input ref='inputFile' @change='imageInput' type='file' style='display: none' />
      <img v-if='projectDefaultInfo.projectThumbnailImageUrl' :src='projectDefaultInfo.projectThumbnailImageUrl' />
      <svg v-else-if='projectDefaultInfo.projectThumbnailImageUrl.length == 0' xmlns='http://www.w3.org/2000/svg'
           width='46' height='42' viewBox='0 0 46 42' fill='none'>
        <path
          d='M40.8125 6.30469H34.4022L31.2383 1.55543C31.1161 1.37227 30.9505 1.22215 30.7563 1.11843C30.562 1.01471 30.3452 0.960613 30.125 0.960939H15.875C15.6548 0.960613 15.438 1.01471 15.2437 1.11843C15.0495 1.22215 14.8839 1.37227 14.7617 1.55543L11.5955 6.30469H5.1875C3.88835 6.30469 2.64242 6.82077 1.72378 7.73941C0.805146 8.65804 0.289063 9.90398 0.289062 11.2031V36.1406C0.289063 37.4398 0.805146 38.6857 1.72378 39.6043C2.64242 40.523 3.88835 41.0391 5.1875 41.0391H40.8125C42.1116 41.0391 43.3576 40.523 44.2762 39.6043C45.1949 38.6857 45.7109 37.4398 45.7109 36.1406V11.2031C45.7109 9.90398 45.1949 8.65804 44.2762 7.73941C43.3576 6.82077 42.1116 6.30469 40.8125 6.30469ZM43.0391 36.1406C43.0391 36.7311 42.8045 37.2975 42.3869 37.715C41.9694 38.1326 41.403 38.3672 40.8125 38.3672H5.1875C4.59698 38.3672 4.03064 38.1326 3.61308 37.715C3.19552 37.2975 2.96094 36.7311 2.96094 36.1406V11.2031C2.96094 10.6126 3.19552 10.0463 3.61308 9.62871C4.03064 9.21115 4.59698 8.97656 5.1875 8.97656H12.3125C12.5327 8.97689 12.7495 8.92279 12.9438 8.81907C13.138 8.71535 13.3036 8.56523 13.4258 8.38207L16.5897 3.63281H29.408L32.5742 8.38207C32.6964 8.56523 32.862 8.71535 33.0562 8.81907C33.2505 8.92279 33.4673 8.97689 33.6875 8.97656H40.8125C41.403 8.97656 41.9694 9.21115 42.3869 9.62871C42.8045 10.0463 43.0391 10.6126 43.0391 11.2031V36.1406ZM23 13.4297C21.1504 13.4297 19.3424 13.9781 17.8046 15.0057C16.2667 16.0333 15.0681 17.4938 14.3603 19.2026C13.6525 20.9113 13.4673 22.7916 13.8281 24.6056C14.189 26.4197 15.0796 28.086 16.3874 29.3938C17.6953 30.7016 19.3616 31.5923 21.1756 31.9531C22.9896 32.314 24.8699 32.1288 26.5787 31.421C28.2875 30.7132 29.748 29.5146 30.7755 27.9767C31.8031 26.4388 32.3516 24.6308 32.3516 22.7813C32.3516 20.3011 31.3663 17.9225 29.6126 16.1687C27.8588 14.4149 25.4802 13.4297 23 13.4297ZM23 29.4609C21.6789 29.4609 20.3874 29.0692 19.289 28.3352C18.1905 27.6012 17.3343 26.558 16.8288 25.3375C16.3232 24.1169 16.1909 22.7738 16.4487 21.4781C16.7064 20.1824 17.3426 18.9922 18.2767 18.058C19.2109 17.1238 20.4011 16.4876 21.6969 16.2299C22.9926 15.9722 24.3357 16.1045 25.5562 16.61C26.7768 17.1156 27.82 17.9717 28.554 19.0702C29.2879 20.1687 29.6797 21.4601 29.6797 22.7813C29.6797 24.5528 28.9759 26.2518 27.7233 27.5045C26.4706 28.7572 24.7716 29.4609 23 29.4609Z'
          fill='#878787' />
      </svg>
    </div>
    <div class='project-due-date-box'>
      <div class='project-due-date-title-box'>
        <div class='text'>프로젝트 종료일</div>
      </div>
      <VueDatePicker v-model='projectDefaultInfo.projectDueDate' @change='format' />
    </div>
    <ContentTextInputField
      v-model:model-value='projectDefaultInfo.projectTag'
      :placeholder='inputComponentData.projectTag.placeholder'
      :title='inputComponentData.projectTag.title'
      :is-required='true' />
    <SaveButton @click='emitData' />
  </div>

</template>

<style scoped>
@import "@/assets/css/projectregister/basicInformation.css";
@import "@/assets/css/projectregister/projectRegister.css";
@import "@/assets/css/projectregister/projectContentItem.css";
</style>