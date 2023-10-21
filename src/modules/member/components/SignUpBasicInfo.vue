<template>
    <div class="sec-content">
      <form action="" v-on:submit.prevent="submitForm" id="form-basic-info">
        <div class="input-wrapper">
          <div class="label-width">
            <label for="input-member-name">이름 <span class="astar-color">*</span> </label>
          </div>
          <input type="text" id="input-member-name" />
        </div>
        <div class="input-wrapper">
          <div class="label-width label-loc-start">
            <label for="input-username-1">이메일 <span class="astar-color">*</span> </label>
          </div>
          <div>
            <div id="input-username-wrapper">
              <div id="input-username-sub-wrapper">
                <input type="text" id="input-username-1" v-model="username1" /> <p>@</p> <input type="text" id="input-username-2" v-model="username2" />
              </div>
              <select id="input-select" v-model="selectedOption">
                  <option value="direct">직접입력</option>
                  <option value="naver.com">naver.com</option>
                  <option value="google.com">gmail.com</option>
                  <option value="daum.com">daum.net</option>
              </select>
              <div id="btn-double-check"><p>중복확인</p></div>
            </div>
            <span id="error-msg-username" v-if="!validateUsername">올바르지 않은 이메일 형식입니다.</span>
            <span id="right-msg-username" v-if="validateUsername">올바른 이메일 형식입니다.</span>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="label-width">
            <label for="input-member-password">비밀번호 <span class="astar-color">*</span> </label>
          </div>
          <input type="password" id="input-member-password" />
        </div>
        <div class="input-wrapper">
          <div class="label-width">
            <label for="input-member-password-check">비밀번호 확인 <span class="astar-color">*</span> </label>
          </div>
          <input type="password" id="input-member-password-check" />
        </div>
      </form>
    </div>
    <div class="sec-btn">
        <div class="btn-prev">
            <router-link to="/sign-up"><button @click="decreaseActiveNo">이전</button></router-link>
        </div>
        <div class="btn-next">
            <router-link to="/email-auth"><button @click="validCheck">다음</button></router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMemberStore } from '../../stores/member';
import { computed, ref, watch } from 'vue';

const memberStore = useMemberStore();

const username1 = ref('');
const username2 = ref('');
const selectedOption = ref('직접입력');

watch(selectedOption, (newOption) => {
  if (newOption === "direct") {
    username2.value = '';
  } else {
    username2.value = newOption;
  }
});

// email 형식 check 함수
const isUsernameValid = (username1: string, username2: string): boolean => {
  const totalEmail = username1 + '@' + username2;
  console.log("totalEmail: " + totalEmail);
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return expression.test(totalEmail);
}

const validateUsername = computed((): boolean => {
  console.log("computed");
  return isUsernameValid(username1.value, username2.value)
});


const increaseActiveNo = () => {
  memberStore.increaseActiveNo();
}

const decreaseActiveNo = () => {
  memberStore.decreaseActiveNo();
}

</script>

<style>
   @import '@/assets/signup.css';

   #form-basic-info {
      padding-left: 10%;
      min-width: 1600px;
   }

   .input-wrapper {
      display: flex;
      gap: 50px;
      padding-bottom: 20px;
      align-items: center;
   }

   #input-username-wrapper {
      display: flex;
      gap: 10px;
      align-items: center;
   }

   #input-username-sub-wrapper {
      display: flex;
      gap: 5px;
      align-items: center;
   }

   #input-username-1, #input-username-2 {
      width: 150px;
      height: 25px;
      border: 2.5px solid var(--main-color)
   }

   #input-member-name, #input-member-password, #input-member-password-check {
      width: 350px;
      height: 25px;
      border: 2.5px solid var(--main-color)
   }
      
   .label-width {
      width: 150px;
      text-align: right;
   }

   .label-loc-start {
      padding-bottom: 23px;
   }

   .astar-color {
      color: var(--error-color);
   }

   #input-select {
      border: 2.5px solid var(--main-color)
   }

   #error-msg-username {
      font-size: small;
      color: var(--error-color);
   }

   #right-msg-username {
     font-size: small;
     color: var(--success-color);
   }

   #btn-double-check {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 31px;
      padding: 0 10px;
      background-color: var(--deep-color);
      color: white;
      box-sizing: border-box;
      cursor: pointer;
   }

   .sec-btn {
      width: 60%;
   }
</style>