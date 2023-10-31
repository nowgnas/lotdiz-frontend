<template>
  <div class="sec-content">
    <div id="icon-complete"><font-awesome-icon :icon="['fas', 'check']" /></div>
    <div id="text-complete">회원가입이 <span style="font-weight:bold;">완료</span>되었습니다.</div>
    <div id="text-detail-complete">
      <span id="member-name-wrapper">'{{ memberName }}'</span>님의 회원가입을 축하합니다.<br>
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
import { useMemberStore } from '../../stores/member';

const memberStore = useMemberStore();
const memberName = memberStore.memberName;

</script>

<style scoped>
@import '@/assets/css/member/sign-up-common.css';

@import '@/assets/css/member/sign-up-success.css';
</style>