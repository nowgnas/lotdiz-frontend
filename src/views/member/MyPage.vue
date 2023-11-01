<template>
  <div style='height:100%;display:flex;flex-direction:column;'>
    <div id='sub-header-mypage'>
      <div id='tab-supporter'>
        <div @click='activeSupporter'>
          <router-link to='/member/my-page'>서포터</router-link>
        </div>
      </div>
      <div id='tab-maker'>
        <div @click='activeMaker'>
          <router-link to='/member/my-page/maker'>메이커</router-link>
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

onMounted(() => {
  getMemberInfo()
    .then(response => {
      memberName.value = response.memberName
    }).catch(error => {
      console.error("멤버 정보 조회 실패:", error)
  })
})

const activeSupporter = (event: any) => {
  const activeEle = document.getElementById('tab-supporter') as HTMLInputElement | null
  if (activeEle !== null) {
    activeEle.style.backgroundColor = 'white';
  }
  const unactiveEle = document.getElementById('tab-maker') as HTMLInputElement | null
  if (unactiveEle !== null) {
    unactiveEle.style.backgroundColor = '#C4C4C4';
  }
}

const activeMaker = (event: any) => {
  const activeEle = document.getElementById('tab-maker') as HTMLInputElement | null
  if (activeEle !== null) {
    activeEle.style.backgroundColor = 'white';
  }
  const unactiveEle = document.getElementById('tab-supporter') as HTMLInputElement | null
  if (unactiveEle !== null) {
    unactiveEle.style.backgroundColor = '#C4C4C4';
  }
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