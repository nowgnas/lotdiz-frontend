<template>
  <div class="sec-content">
    <div>
      <form action="" ref="email-auth-form" @submit.prevent="sendEmail">
        <div id="icon-email-wrapper">
          <p><font-awesome-icon :icon="['far', 'envelope']" /></p>
        </div>
        <div id="input-send-wrapper">
          <input type="hidden" name="user_name" value="woo__yup">
          <input type="text" name="user_email" id="input-cert-email" placeholder="이메일을 입력해주세요">
          <input id="btn-cert-email" type="submit" value="Send" />
          <!-- <p>인증 메일 발송</p> -->
        </div>
      </form>
    </div>
    <div id="btn-cert-check" @click="grantCertification"><p><font-awesome-icon :icon="['far', 'circle-check']" /> 확인</p></div>
  </div>
  <div class="sec-btn">
      <div class="btn-prev">
          <router-link to="/member/sign-up/basic-info"><button @click="decreaseActiveNo">이전</button></router-link>
      </div>
      <div class="btn-next">
          <button @click="finalCheck">다음</button>
      </div>
  </div>
</template>

<script setup lang="ts">
import Vue from 'vue'
import { useMemberStore } from '../../stores/member';
import router from '../../../router/index';
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import { emit } from 'process';
const { VITE_PUBLIC_KEY, VITE_SERVER_ID, VITE_TEMPLATE_ID } = import.meta.env;

const memberStore = useMemberStore();
const isEmailSent = ref(false);
const isEmailCert = ref(false);

const sendEmail = () => {
  emailjs.init(VITE_PUBLIC_KEY);

  const params = {
    from_name: 'Lotdiz',
    to_name: 'woo yup',//hard coding.
    message: `인증되었습니다.
    확인을 눌러주세요`
  };

  emailjs.send(VITE_SERVER_ID, VITE_TEMPLATE_ID, params)
    .then((result) => {
      isEmailSent.value = true;
      alert('해당 메일로 인증 메시지가 발송되었습니다.');
      console.log('SUCCESS!', result.text);  
    }, (error) => {
      console.log('FAILED...', error.text);
    });
}

const grantCertification = () => {
  if(isEmailSent.value) {
    alert('이메일 인증 확인되었습니다.');
    isEmailCert.value = true;
  } else {
    alert('이메일 인증이 확인되지 않았습니다.');
    return;
  }
}

const finalCheck = () => {
  if(!isEmailCert.value) {
    alert('이메일 인증을 완료해주세요.');
    return;
  } else {
    if(confirm("회원가입을 완료하시겠습니까?")) {
      memberStore.increaseActiveNo();
      router.push('/member/sign-up/success');
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
  @import '@/assets/signup.css';
  .sec-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    /* justify-content: center; */
    padding-top: 2%;
    /* align-items: center; */
  }

  #icon-email-wrapper {
    box-sizing: border-box;
    height: 35px;
    /* border: 2.5px solid var(--main-color); */
    border: none;
    /* padding: 0 5px; */
    color: var(--icon-color);
    font-size: 25px;
    /* padding-top: 5px; */
  }

  #input-send-wrapper {
    display: flex;
    justify-content: center;
  }

  #input-cert-email {
    height: 35px;
    width: 350px;
    border: 2.5px solid var(--main-color);
    box-sizing: border-box;
    border-right: none;
  }

  #btn-cert-email {
    color: white;
    height: 35px;
    box-sizing: border-box;
    background-color: var(--deep-color);
    padding: 2px 15px;
    cursor: pointer;
    border: none;
    font-size: 18px;
  }

  #btn-cert-check {
    color: white;
    height: 35px;
    box-sizing: border-box;
    background-color: var(--deep-color);
    padding: 2px 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
</style>