<template>
  <div>
    이메일 인증
    <div class="sec-btn">
        <div class="btn-prev">
            <router-link to="/basic-info"><button @click="decreaseActiveNo">prev</button></router-link>
        </div>
        <div class="btn-next">
            <router-link to="/sign-up-success"><button @click="increaseActiveNo">next</button></router-link>
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