<template>

<div id = "project-product-card" v-if="( $route.path == '/lotdeal' && stringifiedTimer != '00:00:00') || $route.path != '/lotdeal'"> 
  <div id = "project-image-info">

    <div class="project-image">
      <img alt="project logo" class="project-img" src="@/assets/한라봉.png" />
    </div>

    <div class="likes" @click="">
      <svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" d="M19.5398 34.2177L19.5429 34.2197C19.8188 34.3989 20.1526 34.4993 20.5005 34.5C20.8483 34.4994 21.1819 34.3991 21.4578 34.2202L21.4602 34.2186C29.0965 29.2874 32.3389 25.95 34.087 23.9239C37.8355 19.5767 39.5476 15.227 39.499 10.576C39.446 5.60989 35.2397 1.5 30.0517 1.5C26.2914 1.5 23.6557 3.50428 22.0598 5.27181L22.0542 5.27796L22.0542 5.27795C21.8532 5.49812 21.6094 5.66974 21.3423 5.78563C21.0752 5.90146 20.7883 5.96022 20.5 5.96022C20.2118 5.96022 19.9248 5.90146 19.6577 5.78563L20.2547 4.40952L19.6577 5.78563C19.3906 5.66974 19.1468 5.49814 18.9458 5.27795L18.9407 5.27236L18.9407 5.27235C17.3441 3.50575 14.7082 1.5 10.9483 1.5C5.76029 1.5 1.55411 5.60981 1.50101 10.5748L19.5398 34.2177ZM19.5398 34.2177C11.9037 29.2866 8.66121 25.9492 6.9131 23.9231M19.5398 34.2177L6.9131 23.9231M6.9131 23.9231C3.16281 19.5752 1.45237 15.2255 1.50101 10.5751L6.9131 23.9231Z" fill="#FF4773" fill-opacity="0.81" stroke="white" stroke-width="3"/>
      </svg>
    </div>

    <div class="lotdeal-info" v-if="stringifiedTimer != '00:00:00'">
      <div class="lotdeal-image">
        <img alt="lotdeal logo" class="lotdeal-img" src="@/assets/hot-deal-logo.png">
      </div>
      <div class="lotdeal-time">{{ stringifiedTimer }}</div>
    </div>
  </div>

  <div id = "project-info">
      <div id="funding-info">
        <div id="achievement-info">
          <div class="funding-achievement-rate">{{ project.fundingAchievementRate }}% 달성</div>        
              <div class="accumulated-funding-amount">{{project.accumulatedFundingAmount}} 원</div>
        </div>
        <div class="remaining-days">{{ project.remainingDays }}일 남음</div>
      </div>
      
      <div class="project-name">{{ project.projectName }}</div>
      <div class="maker-name">{{ project.makerName }}</div>
  </div>

</div>

</template>

<script setup lang="ts">

import { ref, onMounted, onBeforeMount, computed, defineProps } from 'vue';
import type { ProjectByCategoryResponse } from '@/services/types/ProjectResponse';

const props = defineProps({
  project: {
    type: Object,
  },
});

const currentPath = ref('');
const lotdealDueTime = ref<string>(props.project.lotdealDueTime);

const timer = ref<number>(0);

const hour = computed(() => Math.floor(timer.value / (60 * 60)));
const minute = computed(() => Math.floor((timer.value - hour.value * (60 * 60)) / 60));
const second = computed(() => Math.floor(timer.value % 60));

const stringifiedTimer = computed(() => `${String(hour.value).padStart(2, '0')}:${String(minute.value).padStart(2, '0')}:${String(second.value).padStart(2, '0')}`);

console.log(lotdealDueTime.value);

const startTimer = () => {
  const targetTime = new Date(lotdealDueTime.value).getTime() / 1000; // 특정 시각을 설정합니다.

  setInterval(() => {
    const now = new Date().getTime() / 1000;
    timer.value = Math.max(0, Math.floor(targetTime - now));
  }, 1000);
};

onMounted(() => {
  startTimer();
});



const likes = () => {
  //props.project;
}

</script>

<style>

#project-product-card {
  display: flex;
  width: 398px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
}

#project-image-info {
  position: relative;
  display: flex;
  width: 365px;
  height: 245px;
  padding: 15px 15px 15px 15px;
  justify-content: center;
  align-items: flex-start;

  border-radius: 10px;
  background: rgba(124, 124, 124, 0.19);
}

.project-image {
  display: flex;
  width: 363px;
  height: 245px;
  padding: 3px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.project-img {
  width: 369px;
  height: 250px;
  flex-shrink: 0;
} 

.likes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  position: absolute;
  right: 9px;
  top: 15px;
}

.lotdeal-info {
  display: flex;
  align-items: center;
  gap: 10x;
  position: absolute;
  left: 12px;
  top: 10px
}

.lotdeal-image {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.lotdeal-img {
  width: 46px;
  height: 45px;
}

.lotdeal-time {
  display: flex;
  align-items: center;
  gap: 4px;

  color: #000;
  text-align: center;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
}

#project-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

#funding-info {
  display: flex;
  align-items: flex-start;
  gap: 53px;
}

#achievement-info {
  display: flex;
  align-items: center;
  gap: 0px;
}

.funding-achievement-rate {
  display: flex;
  /* width: 130px; */
  height: 36px;
  padding-right: 7px;
  align-items: end;
  gap: 10px;

  color: #4FAFB1;
  text-align: center;
  font-family: Open Sans;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 35px */
}

.accumulated-funding-amount {
  display: flex;
  /* width: 96px; */
  height: 36px;
  padding: 0px;
  justify-content: center;
  align-items: end;
  gap: 10px;

  color: #878787;
  text-align: center;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 21px */
}

.remaining-days {
  display: flex;
  padding: 9px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: #EAF8F9;
  width: 80px;
  height: 27px;

  color: #4FAFB1;
  text-align: center;
  font-family: Open Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 21px */
  
}

.project-name {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* padding-left: 7px; */
  white-space: nowrap;

  color: #000;  
  text-align: center;
  font-family: Open Sans;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
}

.maker-name {

  display: flex;
  padding-left: 7px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #878787;
  text-align: center;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 21px */

}


</style>