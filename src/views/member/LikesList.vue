<template>
  <div id='likes-view-container'>
    <div id='likes-title'>
      <p>
        찜
        <span class='icon-wrapper'>
          <font-awesome-icon :icon="['fas', 'heart']" />
        </span>
        만 모았어요
      </p>
    </div>
    <div v-for='item in likesList' :item='item'>
      <likes-card :item='item' />
    </div>
  </div>
</template>

<script setup lang='ts'>
import LikesCard from '../../modules/member/components/LikesCard.vue'
import { ref, onMounted } from 'vue'
import { getLikesList } from '@/services/api/MemberService'
import type { LikesDetailResponse } from '@/services/types/MemberResponse'

const likesList = ref<Array<LikesDetailResponse>>([])

onMounted(() => {
  getLikesList()
    .then(response => {
      likesList.value = response
    }).catch(error => {
      console.error("찜 목록 조회 실패")
  })
})
</script>

<style scoped>
@import '@/assets/color.css';
@import '@/assets/font.css';

body,
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100vh;
}

a {
  text-decoration: none;
  color: inherit;
}

#likes-view-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding-bottom: 100px;
}

#likes-title {
  background-color: var(--card-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 832px;
  height: 120px;
  border-radius: 5px;
  margin-top: 3%;
}

.icon-wrapper {
  color: var(--heart-color);
}
</style>
