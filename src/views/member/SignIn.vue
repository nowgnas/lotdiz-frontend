<template>
  <div id='sign-in-container'>
    <div id='sign-in-wrapper'>
      <div class='lotdiz-logo' @click='goMain'>lotdiz.</div>
      <form action='' v-on:submit.prevent='submitForm'>
        <div id='input-sign-in-wrapper'>
          <div>
            <div class='icon-wrapper'>
              <font-awesome-icon :icon="['far', 'envelope']" />
            </div>
            <input type='text' id='input-sign-in-username' placeholder='이메일' v-model='username' />
          </div>
          <div>
            <div class='icon-wrapper'>
              <font-awesome-icon :icon="['fas', 'key']" />
            </div>
            <input type='password' id='input-sign-in-password' placeholder='비밀번호' v-model='password' />
          </div>
          <div id='signup-text-wrapper'><a href='/member/sign-up' id='a-signup'>회원가입</a></div>
          <input type='submit' value='로그인' id='btn-sign-in' />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang='ts'>
import type { InfoForSignIn } from '@/services/types/MemberRequest'
import { ref } from 'vue'
import { postInfoForSignIn } from '@/services/api/MemberService'
import router from '../../router/index'
import { useHeaderStore } from '@/stores/headerStore'

const headerStore = useHeaderStore()
const username = ref('')
const password = ref('')

const goMain = () => {
  headerStore.assignIsNoHeaderPath(false)
  router.push('/')
}

const submitForm = () => {
  const signInInfoRequest: InfoForSignIn = {
    username: username.value,
    password: password.value
  }
  postInfoForSignIn(signInInfoRequest)
    .then(response => {
      headerStore.assignIsNoHeaderPath(false)
      alert('로그인 성공했습니다.')
      const authorization = response.headers['authorization']
      localStorage.setItem('jwtToken', authorization)
      document.cookie = 'jwtToken=' + authorization
      router.push('/')
    })
    .catch((error: unknown) => {
      alert('로그인에 실패했습니다.')
      console.error('error:', error)
      router.push('/member/sign-in')
    })
}
</script>

<style scoped>
@import '@/assets/color.css';
@import '@/assets/font.css';

@import '@/assets/css/member/sign-in.css';
</style>
