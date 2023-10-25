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
import Vue from 'vue';
import SignUpAgreement from '../../modules/member/components/SignUpAgreement.vue';
import { useMemberStore } from '../../modules/stores/member';
import { watch } from 'vue';

const memberStore = useMemberStore();
const activeNo = memberStore.activeNo;
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
  @import '@/assets/signup.css';
  @import '@/assets/font.css';

  body, ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #header-signup {
    height: 54px;
    background-color: var(--main-color);
    display: flex;
    align-items: center;
    padding: 0 20px;
    font-size: 18px;
    font-weight: bold;
  }

  #progress-bar-signup {
    height: 125px;
    background-color: #F8F8F8;
    display: flex;
    gap: 50px;
    justify-content: space-around;
    align-items: center;
    padding: 0 400px;
  }

  .icon-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: var(--icon-color);
  }

  #contents-signup {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
  }

  .increase-icon-size {
    font-size: 50px;
    color: var(--icon-color);
  }

  .isActive {
    color: var(--main-color);
  }
</style>