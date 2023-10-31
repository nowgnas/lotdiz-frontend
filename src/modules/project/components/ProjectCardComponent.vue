<template>

  <div class='project-product-card'
       v-if="project && ( $route.path == '/lotdeal' && stringifiedTimer != '00:00:00') || $route.path != '/lotdeal'">
    <div @click='goProjectDetailsPage(projectId)'>

      <div class='project-image-info'>

        <div class='project-image'>
          <img alt='project logo' class='project-img' :src='projectThumbnailImageUrl' />
        </div>

        <div class='likes' @click='likes'>
          <svg xmlns='http://www.w3.org/2000/svg' width='35' height='28' viewBox='0 0 35 28' fill='none'>
            <path
              d='M33.7529 5.57581C33.2162 4.48469 32.4424 3.49592 31.4747 2.66487C30.5063 1.83133 29.3645 1.16894 28.1114 0.713697C26.8121 0.239766 25.4184 -0.00281878 24.0114 2.47109e-05C22.0375 2.47109e-05 20.4705 0.708985 18.7969 1.60547C18.2969 2.10547 17.6572 3.34883 17.2969 3.60547C16.9365 3.34883 16.2969 2.10547 15.7969 1.60547C14.1232 0.708985 12.5563 2.47109e-05 10.5823 2.47109e-05C9.16094 2.47109e-05 7.78359 0.239087 6.48232 0.713697C5.2251 1.17073 4.09199 1.82815 3.11904 2.66487C2.15008 3.49499 1.37605 4.48398 0.84082 5.57581C0.284277 6.71135 0 7.91721 0 9.15823C0 10.3289 0.272266 11.5489 0.812793 12.7899C1.26523 13.827 1.91387 14.9028 2.74268 15.9891C4.05596 17.7082 5.86172 19.5012 8.10391 21.3188C11.8195 24.3317 15.4991 26.4129 15.6553 26.4973L16.6042 27.0317C17.0246 27.2672 17.5651 27.2672 17.9855 27.0317L18.9345 26.4973C19.0906 26.4094 22.7662 24.3317 26.4858 21.3188C28.728 19.5012 30.5338 17.7082 31.8471 15.9891C32.6759 14.9028 33.3285 13.827 33.777 12.7899C34.3175 11.5489 34.5897 10.3289 34.5897 9.15823C34.5938 7.91721 34.3095 6.71135 33.7529 5.57581ZM17.2969 24.2508C17.2969 24.2508 3.04297 16.2317 3.04297 9.15823C3.04297 5.57581 6.41826 2.6719 10.5823 2.6719C13.5092 2.6719 16.0477 7.06292 17.2969 9.15823C18.5461 7.06292 21.0846 2.6719 24.0114 2.6719C28.1755 2.6719 31.5508 5.57581 31.5508 9.15823C31.5508 16.2317 17.2969 24.2508 17.2969 24.2508Z'
              fill='black' />
            <path v-if='isLikes'
                  d='M24.0114 2.67188C21.0846 2.67188 18.5461 7.06289 17.2969 9.1582C16.0477 7.06289 13.5092 2.67188 10.5823 2.67188C6.41826 2.67188 3.04297 5.57578 3.04297 9.1582C3.04297 16.2316 17.2969 24.2508 17.2969 24.2508C17.2969 24.2508 31.5508 16.2316 31.5508 9.1582C31.5508 5.57578 28.1755 2.67188 24.0114 2.67188Z'
                  fill='#FF4773' fill-opacity='0.81' />
          </svg>
        </div>

        <div class='lotdeal-info' v-if="lotdealDueTime != null && stringifiedTimer != '00:00:00'">
          <div class='lotdeal-image'>
            <img alt='lotdeal logo' class='lotdeal-img' src='/common/hot-deal-logo.png'>
          </div>
          <div class='lotdeal-time'>{{ stringifiedTimer }}</div>
        </div>
      </div>

      <div class='project-info'>
        <div class='funding-info'>
          <div class='achievement-info'>
            <div class='funding-achievement-rate'>{{ fundingAchievementRate }}% 달성</div>
            <div class='accumulated-funding-amount'>{{ accumulatedFundingAmount }} 원</div>
          </div>
          <div class='remaining-days' v-if = "projectStatus == '프로젝트 진행중'">{{ remainingDays }}일 남음</div>
          <div class='remaining-days' v-else-if = "projectStatus == '프로젝트 성공'">{{ projectStatus }}</div>
        </div>

        <div class='project-name'>{{ projectName }}</div>
        <div class='maker-name'>{{ makerName }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

import { ref, onBeforeMount, computed } from 'vue'
import { createLikes, deleteLikes } from '@/services/api/MemberService'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
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
        isLike: false
      }
    }
  }
})

const makerName = ref<string>(props.project?.makerName)
const projectName = ref<string>(props.project?.projectName)
const remainingDays = ref<number>(props.project?.remainingDays)
const accumulatedFundingAmount = ref<number>(props.project?.accumulatedFundingAmount)
const fundingAchievementRate = ref<number>(props.project?.fundingAchievementRate)
const lotdealDueTime = ref<string>(props.project?.lotdealDueTime)
const projectStatus = ref<string>(props.project?.projectStatus)

const projectId = ref<number>(props.project?.projectId)
const isLikes = ref<boolean>(props.project?.isLike)

const projectThumbnailImageUrl = ref<string>(props.project?.projectThumbnailImageUrl)

const timer = ref<number>(0)
const hour = computed(() => Math.floor(timer.value / (60 * 60)))
const minute = computed(() => Math.floor((timer.value - hour.value * (60 * 60)) / 60))
const second = computed(() => Math.floor(timer.value % 60))

const stringifiedTimer = computed(() => `${String(hour.value).padStart(2, '0')}:${String(minute.value).padStart(2, '0')}:${String(second.value).padStart(2, '0')}`)

const startTimer = () => {
  const targetTime = new Date(lotdealDueTime.value).getTime() / 1000

  setInterval(() => {
    const now = new Date().getTime() / 1000
    timer.value = Math.max(0, Math.floor(targetTime - now))
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

const likes = async (e: any) => {

  e.stopPropagation()
  if (isLikes.value) {
    await deleteLikes(projectId.value)
    isLikes.value = false
  } else {
    await createLikes(projectId.value)
    isLikes.value = true
  }
}
</script>

<style scoped>
@import '@/assets/css/project-card.css';

</style>