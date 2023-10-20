<template>
  <div>
    <div id="header-signup"><p>롯디즈</p></div>
    <div id="progress-bar-signup">
      <div>
        <font-awesome-icon :icon="['far', 'square-check']" class="increase-icon-size" :class="{ 'isActive': getActiveNo() === 1 }" />
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'user-pen']" class="increase-icon-size" :class="{ 'isActive': getActiveNo() === 2 }" />
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'envelope-circle-check']" class="increase-icon-size" :class="{ 'isActive': getActiveNo() === 3 }" />
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'file-circle-check']" class="increase-icon-size" :class="{ 'isActive': getActiveNo() === 4 }" />
      </div>
    </div>
    <div id="contents-signup">
        <!-- <SignUpAgreement></SignUpAgreement> -->
        <router-view></router-view>
    </div>
  </div>
</template>


<script setup lang="ts">
import Vue from 'vue';
import SignUpAgreement from '../../modules/member/components/SignUpAgreement.vue';
import '@/assets/signup.css';
import { useMemberStore } from '../../modules/stores/member';
import { watch } from 'vue';

const memberStore = useMemberStore();
const activeNo = memberStore.activeNo;
const getActiveNo = () => {
  return memberStore.getActiveNo();
}

</script>

<style>
  @import '@/assets/color.css';
  @import '@/assets/signup.css';
  @font-face {
      font-family: "GmarketSansMedium";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
      format("woff");
      font-weight: normal;
      font-style: normal;
  }

  html > body {
      font-family: "GmarketSansMedium";
  }

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
    padding: 0 200px;
  }

  #contents-signup {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px;
  }

  .increase-icon-size {
    font-size: 50px;
    color: #C4C4C4;
  }

  .isActive {
    color: var(--main-color);
  }
</style>