<template>

<div id = "project-product-card" v-if="project && ( $route.path == '/lotdeal' && stringifiedTimer != '00:00:00') || $route.path != '/lotdeal'">
  <div id = "project-image-info">

    <div class="project-image">
      <img alt="project logo" class="project-img" :src="imageUrlPrefix + projectThumbnailImageUrl" />
    </div>

    <div class="likes">
      <svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" d="M19.5398 34.2177L19.5429 34.2197C19.8188 34.3989 20.1526 34.4993 20.5005 34.5C20.8483 34.4994 21.1819 34.3991 21.4578 34.2202L21.4602 34.2186C29.0965 29.2874 32.3389 25.95 34.087 23.9239C37.8355 19.5767 39.5476 15.227 39.499 10.576C39.446 5.60989 35.2397 1.5 30.0517 1.5C26.2914 1.5 23.6557 3.50428 22.0598 5.27181L22.0542 5.27796L22.0542 5.27795C21.8532 5.49812 21.6094 5.66974 21.3423 5.78563C21.0752 5.90146 20.7883 5.96022 20.5 5.96022C20.2118 5.96022 19.9248 5.90146 19.6577 5.78563L20.2547 4.40952L19.6577 5.78563C19.3906 5.66974 19.1468 5.49814 18.9458 5.27795L18.9407 5.27236L18.9407 5.27235C17.3441 3.50575 14.7082 1.5 10.9483 1.5C5.76029 1.5 1.55411 5.60981 1.50101 10.5748L19.5398 34.2177ZM19.5398 34.2177C11.9037 29.2866 8.66121 25.9492 6.9131 23.9231M19.5398 34.2177L6.9131 23.9231M6.9131 23.9231C3.16281 19.5752 1.45237 15.2255 1.50101 10.5751L6.9131 23.9231Z" fill="#FF4773" fill-opacity="0.81" stroke="white" stroke-width="3"/>
      </svg>
    </div>

    <div class="lotdeal-info" v-if="stringifiedTimer != '00:00:00'">
      <div class="lotdeal-image">
        <img alt="lotdeal logo" class="lotdeal-img" src="@/assets/icons/hot-deal-logo.png">
      </div>
      <div class="lotdeal-time">{{ stringifiedTimer }}</div>
    </div>
  </div>

  <div id = "project-info">
      <div id="funding-info">
        <div id="achievement-info">
          <div class="funding-achievement-rate">{{ fundingAchievementRate }}% 달성</div>
              <div class="accumulated-funding-amount">{{ accumulatedFundingAmount}} 원</div>
        </div>
        <div class="remaining-days">{{ remainingDays }}일 남음</div>
      </div>
      
      <div class="project-name">{{ projectName }}</div>
      <div class="maker-name">{{ makerName }}</div>
  </div>

</div>

</template>

<script setup lang="ts">

import { ref, onBeforeMount, computed } from 'vue';

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
  },
});

const makerName = ref<string>(props.project?.makerName);
const projectName = ref<string>(props.project?.projectName);
const remainingDays = ref<number>(props.project?.remainingDays);
const accumulatedFundingAmount = ref<number>(props.project?.accumulatedFundingAmount);
const fundingAchievementRate = ref<number>(props.project?.fundingAchievementRate);
const lotdealDueTime = ref<string>(props.project?.lotdealDueTime);

const imageUrlPrefix = '/../../public/project-img';
const projectThumbnailImageUrl = ref<string>(props.project?.projectThumbnailImageUrl);

const timer = ref<number>(0);
const hour = computed(() => Math.floor(timer.value / (60 * 60)));
const minute = computed(() => Math.floor((timer.value - hour.value * (60 * 60)) / 60));
const second = computed(() => Math.floor(timer.value % 60));

const stringifiedTimer = computed(() => `${String(hour.value).padStart(2, '0')}:${String(minute.value).padStart(2, '0')}:${String(second.value).padStart(2, '0')}`);

const startTimer = () => {
const targetTime = new Date(lotdealDueTime.value).getTime() / 1000; 

setInterval(() => {
  const now = new Date().getTime() / 1000;
  timer.value = Math.max(0, Math.floor(targetTime - now));
}, 1000);
};

onBeforeMount(() => {
  startTimer();
});

</script>

<style scoped>
@import '@/assets/css/project-card.css';

</style>