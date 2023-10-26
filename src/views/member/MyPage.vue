<template>
  <div style="height:100%;display:flex;flex-direction:column;">
    <div style="height:93px;">Header</div>
    <div id="sub-header-mypage">
        <button id="tab-supporter"><router-link to="/member/my-page">서포터</router-link></button>
        <button id="tab-maker"><router-link to="/member/my-page/maker">메이커</router-link></button>
    </div>
    <div class="contents-wrapper">
        <div id="sec-profile">
            <div>
                <div id="profile-icon-wrapper"><font-awesome-icon :icon="['far', 'circle-user']" /></div>
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

body, ul, li {
margin: 0;
padding: 0;
list-style: none;
height: 100vh;
}

a {
text-decoration: none;
color: inherit;
}

button {
    border: none;
}

#sub-header-mypage {
    height: 95px;
    background-color: var(--main-color);
    display: flex;
    justify-content: end;
    align-items: end;
    padding-right: 2%;
    gap: 2px;
}

.contents-wrapper {
    display: flex;
    gap: 0;
    flex-grow: 1;
}

#sec-profile {
    width: 25%;
    border-right: 1px solid var(--icon-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3%;
}

#contents-mypage {
    width: 75%;
}

#profile-icon-wrapper {
    font-size: 150px;
}

#profile-name-wrapper {
    font-size: 20px;
    text-align: center;
    margin-top: 0;
}

#tab-supporter {
    background-color: white;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 5px 20px 0;
    cursor: pointer;
}

#tab-maker {
    background-color: var(--icon-color);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 5px 20px 0;
    cursor: pointer;
}
</style>