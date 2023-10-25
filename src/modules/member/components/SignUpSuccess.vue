<template>
  <div class="sec-content">
    <div id="icon-complete"><font-awesome-icon :icon="['fas', 'check']" /></div>
    <div id="text-complete">회원가입이 <span style="font-weight:bold;">완료</span>되었습니다.</div>
    <div id="text-detail-complete">
      <span id="member-name-wrapper">'{{ memberName }}'</span>님의 회원가입을 축하합니다.<br><!--hard coding-->
      알차고 실속있는 서비스로 찾아뵙겠습니다.
    </div>
  </div>
  <div class="sec-btn">
      <div>
        <p><a href="/" id="btn-home">홈으로</a></p>
      </div>
      <div>
        <router-link to="/member/sign-in"><button>로그인</button></router-link>
      </div>
  </div>
</template>

<script setup lang="ts">
import Vue from 'vue';
import { useMemberStore } from '../../stores/member';

const memberStore = useMemberStore();
const memberName = memberStore.memberName;

</script>

<style>
  @import '@/assets/signup.css';
  .sec-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    padding-top: 0;
    border-bottom: 2px solid var(--icon-color);
    height: 380px;
  }

  #icon-complete {
    font-size: 150px;
    color: var(--main-color);
  }

  #text-complete {
    font-size: 35px;
  }

  #text-detail-complete {
    padding-top: 3%;
  }

  #member-name-wrapper {
    font-weight: bold;
    font-size: 20px;
  }

  #btn-home {
    color: var(--icon-color);
    font-size: 20px;
    font-weight: bold;
    padding: 8px 25px;
    border: 2px solid var(--icon-color);
  }

  .sec-btn {
    align-items: center;
  }
</style>