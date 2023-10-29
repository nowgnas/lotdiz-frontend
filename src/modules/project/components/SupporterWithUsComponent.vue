<template>
  <div class="support-with-us-container" >
    <div class = "support-with-us-title-box">
      <div class='support-with-us-logo'>
        <img class='support-with-us-logo-img' alt='support-logo' src='/common/supporter-icon.png'>
      </div>
      <div class='support-with-us-title'>함께 하는 서포터</div>
      <div class='support-with-us-count'>{{ count }}</div>
    </div>
    <div class='support-with-us' v-if='isContents'>
      <div class='support-with-us-card' v-for='supportInfo in supportInfoList'>
        <div class='support-with-us-support-image'>
          <img class='support-with-us-support-img' alt='support-image' :src='supportInfo.memberProfileImageUrl'>
        </div>
        <div class='support-with-us-info'>
          <div class='support-with-us-contents'>
            <div class = 'support-with-us-member-name' v-if='supportInfo.supporterWithUsIsNamePublic'>{{supportInfo.memberName}} 님이 </div>
            <div class = 'support-with-us-member-name' v-else>익명의 서포터가</div>

            <div class='support-with-us-funding-amount' v-if='supportInfo.supporterWithUsIsAmountPublic'>{{ supportInfo.fundingTotalAmount + supportInfo.fundingSupportAmount }} 원 펀딩 하셨습니다.</div>
            <div class='support-with-us-funding-amount' v-else>펀딩에 참여하였습니다.</div>

          </div>
          <div class='support-with-us-created-at'>
            {{ new Date(supportInfo.createdAt).toLocaleString() }}
          </div>
        </div>
      </div>
    </div>

    <div class='non-contents-box' v-else>
      해당 프로젝트의 펀딩 내역이 존재하지 않습니다.
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useProjectStore } from '@/store/ProjectStore';
import type { SupporterInfo, SupportWithUsInfo, SupportWithUsResponse } from '@/services/types/ProjectResponse'
import { getSupportWithUsInfo } from '@/services/api/ProjectService'

const projectStore = useProjectStore();

const projectId = ref<number>(-1);
const supportInfoList = ref<Array<SupporterInfo>>([]);
const totalPages = ref<number>(0);
const count = ref<number>(0);
const isContents = ref<boolean>(false);

const getSupportWithUsRequest = async (projectId: number, page: number, size: number, sort: string) => {
  try {
    const response: SupportWithUsInfo = await getSupportWithUsInfo(projectId, page, size, sort);

    supportInfoList.value = response['supporterInfoResponseDtos'];
    totalPages.value = response['totalPages'];
    count.value = response['count'];
    if (count.value != 0) {
      isContents.value = true;
    }
  } catch (error) {
    console.log(error);
  }
}

onBeforeMount(async () => {
  projectId.value = projectStore.projectDetails.projectId;
  await getSupportWithUsRequest(projectId.value, 0, 20, 'createdAt,desc');

})

</script>

<style scoped>
@import '@/assets/css/project-get-support-with-us.css';
</style>