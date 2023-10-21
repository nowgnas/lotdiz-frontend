<template>
    <div class="sec-content">
      <form action="" v-on:submit.prevent="submitForm" id="form-basic-info">
        <div class="input-wrapper">
          <div class="label-width label-loc-start">
            <label for="input-member-name">이름 <span class="astar-color">*</span> </label>
          </div>
          <div>
            <input type="text" id="input-member-name" v-model="name" />
            <div style="padding-top:8px;"><span id="normal-msg" v-if="validateName">1 ~ 10자 이내로 입력해주세요.</span></div>
            <div style="padding-top:8px;"><span id="error-msg" v-if="!validateName">최대 10자까지 입력가능합니다.</span></div>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="label-width label-email-loc-start">
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
            <div><span id="error-msg" v-if="!validateUsername">올바르지 않은 이메일 형식입니다.</span></div>
            <div><span id="right-msg" v-if="validateUsername">올바른 이메일 형식입니다.</span></div>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="label-width label-loc-start">
            <label for="input-member-password">비밀번호 <span class="astar-color">*</span> </label>
          </div>
          <div>
            <input type="password" id="input-member-password" v-model="password" />
            <div style="padding-top:8px;"><span id="error-msg" v-if="!validatePassword">영문자, 숫자, 특수문자 모두 포함하여 8 ~ 16자 이내로 작성해주세요.</span></div>
            <div style="padding-top:8px;"><span id="right-msg" v-if="validatePassword"><font-awesome-icon :icon="['fas', 'key']" /> 안전한 비밀번호입니다.</span></div>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="label-width label-loc-start">
            <label for="input-member-password-check">비밀번호 확인 <span class="astar-color">*</span> </label>
          </div>
          <div>
            <input type="password" id="input-member-password-check" v-model="passwordCheck" />
            <div style="padding-top:8px;"><span id="error-msg" v-if="!validatePasswordCheck">비밀번호가 일치하지 않습니다.</span></div>
            <div style="padding-top:8px;"><span id="right-msg" v-if="validatePasswordCheck">비밀번호가 일치합니다.</span></div>
          </div>
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

const name = ref('');
const username1 = ref('');
const username2 = ref('');
const selectedOption = ref('직접입력');
const password = ref('');
const passwordCheck = ref('');

watch(selectedOption, (newOption) => {
  if (newOption === "direct") {
    username2.value = '';
  } else {
    username2.value = newOption;
  }
});

const validateName = computed((): boolean => {
  return name.value.length <= 10 ? true : false;
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
  return isUsernameValid(username1.value, username2.value);
});

const isPasswordValid = (password: string): boolean => {
  const expression: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!*_])[A-Za-z\d@#$%^&+=!*_]{8,16}$/;
  return expression.test(password);
}

const validatePassword = computed((): boolean => {
  return isPasswordValid(password.value);
});

const validatePasswordCheck = computed((): boolean => {
  if(passwordCheck.value === '') {
    return false;
  }
  return password.value === passwordCheck.value ? true : false;  
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
      padding-left: 12%;
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
      width: 158px;
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
      padding-bottom: 34px;
   }

   .label-email-loc-start {
      padding-bottom: 23px;
   }

   .astar-color {
      color: var(--error-color);
   }

   #input-select {
      border: 2.5px solid var(--main-color)
   }

   #normal-msg {
      font-size: small;
      color: var(--icon-color);
   }

   #error-msg {
      font-size: small;
      color: var(--error-color);
   }

   #right-msg {
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