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
import { usePersistentedStateStore } from '@/stores/persistentedStateStore';

const persistentedStateStore = usePersistentedStateStore();

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

body,
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

#sign-in-container {
  /* background-color: var(--main-color); */
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(58, 192, 179, 1) 34%,
    rgba(104, 191, 147, 1) 62%,
    rgba(253, 187, 45, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

#sign-in-wrapper {
  width: 450px;
  height: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 1px var(--middle-gray);
}

#sign-in-title {
  font-size: 30px;
  font-weight: bold;
  padding-top: 50px;
  padding-bottom: 40px;
}

.icon-wrapper {
  color: var(--icon-color);
  font-size: 20px;
}

#input-sign-in-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

#input-sign-in-username {
  width: 300px;
  height: 30px;
}

#input-sign-in-password {
  width: 300px;
  height: 30px;
}

#signup-text-wrapper {
  text-align: right;
}

#a-signup {
  color: var(--middle-gray);
}

#a-signup:hover {
  color: var(--hover-color);
  cursor: pointer;
}

#btn-sign-in {
  border: none;
  background-color: var(--main-color);
  width: 100%;
  height: 40px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  color: white;
  border-radius: 5px;
}

#btn-sign-in:hover {
  background-color: var(--deep-color);
}
</style>
