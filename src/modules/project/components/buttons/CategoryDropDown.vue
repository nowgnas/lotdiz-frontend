<script setup lang="ts">
import {ref} from "vue";

const isDropdownOpen = ref(false);
const selectedOption = ref(null);
const emit = defineEmits(['category-id']);

const items = ref([
  {id: 1, name: '테크 가전'},
  {id: 2, name: '패션, 잡화'},
  {id: 3, name: '뷰티'},
  {id: 4, name: '홈, 리빙'},
  {id: 5, name: '푸드'},
  {id: 6, name: '레저, 아웃도어'},
  {id: 7, name: '출판'},
  {id: 8, name: '스포츠, 모딜리티'},
  {id: 9, name: '클래스, 컨설팅'},
]);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectOption = (item: any) => {
  selectedOption.value = item.name;
  isDropdownOpen.value = false;
  emit('category-id', item.id);
};
</script>

<template>
  <div>
    <button class="category-dropdown-btn" @click="toggleDropdown">
      <div style="">
        {{ selectedOption || 'Select an option' }}
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
          <path
              d="M11.2523 13.6694L0.285218 1.78894C0.102134 1.59071 0 1.32734 0 1.05347C0 0.779602 0.102134 0.51624 0.285218 0.31801L0.29761 0.305218C0.386366 0.208787 0.4932 0.132001 0.611614 0.0795298C0.730028 0.0270587 0.857546 -1.11952e-07 0.986411 -1.11952e-07C1.11528 -1.11952e-07 1.24279 0.0270587 1.36121 0.0795298C1.47962 0.132001 1.58646 0.208787 1.67521 0.305218L12.0021 11.4928L22.3248 0.305218C22.4135 0.208787 22.5204 0.132001 22.6388 0.0795298C22.7572 0.0270587 22.8847 -1.11952e-07 23.0136 -1.11952e-07C23.1425 -1.11952e-07 23.27 0.0270587 23.3884 0.0795298C23.5068 0.132001 23.6136 0.208787 23.7024 0.305218L23.7148 0.31801C23.8979 0.51624 24 0.779602 24 1.05347C24 1.32734 23.8979 1.59071 23.7148 1.78894L12.7477 13.6694C12.6512 13.7738 12.5352 13.857 12.4067 13.9139C12.2782 13.9707 12.1398 14 12 14C11.8602 14 11.7218 13.9707 11.5933 13.9139C11.4648 13.857 11.3488 13.7738 11.2523 13.6694Z"
              fill="#C4C2C2"/>
        </svg>
      </div>
    </button>
    <ul v-if="isDropdownOpen" class="dropdown">
      <li
          v-for="item in items"
          :key="item.id"
          @click="selectOption(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import "../../../../assets/css/projectregister/CategoryDropDown.css";
</style>