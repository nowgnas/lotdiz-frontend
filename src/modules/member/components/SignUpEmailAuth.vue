<template>
  <div class="sec-content">
    <div>
      <form action="" ref="email-auth-form" @submit.prevent="sendEmail">
        <div id="icon-email-wrapper">
          <p><font-awesome-icon :icon="['far', 'envelope']" /></p>
        </div>
        <div id="input-send-wrapper">
          <input type="hidden" name="user_name" value="woo__yup" />
          <input
            type="text"
            name="user_email"
            id="input-cert-email"
            placeholder="이메일을 입력해주세요"
            required
          />
          <input id="btn-cert-email" type="submit" value="Send" />
        </div>
      </form>
    </div>
    <div id="btn-cert-check" @click="grantCertification">
      <p><font-awesome-icon :icon="['far', 'circle-check']" /> 확인</p>
    </div>
  </div>
  <div class="sec-btn">
    <div class="btn-prev">
      <router-link to="/member/sign-up/basic-info"
        ><button @click="decreaseActiveNo">이전</button></router-link
      >
    </div>
    <div class="btn-next">
      <button @click="finalCheck">다음</button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useMemberStore } from '../../stores/member';
import router from '../../../router/index';
import { ref, inject } from 'vue';
import emailjs from '@emailjs/browser';
import { postMemberInfoForSignUp } from '@/services/api/MemberService';
import type { MemberInfoForSignUpRequest } from '@/services/types/MemberRequest';
import 'vue-loading-overlay/dist/css/index.css';

const { VITE_PUBLIC_KEY, VITE_SERVER_ID, VITE_TEMPLATE_ID } = import.meta.env;

const memberStore = useMemberStore();
const isEmailSent = ref(false);
const isEmailCert = ref(false);


const sendEmail = () => {
  emailjs.init(VITE_PUBLIC_KEY);

  const params = {
    from_name: 'Lotdiz',
    to_name: memberStore.memberName,
    message: `인증되었습니다.
    확인을 눌러주세요`
  }

  emailjs.send(VITE_SERVER_ID, VITE_TEMPLATE_ID, params).then(
    (result) => {
      isEmailSent.value = true;
      // loader.hide();
      alert('해당 메일로 인증 메시지가 발송되었습니다.');
      console.log('SUCCESS!', result.text);
    },
    (error) => {
      console.error('FAILED...', error.text);
    }
  )
}

const grantCertification = () => {
  if (isEmailSent.value) {
    alert('이메일 인증 확인되었습니다.')
    isEmailCert.value = true;
  } else {
    alert('이메일 인증이 확인되지 않았습니다.')
    return;
  }
}

const finalCheck = () => {
  if (!isEmailCert.value) {
    alert('이메일 인증을 완료해주세요.')
    return
  } else {
    if (confirm('회원가입을 완료하시겠습니까?')) {
      const signupRequest: MemberInfoForSignUpRequest = {
        username: memberStore.username,
        memberPassword: memberStore.memberPassword,
        memberName: memberStore.memberName,
        memberPhoneNumber: memberStore.memberPhoneNumber,
        memberPrivacyAgreement: memberStore.memberPrivacyAgreement
      }

      postMemberInfoForSignUp(signupRequest)
        .then(() => {
          memberStore.increaseActiveNo();
          router.push('/member/sign-up/success');
        })
        .catch((error) => {
          console.error(error)
        });
    } else {
      return;
    }
  }
}

const decreaseActiveNo = () => {
  memberStore.decreaseActiveNo();
}
</script>

<style>
@import '@/assets/css/member/sign-up-common.css';

@import '@/assets/css/member/sign-up-email-auth.css';
</style>
