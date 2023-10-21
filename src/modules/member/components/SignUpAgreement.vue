<template>
    <div class="sec-content">
        <div id="sec-agreement-box"></div>
        <div id="sec-agreement-check">
            <input type="checkbox" name="agreement-check" id="input-agreement-check">
            <label for="input-agreement-check"> 개인정보 수집 및 이용에 동의합니다</label>
        </div>
    </div>
    <div class="sec-btn">
        <div class="btn-next">
            <router-link to="/basic-info"><button @click="validCheck"><span style="color:black;padding-right:5px;">Lotdiz</span> 회원가입하기</button></router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import Vue from 'vue'

import { useMemberStore } from '../../stores/member';
import { nextTick } from 'vue';
import { log } from 'console';

const memberStore = useMemberStore();

const validCheck = async (event) => {
    await nextTick(); // DOM이 준비될 때까지 대기
    let checkbox = document.getElementById("input-agreement-check") as HTMLInputElement | null;
    if(!checkbox.checked) {
        alert('약관에 동의해야 합니다.');
        event.preventDefault();
    } else {
        memberStore.increaseActiveNo();
    }
}
</script>

<style>
    @import '@/assets/signup.css';
    #sec-agreement-box {
        height: 350px;
        border: 1px solid #d3d3d3;
        /* width: 1098px; */
    }

    #sec-agreement-check {
        padding: 20px 0;
        border-bottom: 2px solid #d3d3d3;
    }
</style>