<template>
  <div id="sign-in-container">
    <div id="sign-in-wrapper">
      <div id="sign-in-title">Login</div>
      <form action="" v-on:submit.prevent="submitForm">
        <div id="input-sign-in-wrapper">
          <div>
            <div class="icon-wrapper">
              <font-awesome-icon :icon="['far', 'envelope']" />
            </div>
            <input type="text" id="input-sign-in-username" placeholder="email" v-model="username" />
          </div>
          <div>
            <div class="icon-wrapper">
              <font-awesome-icon :icon="['fas', 'key']" />
            </div>
            <input type="password" id="input-sign-in-password" placeholder="password" v-model="password" />
          </div>
          <div id="signup-text-wrapper"><a href="/member/sign-up" id="a-signup">회원가입</a></div>
          <input type="submit" value="로그인" id="btn-sign-in" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InfoForSignIn } from '@/services/types/MemberRequest';
import { ref } from 'vue';
import { postInfoForSignIn } from '@/services/api/MemberService';
import router from '../../router/index';

const username = ref('');
const password = ref('');

const submitForm = () => {
  const signInInfoRequest: InfoForSignIn = {
    username: username.value,
    password: password.value
  }
  postInfoForSignIn(signInInfoRequest)
    .then(response => {
      alert('로그인 성공했습니다.');
      const authorization = response.headers["authorization"];
      console.log("authorization:", authorization);
      // persistentedStateStore._customProperties.add(authorization);
      // persistentedStateStore.$state.jwtToken = authorization;
      localStorage.setItem("jwtToken", authorization);
      document.cookie = "jwtToken=" + authorization;
      router.push('/');
    })
    .catch((error: unknown) => {
      console.error('error:', error);
      router.push('/member/sign-in');
    });
}
</script>

<style>
@import '@/assets/color.css';
@import '@/assets/font.css';

@import '@/assets/css/member/sign-in.css';
</style>
