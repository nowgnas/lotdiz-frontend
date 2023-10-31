<script setup lang='ts'>

import ProjectContentTitle from '@/modules/project/components/register-component/ProjectContentTitle.vue'
import SaveButton from '@/modules/project/components/buttons/SaveButton.vue'
import GuideComponent from '@/modules/project/components/register-component/GuideComponent.vue'
import LotdealSelectionBox from '@/modules/project/components/buttons/LotdealSelectionBox.vue'
import { ref, toRaw } from 'vue'
import {
  useDefaultInformationStore,
  useMakerStore,
  useProductRegisterStore,
  useProjectInformationStore,
  useProjectStoryStore,
  useSelectLotdealStore
} from '@/store/registerProjectStore'
import { storeToRefs } from 'pinia'
import type { ProjectRequestData } from '@/services/types/ProjectRegisterType'

const projectContentTitle = {
  title: '롯딜 선택',
  description: '롯딜 선택으로 더 많은 서포터를 확보하세요.'
}
const guideContent = {
  title: '롯딜 가이드',
  key: [
    '파격적인 할인',
    '한정된 시간'
  ],
  value: [
    '롯딜은 서포터에게 상품 금액의 40%가 할인된 금액으로 제공합니다.',
    '단, 한 시간 동안 파격적인 할인이 진행됩니다.'
  ]
}


const selectedBox = ref()
const selectBox = (box: any) => {
  selectedBox.value = box
}

const selectLotdeal = {
  type: 'lotdeal',
  title: '롯딜 펀딩',
  content: '파격적인 할인으로 \n' +
    '더 많은 서포터 확보 !',
  selectedValue: 'lotdeal'
}
const selectDefault = {
  type: 'normal',
  title: '일반 펀딩',
  content: '롯딜 없이 펀딩 할게요 !',
  selectedValue: 'normal'
}

const emitData = () => {
  useSelectLotdealStore().setLotdealData({ isLotdeal: selectedBox })

  const maker = useMakerStore()
  const information = useProjectInformationStore()
  const defaultInfo = useDefaultInformationStore()
  const storyData = useProjectStoryStore()
  const productsDataStore = useProductRegisterStore()


  const { projectInformation } = storeToRefs(information)
  const { makerData } = storeToRefs(maker)
  const { defaultInformation } = storeToRefs(defaultInfo)
  const { projectStoryData } = storeToRefs(storyData)
  const { productsData } = storeToRefs(productsDataStore)
  console.log('project information')
  console.log(toRaw(toRaw(defaultInformation.value)))
  console.log(toRaw(toRaw(projectStoryData.value)))

  const projectData: ProjectRequestData = {
    projectName: JSON.parse(JSON.stringify(defaultInformation.value)).defaultInformation.projectName,
    projectDescription: JSON.parse(JSON.stringify(projectStoryData.value)).projectStoryData.projectDescription,
    projectTag: JSON.parse(JSON.stringify(defaultInformation.value)).defaultInformation.projectTag,
    projectTargetAmount: JSON.parse(JSON.stringify(projectInformation.value)).projectInformation.projectTargetAmount,
    projectStoryImageUrl: JSON.parse(JSON.stringify(projectStoryData.value)).projectStoryData.projectStoryImageUrl,
    projectDueDate: JSON.parse(JSON.stringify(defaultInformation.value)).defaultInformation.projectDueDate.split('.')[0],
    projectThumbnailImageUrl: JSON.parse(JSON.stringify(defaultInformation.value)).defaultInformation.projectThumbnailImageUrl,
    projectImages: JSON.parse(JSON.stringify(projectStoryData.value)).projectStoryData.projectImages,
    categoryId: JSON.parse(JSON.stringify(projectInformation.value)).projectInformation.categoryId,
    isLotdeal: (selectedBox.value == 'lotdeal'),
    products: JSON.parse(JSON.stringify(productsData.value)).productsData,
    maker: makerData.value
  }
  console.log(projectData)
}
</script>

<template>
  <ProjectContentTitle :title='projectContentTitle' />
  <div class='select-lotdeal-box'>
    <GuideComponent :guide-content='guideContent' />
    <div class='lotdeal-select-item-box'>
      <LotdealSelectionBox :content='selectLotdeal' @click="selectBox('lotdeal')"
                           :class="{'button-with-shadow': selectedBox === 'lotdeal'}" :selected='selectedBox' />
      <LotdealSelectionBox :content='selectDefault' @click="selectBox('normal')"
                           :class="{'button-with-shadow': selectedBox === 'normal'}" :selected='selectedBox' />
    </div>
    <SaveButton @click='emitData' :register='true' />
  </div>
</template>

<style scoped>
@import "@/assets/css/projectregister/SelectLotdeal.css";
</style>