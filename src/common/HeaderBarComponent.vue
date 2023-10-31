<template>
  <div id='header-bar'>

    <div id='main-bar'>
      <RouterLink to='/'>
        <div class='lotdiz-logo'>lotdiz</div>
      </RouterLink>

      <div class='nav-bar'>
        <div class='dropdown-container'>
          <div class='category-bar-logo' @click='toggleDropdown'>
            <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 31 30' fill='none'>
              <path
                d='M27.1667 23.3333H3.83333C1.995 23.3333 0.5 24.8283 0.5 26.6667C0.5 28.505 1.995 30 3.83333 30H27.1667C29.005 30 30.5 28.505 30.5 26.6667C30.5 24.8283 29.005 23.3333 27.1667 23.3333ZM27.1667 11.6667H3.83333C1.995 11.6667 0.5 13.1617 0.5 15C0.5 16.8383 1.995 18.3333 3.83333 18.3333H27.1667C29.005 18.3333 30.5 16.8383 30.5 15C30.5 13.1617 29.005 11.6667 27.1667 11.6667ZM27.1667 0H3.83333C1.995 0 0.5 1.495 0.5 3.33333C0.5 5.17167 1.995 6.66667 3.83333 6.66667H27.1667C29.005 6.66667 30.5 5.17167 30.5 3.33333C30.5 1.495 29.005 0 27.1667 0Z'
                fill='white' />
            </svg>
          </div>
          <transition name='fade'>
            <div v-if='showDropdown' class='category-bar' @mouseleave='hideDropdown'>
              <RouterLink class='category' v-for='category in categories' :key='category.id'
                          @click='selectCategory(category)'
                          :to="{name: 'projectListByCategory', query: {category: category.name}}">
                {{ category.name }}
              </RouterLink>
            </div>
          </transition>
        </div>

        <RouterLink to='/'>
          <div class='header-btn' :class="{'active' : currentPath === '/' }">롯드+</div>
        </RouterLink>
        <RouterLink to='/lotdeal'>
          <div class='header-btn' :class="{'active' : currentPath === '/lotdeal'}">롯딜</div>
        </RouterLink>
      </div>
    </div>
    <div id='member-bar'>
      <RouterLink v-if='jwtToken !== null' to='/notifications'>
        <div class='notification-number-box'>
          <svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'>
            <path
              d='M13.8951 2.18706C14.1856 1.54087 14.6839 0.987482 15.3262 0.597826C15.9685 0.208169 16.7254 0 17.5 0C18.2746 0 19.0315 0.208169 19.6738 0.597826C20.3161 0.987482 20.8144 1.54087 21.1049 2.18706C23.9802 2.89868 26.5165 4.44004 28.3241 6.57443C30.1317 8.70882 31.1108 11.3182 31.1109 14.0018V22.2207L34.673 27.0292C34.8684 27.2927 34.9806 27.599 34.9977 27.9154C35.0148 28.2319 34.9361 28.5465 34.77 28.8258C34.604 29.1052 34.3567 29.3387 34.0547 29.5015C33.7528 29.6642 33.4073 29.7502 33.0553 29.7502H24.2374C24.0033 31.2079 23.1934 32.541 21.956 33.5052C20.7187 34.4693 19.1367 35 17.5 35C15.8633 35 14.2813 34.4693 13.044 33.5052C11.8066 32.541 10.9967 31.2079 10.7626 29.7502H1.9447C1.59268 29.7502 1.24725 29.6642 0.945258 29.5015C0.643267 29.3387 0.396048 29.1052 0.229977 28.8258C0.063905 28.5465 -0.0147887 28.2319 0.00229022 27.9154C0.0193692 27.599 0.13158 27.2927 0.326952 27.0292L3.88912 22.2207V14.0018C3.88912 8.3604 8.12793 3.60791 13.8951 2.18706ZM14.7506 29.7502C14.9514 30.2622 15.3238 30.7057 15.8164 31.0193C16.309 31.333 16.8975 31.5014 17.501 31.5014C18.1044 31.5014 18.693 31.333 19.1856 31.0193C19.6782 30.7057 20.0505 30.2622 20.2513 29.7502H14.7487H14.7506ZM17.5 5.25273C14.9215 5.25273 12.4487 6.17451 10.6255 7.81528C8.80222 9.45605 7.77794 11.6814 7.77794 14.0018V22.7509C7.77803 23.0965 7.66436 23.4345 7.45128 23.722L5.57881 26.2505H29.4192L27.5468 23.722C27.3344 23.4343 27.2214 23.0964 27.2221 22.7509V14.0018C27.2221 11.6814 26.1978 9.45605 24.3745 7.81528C22.5513 6.17451 20.0784 5.25273 17.5 5.25273Z'
              fill='black' fill-opacity='0.8' />
          </svg>
          <div class='noti-number' v-if='notification >0'>
            <div class='number-box'>
              <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'>
                <circle cx='12.5' cy='12.5' r='12.5' fill='#EF3232' />
              </svg>
            </div>
            <div class='number'>
              <div class='text'>{{ notification }}</div>
            </div>
          </div>
        </div>
      </RouterLink>
      <RouterLink v-if='jwtToken !== null' to='/member/my-page'>
        <div class='sign-btn'>마이페이지</div>
      </RouterLink>
      <RouterLink v-if='jwtToken === null' to='/member/sign-in'>
        <div class='sign-btn'>로그인</div>
      </RouterLink>
      <RouterLink v-if='jwtToken === null' to='/member/sign-up'>
        <div class='sign-btn'>회원가입</div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onBeforeMount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getNumberOfNotification } from '@/services/api/NotificationService'


const jwtToken = ref(localStorage.getItem('jwtToken'))

const route = useRoute()
const notification = ref(0)
const currentPath = ref<string>('')

const showDropdown = ref<boolean>(false)

const categories = [
  { id: 1, name: '테크' },
  { id: 2, name: '패션' },
  { id: 3, name: '음식' },
  { id: 4, name: '가전' },
  { id: 5, name: '도서' },
  { id: 6, name: '홈리빙' },
  { id: 7, name: '레저' }
]

const selectCategory = (category: any) => {
  if (category != undefined) {
    hideDropdown()
  }
}

const hideDropdown = () => {
  showDropdown.value = false
}

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

onBeforeMount(async () => {
  if(jwtToken !== null) {
    const notificationCnt = await getNumberOfNotification()
    notification.value = notificationCnt['unreadNotificationCount']
  }
})

const checkPath = (path: string) => {
  if (path === '/lotdeal') {
    currentPath.value = '/lotdeal'
  } else {
    currentPath.value = '/'
  }
}

onMounted(() => {
  checkPath(route.path)
})

watch(() => route.path, (newPath) => {
  checkPath(newPath)
})

</script>

<style scoped>
@import '@/assets/css/header.css';
@import "../assets/css/notification.css";
</style>