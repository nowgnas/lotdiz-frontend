<template>
  <div id = "project-details-section">

    <div id = "details-project-info" v-if = "projectDetails">

      <div class = "details-project-category-tag">
        <div class = "details-project-category">
          {{ projectDetails.categoryName }}
        </div>
        <svg class="details-category-vector" xmlns="http://www.w3.org/2000/svg" width="12" height="21" viewBox="0 0 12 21" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5404 9.436C11.8347 9.71822 12 10.1009 12 10.5C12 10.8991 11.8347 11.2818 11.5404 11.564L2.66028 20.0775C2.36423 20.3517 1.9677 20.5034 1.55612 20.4999C1.14453 20.4965 0.750816 20.3382 0.45977 20.0592C0.168725 19.7802 0.00363541 19.4027 5.91278e-05 19.0081C-0.00351715 18.6135 0.154705 18.2334 0.440649 17.9495L8.21094 10.5L0.440649 3.05047C0.154705 2.76663 -0.00351715 2.38647 5.91278e-05 1.99188C0.00363541 1.59728 0.168725 1.21982 0.45977 0.940791C0.750816 0.66176 1.14453 0.503486 1.55612 0.500057C1.9677 0.496628 2.36423 0.648319 2.66028 0.922459L11.5404 9.436Z" fill="#B4B4B4"/>
        </svg>
        <div class = "details-project-tag">
          {{ projectDetails.projectTag }}
        </div>
      </div>

      <div class = "details-maker">
        {{ projectDetails.makerName }}
      </div>

      <div class="details-project-name">
        {{ projectDetails.projectName }}
      </div>

      <div class="details-project-description">
        {{ projectDetails.projectDescription }}
      </div>

      <div class="details-project-funding-info-rate-status">
        <div class="details-funding-achievement-rate">
          {{ projectDetails.fundingAchievementRate }}% 달성
        </div>
        <div class="details-project-status">
          {{ projectDetails.projectStatus }}
        </div>
      </div>

      <div class="details-project-funding-info-amount-buyers">
        <div id="details-accumlated-funding-amount">
          <div class="details-accumlated-funding-amount">
            {{ projectDetails.accumulatedFundingAmount }}
          </div>
          <div class="details-accumlated-funding-amout-suffix"> 원 달성</div>
        </div>
        
        <div class="details-number-of-buyers">
          {{ projectDetails.numberOfBuyers }} 명 참여
        </div>
      
      </div>

      <div class="likes-clap-funding">
        <div class="details-likes-clap">
          <div class="details-likes">
            <div class = "details-likes-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="44" viewBox="0 0 48 44" fill="none">
                <g filter="url(#filter0_d_593_18)">
                  <path d="M32.9286 0.5C29.2411 0.5 26.0125 2.11913 24 4.85598C21.9875 2.11913 18.7589 0.5 15.0714 0.5C12.1361 0.503378 9.32198 1.6955 7.2464 3.81482C5.17082 5.93414 4.00331 8.80758 4 11.8047C4 24.5682 22.5339 34.8993 23.3232 35.3259C23.5312 35.4402 23.7638 35.5 24 35.5C24.2362 35.5 24.4688 35.4402 24.6768 35.3259C25.4661 34.8993 44 24.5682 44 11.8047C43.9967 8.80758 42.8292 5.93414 40.7536 3.81482C38.678 1.6955 35.8639 0.503378 32.9286 0.5ZM24 32.3721C20.7393 30.4321 6.85714 21.5943 6.85714 11.8047C6.85998 9.58116 7.72632 7.44948 9.26618 5.87716C10.806 4.30485 12.8937 3.42025 15.0714 3.41735C18.5446 3.41735 21.4607 5.30634 22.6786 8.34039C22.7862 8.60793 22.9693 8.83675 23.2046 8.9978C23.4399 9.15884 23.7167 9.24482 24 9.24482C24.2833 9.24482 24.5601 9.15884 24.7954 8.9978C25.0307 8.83675 25.2138 8.60793 25.3214 8.34039C26.5393 5.30087 29.4554 3.41735 32.9286 3.41735C35.1063 3.42025 37.194 4.30485 38.7338 5.87716C40.2737 7.44948 41.14 9.58116 41.1429 11.8047C41.1429 21.5797 27.2571 30.4302 24 32.3721Z" fill="#FF6868"/>
                </g>
                <defs>
                  <filter id="filter0_d_593_18" x="0" y="0.5" width="48" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_593_18"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_593_18" result="shape"/>
                  </filter>
                </defs>
              </svg>
            </div>

            <div class="details-likes-count">
              {{ projectDetails.numberOfLikes }}
            </div>
          </div>

          <div class="details-support-signature">

            <div class="details-support-signature-contents">
              <div class="details-support-signature-logo">
                <img alt="support-signature" class="details-support-signature-logo-img" src="@/assets/icons/clapping-icon.png" />    
              </div>
              <div class="details-support-signautre-count">
                {{ projectDetails.numberOfSupporter }} 
              </div>
            </div>
            <div class="details-support-signautre-action">
                지지서명하기
            </div>
          </div>
        </div>
      </div>
    </div>
  <div id = "product-funding-info-section">
    <ProductComponent/>    
  </div>
</div>



</template>

<script setup lang="ts">
import { ref, watch, onBeforeMount } from 'vue';
import type { ProjectDetail } from '@/services/types/ProjectResponse';
import { useProjectStore } from '@/store/ProjectStore';
import ProductComponent from '@/modules/project/components/ProductComponent.vue';

const projectStore = useProjectStore();
const projectDetails = ref<ProjectDetail>();

onBeforeMount(() => {
  projectDetails.value = projectStore.projectDetails;
});

watch(() => projectStore.projectDetails.projectId, (newProjectId) => {
  if (newProjectId !== 0) {
    projectDetails.value = projectStore.projectDetails;
  }
});


</script>

<style scoped>
@import '@/assets/css/project-info.css';

</style>