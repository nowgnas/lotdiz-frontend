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

        <RouterLink to="/lotdplus"><div class="lotd-plus-btn">롯드+</div></RouterLink> 
        <RouterLink to="/lotdeal"><div class="lotd-plus-btn">롯딜</div></RouterLink>
      </div>
    </div>

    <div id="member-bar">
      <RouterLink to="/"><div class="sign-btn">로그인</div></RouterLink>
      <RouterLink to="/"><div class="sign-btn">회원가입</div></RouterLink>
    </div>

  </div>            
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showDropdown = ref(false);

const categories = [
  {id:1, name: '패션'},
  {id:2, name: '잡화'},
  {id:3, name: '뷰티'},
  {id:4, name: '푸드'},
  {id:5, name: '홈리빙'},
  {id:6, name: '레저 아웃도어'},
  {id:7, name: '가전'},
  {id:8, name: '도서'},
];

const selectCategory = (category) => {
  console.log(`Selected category: ${category.name}`);
  hideDropdown(); // 선택 후에 드롭다운을 숨깁니다.
};

const hideDropdown = () => {
  showDropdown.value = false;
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

</script>

<style>
/* header nav bar */
#header-bar {
  display: flex;
  width: 1430px;
  height: 50px;
  align-items: center;
  gap: 700px;
  border-bottom: 6px solid #97D9D9;
}

#main-bar {
display: flex;
width: 506px;
height: 50px;
align-items: center;
gap: 60px;
flex-shrink: 0
}

.lotdiz-logo {
  display: flex;
  width: 150px;
  height: 50px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  color: #F00;
  text-align: center;
  font-family: Open Sans;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 63px */
}

.nav-bar {
  display: flex;
  width: 296px;
  height: 50px;
  justify-content: center;
  align-items: center;
  gap: 18px;
  flex-shrink: 0;
}
.category-bar-logo {
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: #97D9D9;
}

.lotd-plus-btn {
  display: flex;
  width: 68px;
  height: 50px;
  /* justify-content: center; */
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  color: #000000; /*#4FAFB1;*/
  text-align: center;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 42px */
}

#member-bar {
  display: flex;
  width: 230px;
  height: 50px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
}

.sign-btn {
  display: flex;
  width: 115px;
  height: 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  color: #676C71;
  text-align: center;
  font-family: Open Sans;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 35px */

}

.dropdown-container {
  position: relative;
}

/* category nav bar */
.category-bar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #FFF;

  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 3px solid rgba(204, 204, 204, 0); 
  /* max-height: 150px; */
  overflow-y: auto;
  padding: 5px;
  z-index: 10;

  
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.category {
  display: flex;
  width: 210px;
  height: 50px;
  padding: 0px 13px;
  align-items: center;
  gap: 7px;

  color: #000;
  text-align: center;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 39.2px */

}

#category-bar :hover {
  background-color: #9e9e9e80;  
}

/* 카테고리 메뉴바 */


</style>