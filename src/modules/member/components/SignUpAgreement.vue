<template>
    <div class="sec-content">
        <div id="sec-agreement-box"></div>
        <div id="sec-agreement-check">
            <input type="checkbox" name="" id="input-aggrement-check">
            <label for="input-aggrement-check"> 개인정보 수집 및 이용에 동의합니다</label>
        </div>
    </div>
    <div class="sec-btn">
        <div class="btn-next">
            <router-link to="/basic-info"><button @click="increaseActiveNo"><span style="color:black;padding-right:5px;">Lotdiz</span> 회원가입하기</button></router-link>
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
</script>

<style>
    @import '@/assets/signup.css';
    #sec-agreement-box {
        height: 400px;
        border: 1px solid #d3d3d3;
        /* width: 1098px; */
    }

    #sec-agreement-check {
        padding: 20px 0;
        border-bottom: 2px solid #d3d3d3;
    }
</style>