<template>
  <div id="header-bar">
    
    <div id="main-bar">
      <RouterLink to="/"><div class="lotdiz-logo">lotdiz</div></RouterLink>
      
      <div class="nav-bar">
        <div class="dropdown-container">
          <div class="category-bar-logo" @click="toggleDropdown" >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 31 30" fill="none">
              <path d="M27.1667 23.3333H3.83333C1.995 23.3333 0.5 24.8283 0.5 26.6667C0.5 28.505 1.995 30 3.83333 30H27.1667C29.005 30 30.5 28.505 30.5 26.6667C30.5 24.8283 29.005 23.3333 27.1667 23.3333ZM27.1667 11.6667H3.83333C1.995 11.6667 0.5 13.1617 0.5 15C0.5 16.8383 1.995 18.3333 3.83333 18.3333H27.1667C29.005 18.3333 30.5 16.8383 30.5 15C30.5 13.1617 29.005 11.6667 27.1667 11.6667ZM27.1667 0H3.83333C1.995 0 0.5 1.495 0.5 3.33333C0.5 5.17167 1.995 6.66667 3.83333 6.66667H27.1667C29.005 6.66667 30.5 5.17167 30.5 3.33333C30.5 1.495 29.005 0 27.1667 0Z" fill="white"/>
            </svg>
          </div>
          <transition name="fade">
            <div v-if="showDropdown" class="category-bar"  @mouseleave="hideDropdown">
              <RouterLink  class="category" v-for="category in categories" :key="category.id" @click="selectCategory(category)" :to="{name: 'projectListByCategory', query: {category: category.name}}">
                {{ category.name }}
              </RouterLink>
            </div>
          </transition>
        </div>

        <RouterLink to="/"><div class='header-btn' :class="{'active' : currentPath === '/' }">롯드+</div></RouterLink>
        <RouterLink to="/lotdeal"><div class="header-btn" :class="{'active' : currentPath === '/lotdeal'}" >롯딜</div></RouterLink>
      </div>
    </div>

    <div id="member-bar">
        <RouterLink v-if='jwtToken !== null' to='/member/my-page'><div class="sign-btn">마이페이지</div></RouterLink>
        <RouterLink v-if='jwtToken === null' to="/member/sign-in"><div class="sign-btn">로그인</div></RouterLink>
        <RouterLink v-if='jwtToken === null' to="/member/sign-up"><div class="sign-btn">회원가입</div></RouterLink>
    </div>

  </div>            
</template>

<script setup lang="ts">
import { watch, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const jwtToken: string = ref(localStorage.getItem("jwtToken"));

const route = useRoute();
const currentPath = ref<string>('');

const showDropdown = ref<boolean>(false);

const categories = [
  {id:1, name: '테크'},
  {id:2, name: '패션'},
  {id:3, name: '음식'},
  {id:4, name: '가전'},
  {id:5, name: '도서'},
  {id:6, name: '홈리빙'},
  {id:7, name: '레저'},
];

const selectCategory = (category: any) => {
  if (category != undefined) {
    hideDropdown(); 
  }
};

const hideDropdown = () => {
  showDropdown.value = false;
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const checkPath = (path: string) => {
  if (path === '/lotdeal') {
    currentPath.value = '/lotdeal'
  } else {
    currentPath.value = '/'
  }
}

onMounted(() => {
  checkPath(route.path);
})

watch(() => route.path, (newPath) => {
  checkPath(newPath);
})

</script>

<style>
@import '@/assets/css/header.css';


</style>