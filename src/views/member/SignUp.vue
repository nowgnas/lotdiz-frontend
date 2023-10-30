<template>
  <div>
    <div id="header-signup"><p>롯디즈</p></div>
    <div id="progress-bar-signup">
      <div class="icon-wrapper">
        <font-awesome-icon :icon="['far', 'square-check']" class="increase-icon-size" :class="{ 'isActive': getActiveNo() === 1 }" />
        <div>
          <span :class="{'isActive': getActiveNo() === 1}">약관동의</span>
        </div>
      </div>
      <div class="icon-wrapper">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </div>
      <div class="icon-wrapper">
        <font-awesome-icon :icon="['fas', 'user-pen']" class="increase-icon-size" :class="{ 'isActive': getActiveNo() === 2 }" />
        <div>
          <span :class="{'isActive': getActiveNo() === 2}">기본정보입력</span>
        </div>
      </div>
      <div class="icon-wrapper">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </div>
      <div class="icon-wrapper">
        <font-awesome-icon :icon="['fas', 'envelope-circle-check']" class="increase-icon-size" :class="{ 'isActive': getActiveNo() === 3 }" />
        <div>
          <span :class="{'isActive': getActiveNo() === 3}">이메일인증</span>
        </div>
      </div>
      <div class="icon-wrapper">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </div>
      <div class="icon-wrapper">
        <font-awesome-icon :icon="['fas', 'file-circle-check']" class="increase-icon-size" :class="{ 'isActive': getActiveNo() === 4 }" />
        <div>
          <span :class="{'isActive': getActiveNo() === 4}">가입완료</span>
        </div>
      </div>
    </div>
    <div id="contents-signup">
        <router-view></router-view>
    </div>
  </div>
</template>


<script setup lang="ts">
import { useMemberStore } from '@/modules/stores/member';

const memberStore = useMemberStore();
const getActiveNo = () => {
  return memberStore.getActiveNo();
}

if (window.location.href === "http://localhost:5173/member/sign-up/basic-info") {
  window.location.href = "http://localhost:5173/member/sign-up";
}

if (window.location.href === "http://localhost:5173/member/sign-up/email-auth") {
  window.location.href = "http://localhost:5173/member/sign-up";
}

if (window.location.href === "http://localhost:5173/member/sign-up/success") {
  window.location.href = "http://localhost:5173/member/sign-up";
}

</script>

<style>
@import '@/assets/color.css';
@import '@/assets/css/member/sign-up-common.css';
@import '@/assets/font.css';

@import '@/assets/css/member/sign-up.css';
</style>