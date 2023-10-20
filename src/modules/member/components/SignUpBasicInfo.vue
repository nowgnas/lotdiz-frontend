<template>
  <div>
    기본 정보 입력
    <div class="sec-btn">
        <div class="btn-prev">
            <router-link to="/sign-up"><button @click="decreaseActiveNo">prev</button></router-link>
        </div>
        <div class="btn-next">
            <router-link to="/email-auth"><button @click="increaseActiveNo">next</button></router-link>
        </div>
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
    
</style>