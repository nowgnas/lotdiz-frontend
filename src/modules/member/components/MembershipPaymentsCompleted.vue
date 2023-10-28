<template>
  <div id="membership-join-complete-container">
    <div id='membership-join-complete-header'>
      <p><font-awesome-icon :icon="['far', 'circle-check']" /> 결제 완료되었습니다.</p>
    </div>
    <div id='membership-join-complete-body'>
      <p>멤버십 등급: {{ membershipGrade }}</p>
      <p>결제금액: {{ membershipJoinFee }}원</p>
      <div class='btn-popup-close' @click="membershipJoinCompleteClose">확인</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getMembershipInfoForShow } from '../../../services/api/MemberService';

const membershipGrade = ref('');
const membershipJoinFee = ref(0);

onMounted(() => {
  getMembershipInfoForShow()
    .then(response => {
      membershipGrade.value = response.membershipPolicyGrade;
      membershipJoinFee.value = response.membershipPolicySubscriptionFee;
    }).catch(error => {
      console.error("멤버십 가입 정보 조회 실패:", error);
  })
})

const membershipJoinCompleteClose = () => {
  window.close();
}
</script>

<style>
@import '@/assets/color.css';
@import '@/assets/font.css';

body, ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100vh;
}

a {
  text-decoration: none;
  color: inherit;
}

#membership-join-complete-header {
  width: 100%;
  background-color: tomato;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

#membership-join-complete-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#membership-join-complete-body {
  padding-top: 20px;
}

.btn-popup-close {
  background-color: tomato;
  padding: 10px 30px;
  border-radius: 5px;
  text-align: center;
  margin-top: 50px;
  color: white;
  cursor: pointer;
}
</style>