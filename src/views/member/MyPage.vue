<template>
  <div style='height:100%;display:flex;flex-direction:column;'>
    <div id='sub-header-mypage'>
      <div class='tab-supporter' :class="{'active-tab': activeTab === true}">
        <div>
          <router-link to='/member/my-page' @click='activeSupporter'>서포터</router-link>
        </div>
      </div>
      <div class='tab-maker' :class="{'active-tab': activeTab === false}">
        <div>
          <router-link to='/member/my-page/maker' @click='activeMaker'>메이커</router-link>
        </div>
      </div>
    </div>
    <div class='contents-wrapper'>
      <div id='sec-profile'>
        <div>
          <div id='profile-icon-wrapper'>
            <font-awesome-icon :icon="['fas', 'circle-user']" style='color: #d9d8d8;' />
          </div>
          <p id='profile-name-wrapper'>{{ memberName }}님</p>
        </div>
        <div class='btn-logout' @click='confirmLogout'>로그아웃</div>
      </div>
      <div id='contents-mypage'>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { postSignOut } from '@/services/api/MemberService'
import router from '@/router'
import { useHeaderStore } from '@/stores/headerStore'
import { getMemberInfo } from '@/services/api/MemberService'
import { ref, onMounted } from 'vue'

const headerStore = useHeaderStore();
const memberName = ref('');
const activeTab = ref(true);

onMounted(() => {
  getMemberInfo()
    .then(response => {
      memberName.value = response.memberName
    }).catch(error => {
      console.error("멤버 정보 조회 실패:", error)
  })
})

if(window.location.pathname === '/member/my-page/maker') {
  window.location.pathname = '/member/my-page'
}

const activeSupporter = (event: any) => {
  activeTab.value = true;
}

const activeMaker = (event: any) => {
  activeTab.value = false;
}

const confirmLogout = () => {
  if(confirm('정말 로그아웃 하시겠습니까?')) {
    postSignOut()
      .then(() => {
        alert('성공적으로 로그아웃 되었습니다.')
        localStorage.removeItem("jwtToken")
        headerStore.assignIsNoHeaderPath(true)
        router.push('/member/sign-in')
      }).catch(error => {
        console.error("로그아웃 실패:", error)
    })
  }
}
</script>

<style scoped>
@import '@/assets/color.css';
@import '@/assets/font.css';

@import '@/assets/css/member/my-page-supporter.css';
@import '@/assets/css/member/my-page.css';
</style>