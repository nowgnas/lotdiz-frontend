<template>
  <div class='likes-card-wrapper' :id="'project-' + item.projectId">
    <div class='likes-card-content-wrapper'>
      <div class='sec-project-img'>
        <div>
          <img :src='item.projectThumbnailImageUrl' alt='' class='img-likes' />
        </div>
        <div class='icon-heart-wrapper' @click='removeLikes'>
          <font-awesome-icon :icon="['fas', 'heart']" />
        </div>
      </div>
      <div class='sec-project-title'>
        <div>
          <div class='text-achivement-rate'>{{ item.fundingAchievementRate }}% 달성</div>
          <div class='text-title' @click='goProjectDetail'>{{ item.projectName }}</div>
        </div>
        <div class='text-remain-days' v-if='item.remainingDays <= 0'>프로젝트 종료</div>
        <div class='text-remain-days' v-else>{{ item.remainingDays }}일</div>

        <div class='text-maker'>{{ item.makerName }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import type { LikesDetailResponse } from '@/services/types/MemberResponse'
import { deleteLikes } from '@/services/api/MemberService'
import router from '@/router'

const props = defineProps({
  item: {
    type: Object as PropType<LikesDetailResponse>,
    required: true
  }
})

const goProjectDetail = (event: any) => {
  const curEle = event.target
  const cloestAncestor = curEle.closest('.likes-card-wrapper')
  const ancestorId = parseInt(cloestAncestor.getAttribute('id').replace("project-", ""))
  router.push('/project-details/' + ancestorId)
}

const removeLikes = (event: any) => {
  const curEle = event.target
  const cloestAncestor = curEle.closest('.likes-card-wrapper')
  const ancestorId = parseInt(cloestAncestor.getAttribute('id').replace("project-", ""))
  if(confirm('해당 프로젝트를 찜목록에서 삭제하시겠습니까?')) {
    deleteLikes(ancestorId)
      .then(() => {
        alert('성공적으로 삭제하였습니다.')
        location.reload()
      }).catch(error => {
        alert('해당 프로젝트를 삭제하는데 실패했습니다.')
    })
  }
}
</script>

<style scoped>
.likes-card-wrapper {
  width: 832px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 5px;
}

.likes-card-content-wrapper {
  display: flex;
  justify-content: center;
  gap: 50px;
}

.img-likes {
  width: 280px;
  height: 200px;
  border-radius: 5px;
}

.sec-project-img {
  display: flex;
  align-items: center;
  position: relative;
}

.icon-heart-wrapper {
  position: absolute;
  color: var(--heart-color);
  top: 15px;
  right: 15px;
  font-size: 25px;
  cursor: pointer;
}

.sec-project-title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.text-achivement-rate {
  font-weight: bold;
  font-size: 15px;
  color: var(--main-color);
}

.text-title {
  font-weight: bold;
  cursor: pointer;
}

.text-remain-days {
  color: var(--main-color);
  font-size: 15px;
  font-weight: bold;
}

.text-maker {
  color: var(--middle-gray);
  font-size: 14px;
}
</style>
