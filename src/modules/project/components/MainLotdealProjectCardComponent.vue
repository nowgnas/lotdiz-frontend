<template>

  <div class='lotdeal-project-product-card'
       v-if="project && ( $route.path == '/lotdeal') || $route.path != '/lotdeal'"
       @click='goProjectDetailsPage(projectId)'>

    <div class='ranking'>{{ idx }}</div>


    <div class='project-image'>
      <img alt='project' class='project-img' :src='projectThumbnailImageUrl' />
    </div>

    <div class='project-info'>

      <div class='lotdeal-info' v-if="lotdealDueTime != null">
        <div class='lotdeal-image'>
          <img alt='lotdeal logo' class='lotdeal-img' src='/common/hot-deal-logo.png'>
        </div>
        <div class='lotdeal-time'>{{ stringifiedTimer }}</div>
      </div>

      <div class='funding-info'>
        <div class='funding-achievement-rate'>{{ fundingAchievementRate }}% 달성</div>
        <div class='accumulated-funding-amount'>{{ accumulatedFundingAmount }} 원</div>
      </div>

      <div class='project-name'>{{ projectName }}</div>

    </div>
  </div>
</template>

<script setup lang='ts'>

import { ref, onBeforeMount, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  idx: {
    type: Number,
    default: 1
  },
  project: {
    type: Object,
    default: () => {
      return {
        projectId: -1,
        projectName: '',
        remainingDays: 0,
        projectThumbnailImageUrl: '',
        makerName: '',
        fundingAchievementRate: 0,
        accumulatedFundingAmount: 0,
        lotdealDueTime: '',
        projectStatus: '',
        isLikes: false
      }
    }
  }
})

const idx = ref<number>(props?.idx)
const projectName = ref<string>(props.project?.projectName)
const accumulatedFundingAmount = ref<number>(props.project?.accumulatedFundingAmount)
const fundingAchievementRate = ref<number>(props.project?.fundingAchievementRate)
const lotdealDueTime = ref<string>(props.project?.lotdealDueTime)

const projectId = ref<number>(props.project?.projectId)
const projectThumbnailImageUrl = ref<string>(props.project?.projectThumbnailImageUrl)

const timer = ref<number>(0)

const stringifiedTimer = ref<string>('00:00:00')

const startTimer = () => {
  const targetTime = new Date(lotdealDueTime.value).getTime() / 1000

  setInterval(() => {
    const now = new Date().getTime() / 1000
    timer.value = Math.max(0, Math.floor(targetTime - now))

    const hour = Math.floor(timer.value / 3600)
    const minute = Math.floor((timer.value % 3600) / 60)
    const second = timer.value % 60

    stringifiedTimer.value = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`
  }, 1000)
}

onBeforeMount(() => {
  startTimer()
})

const goProjectDetailsPage = (projectId: number) => {
  router.push({
    name: 'projectStory',
    params: {
      id: projectId
    }
  })
}

</script>

<style scoped>
@import '@/assets/css/main-project-card.css';

</style>