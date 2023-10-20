<template>
  <div class="sec-content">
    이메일 인증
  </div>
  <div class="sec-btn">
      <div class="btn-prev">
          <router-link to="/basic-info"><button @click="decreaseActiveNo">이전</button></router-link>
      </div>
      <div class="btn-next">
          <router-link to="/sign-up-success"><button @click="increaseActiveNo">다음</button></router-link>
      </div>
  </div>
</template>

<script setup lang="ts">
import Vue from 'vue'
import { useMemberStore } from '../../stores/member';

const memberStore = useMemberStore();

const increaseActiveNo = () => {
  memberStore.increaseActiveNo();
}

const decreaseActiveNo = () => {
  memberStore.decreaseActiveNo();
}

</script>

<style>
  @import '@/assets/signup.css';
</style>