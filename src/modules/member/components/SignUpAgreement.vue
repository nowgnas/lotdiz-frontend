<template>
    <div id="sec-agreement-box"></div>
    <div id="sec-agreement-check">
        <input type="checkbox" name="" id="input-aggrement-check">
        <label for="input-aggrement-check"> 개인정보 수집 및 이용에 동의합니다</label>
    </div>
    <div class="sec-btn">
        <div class="btn-next">
            <router-link to="/basic-info"><button @click="increaseActiveNo">next</button></router-link>
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
    #sec-agreement-box {
        width: 60%;
        border: 1px solid #d3d3d3;
        /* width: 1098px; */
        height: 425px;
    }

    #sec-agreement-check {
        width: 60%;
        padding: 20px 0;
        border-bottom: 2px solid #d3d3d3;
    }

    .sec-btn {
        padding-top: 20px;
    }

</style>