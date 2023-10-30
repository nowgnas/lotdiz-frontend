<template>
  <div style="height:100%;display:flex;flex-direction:column;">
    <div id="sub-header-mypage">
        <button id="tab-supporter"><router-link to="/member/my-page">서포터</router-link></button>
        <button id="tab-maker"><router-link to="/member/my-page/maker">메이커</router-link></button>
    </div>
    <div class="contents-wrapper">
        <div id="sec-profile">
            <div>
                <div id="profile-icon-wrapper"><font-awesome-icon :icon="['fas', 'circle-user']" style="color: #d9d8d8;" /></div>
                <p  id="profile-name-wrapper">이우엽님</p>
            </div>
        </div>
        <div id="contents-mypage">
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
@import '@/assets/color.css';
@import '@/assets/font.css';

@import '@/assets/css/member/my-page.css';
</style>