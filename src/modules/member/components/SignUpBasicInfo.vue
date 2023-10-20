<template>
    <div class="sec-content">
      <form action="" id="form-basic-info">
        <div class="input-wrapper">
          <div class="label-width">
            <label for="input-member-name">이름 <span class="astar-color">*</span> </label>
          </div>
          <input type="text" id="input-member-name" />
        </div>
        <div class="input-wrapper">
          <div class="label-width">
            <label for="input-member-username-start">이메일 <span class="astar-color">*</span> </label>
          </div>
          <div id="input-username-wrapper">
            <div id="input-username-sub-wrapper">
              <input type="text" id="input-member-username-start" /> <p>@</p> <input type="text" id="input-member-username-end" />
            </div>
            <select id="input-select">
                <option value="option1" selected>직접입력</option>
                <option value="naver">naver.com</option>
                <option value="google">gmail.com</option>
                <option value="daum">daum.net</option>
            </select>
            <div id="btn-double-check"><p>중복확인</p></div>
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
            <router-link to="/email-auth"><button @click="increaseActiveNo">다음</button></router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import Vue from 'vue'
import { useMemberStore } from '../../stores/member';

const memberStore = useMemberStore();

const increaseActiveNo = () => {
  memberStore.increaseActiveNo();
}

const decreaseActiveNo = () => {
  memberStore.decreaseActiveNo();
}

</script>

<style>
   @import '@/assets/signup.css';
   label {
      font-weight: bold;
   }

   #form-basic-info {
      padding-left: 10%;
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
      gap: 20px;
      align-items: center;
   }

   #input-member-name, #input-member-username-start, #input-member-username-end {
      width: 200px;
      height: 25px;
      border: 2.5px solid var(--main-color)
   }

   #input-member-password, #input-member-password-check {
      width: 250px;
      height: 25px;
      border: 2.5px solid var(--main-color)
   }
      

   .label-width {
      width: 150px;
      text-align: right;
   }

   .astar-color {
      color: #FF0000;
      font-weight: bold;
   }

   #input-select {
      border: 2.5px solid var(--main-color)
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