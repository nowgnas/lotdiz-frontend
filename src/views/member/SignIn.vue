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
import { ref, onMounted } from 'vue'
import { postInfoForSignIn } from '@/services/api/MemberService'
import router from '../../router/index'
import { useHeaderStore } from '@/stores/headerStore'
import { toast, type ToastOptions} from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const headerStore = useHeaderStore()
const username = ref('')
const password = ref('')

onMounted(() => {
  headerStore.assignIsNoHeaderPath(true)
})

const goMain = () => {
  headerStore.assignIsNoHeaderPath(false)
  router.push('/')
}

const options = {
  transition: toast.TRANSITIONS.BOUNCE,
  position: toast.POSITION.TOP_RIGHT,
  pauseOnHover: true,
  progress: undefined,
  autoClose: 3000,
  toastStyle: {
    fontWeight: 'bold'
  }
} as ToastOptions

const submitForm = () => {
  const signInInfoRequest: InfoForSignIn = {
    username: username.value,
    password: password.value
  }
  postInfoForSignIn(signInInfoRequest)
    .then(response => {
      headerStore.assignIsNoHeaderPath(false)
      alert('성공적으로 로그인했습니다.')
      const authorization = response.headers['authorization']
      localStorage.setItem('jwtToken', authorization)
      document.cookie = 'jwtToken=' + authorization
      router.push('/')
    })
    .catch((error: unknown) => {
      toast.error(error as string, options as ToastOptions)
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
