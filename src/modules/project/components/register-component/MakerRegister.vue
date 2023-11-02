<script setup lang='ts'>
import ContentTextInputField from '@/modules/project/components/register-component/ContentTextInputField.vue'
import { ref } from 'vue'
import SaveButton from '@/modules/project/components/buttons/SaveButton.vue'
import ProjectContentTitle from '@/modules/project/components/register-component/ProjectContentTitle.vue'
import { useMakerStore } from '@/store/registerProjectStore'
import { useRouter } from 'vue-router'

const makerInputComponent = ref({
  makerEmail: {
    title: '메이커 이메일',
    placeholder: 'example@email.com'
  },
  makerName: {
    title: '메이커 명',
    placeholder: '메이커 명'
  },
  contactEmail: {
    title: '문의 이메일',
    placeholder: 'example@email.com'
  },
  makerPhoneNumber: {
    title: '문의 전화번호',
    placeholder: '01012345678'
  },
  makerKakaoUrl: {
    title: '카카오톡 채널 url',
    placeholder: '카카오톡 채널 url'
  },
  makerHomeUrl: {
    title: '홈페이지 url',
    placeholder: '홈페이지 url'
  },
  makerSnsUrl: {
    title: 'SNS',
    placeholder: 'https://instagram.com'
  }
})

const maker = ref({
  makerEmail: '',
  makerName: '',
  contactEmail: '',
  makerPhoneNumber: '',
  makerKakaoUrl: '',
  makerHomeUrl: '',
  makerSnsUrl: ''
})

const contentTitle = {
  title: '메이커 등록',
  description: '메이커를 등록해주세요.'
}

const uploadProfile = ref()

const addProfile = () => {
  uploadProfile.value.click()
}
const router = useRouter()
const emitData = () => {
  useMakerStore().setMakerData({ maker: maker.value })
  router.push('/projects/project-info')
}

</script>

<template>
  <ProjectContentTitle :title='contentTitle' />
  <ContentTextInputField
    v-model:model-value='maker.makerEmail'
    :placeholder='makerInputComponent.makerEmail.placeholder'
    :title='makerInputComponent.makerEmail.title'
    :is-required='true' />
  <ContentTextInputField
    v-model:model-value='maker.makerName'
    :placeholder='makerInputComponent.makerName.placeholder'
    :title='makerInputComponent.makerName.title'
    :is-required='true' />
  <ContentTextInputField
    v-model:model-value='maker.contactEmail'
    :placeholder='makerInputComponent.contactEmail.placeholder'
    :title='makerInputComponent.contactEmail.title'
    :is-required='true' />
  <ContentTextInputField
    v-model:model-value='maker.makerPhoneNumber'
    :placeholder='makerInputComponent.makerPhoneNumber.placeholder'
    :title='makerInputComponent.makerPhoneNumber.title'
    :is-required='true' />
  <ContentTextInputField
    v-model:model-value='maker.makerKakaoUrl'
    :placeholder='makerInputComponent.makerKakaoUrl.placeholder'
    :title='makerInputComponent.makerKakaoUrl.title'
    :is-required='false' />
  <ContentTextInputField
    v-model:model-value='maker.makerHomeUrl'
    :placeholder='makerInputComponent.makerHomeUrl.placeholder'
    :title='makerInputComponent.makerHomeUrl.title'
    :is-required='false' />
  <ContentTextInputField
    v-model:model-value='maker.makerSnsUrl'
    :placeholder='makerInputComponent.makerSnsUrl.placeholder'
    :title='makerInputComponent.makerSnsUrl.title'
    :is-required='false' />
  <SaveButton @click='emitData' />
</template>

<style scoped>
@import "@/assets/css/projectregister/basicInformation.css";
@import "@/assets/css/projectregister/projectRegister.css";
@import "@/assets/css/projectregister/projectContentItem.css";
@import "@/assets/css/projectregister/MakerRegister.css";

</style>