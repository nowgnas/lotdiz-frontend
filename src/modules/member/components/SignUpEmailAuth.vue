<template>
  <div class="sec-content">
    <div>
      <div id="icon-email-wrapper">
        <p><font-awesome-icon :icon="['far', 'envelope']" /></p>
      </div>
      <div id="input-send-wrapper">
        <input type="text" id="input-auth-email" placeholder="이메일을 입력해주세요">
        <a id="btn-auth-email"><p>인증 메일 발송</p></a>
      </div>
    </div>
    <div id="btn-auth-check"><p><font-awesome-icon :icon="['far', 'circle-check']" /> 확인</p></div>
  </div>
  <div class="sec-btn">
      <div class="btn-prev">
          <router-link to="/basic-info"><button @click="decreaseActiveNo">이전</button></router-link>
      </div>
      <div class="btn-next">
          <button @click="finalCheck">다음</button>
      </div>
  </div>
</template>

<script setup lang="ts">
import Vue from 'vue'
import { useMemberStore } from '../../stores/member';
import router from '../../../router/index';

const memberStore = useMemberStore();

const finalCheck = () => {
  if(confirm("회원가입을 완료하시겠습니까?")) {
    memberStore.increaseActiveNo();
    router.push('/sign-up-success');
  } else {
    return;
  }
}

const decreaseActiveNo = () => {
  memberStore.decreaseActiveNo();
}

</script>

<style>
  @import '@/assets/signup.css';
  .sec-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    /* justify-content: center; */
    padding-top: 2%;
    /* align-items: center; */
  }

  #icon-email-wrapper {
    box-sizing: border-box;
    height: 35px;
    /* border: 2.5px solid var(--main-color); */
    border: none;
    /* padding: 0 5px; */
    color: var(--icon-color);
    font-size: 25px;
    /* padding-top: 5px; */
  }

  #input-send-wrapper {
    display: flex;
    justify-content: center;
  }

  #input-auth-email {
    height: 35px;
    width: 350px;
    border: 2.5px solid var(--main-color);
    box-sizing: border-box;
    border-right: none;
  }

  #btn-auth-email {
    color: white;
    height: 35px;
    box-sizing: border-box;
    background-color: var(--deep-color);
    padding: 2px 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  #btn-auth-check {
    color: white;
    height: 35px;
    box-sizing: border-box;
    background-color: var(--deep-color);
    padding: 2px 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
</style>