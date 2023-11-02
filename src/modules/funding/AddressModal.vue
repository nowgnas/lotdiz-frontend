<template>
  <div>
    <input class="btn-style" type="button" value="배송지 선택" @click="openModal" />

    <!-- 컴포넌트 MyModal -->
    <MyModal v-if="modal" @close="closeModal">
      <!-- default 슬롯 콘텐츠 -->
      <p style="text-align: center">배송지 선택</p>
      <hr />
      <div>
        <div v-for="(address, index) in addressList" :key="index" class="address-card">
          <div class="address-card-name">{{ address.name }}</div>
          <div v-if="address.isDefault" class="address-default">
            <div class="address-default-layout">기본 배송지</div>
          </div>
          <div class="address-details">{{ address.address }}</div>
          <div class="address-details">{{ address.details }}</div>
          <div class="address-details">{{ address.phone }}</div>
          <div class="address-details">{{ address.request }}</div>
          <div class="address-btn-layout">
            <div class="address-btn-modify">
              <div style="text-align: center; color: blue" @click="editAddress(index)">수정</div>
            </div>
            <div class="address-btn-select">
              <div style="text-align: center; color: white" @click="selectAddress(index)">선택</div>
            </div>
          </div>
        </div>

        <div class="new-address">
          <div style="color: #466fd8; pointer: default" @click="addAddress">+ 배송지 추가</div>
        </div>
      </div>
    </MyModal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import MyModal from './MyModal.vue'

interface Address {
  name: string
  isDefault: boolean
  address: string
  details: string
  phone: string
  request: string
}

const modal = ref(false)
const message = ref('')
const addressList = ref<Address[]>([
  {
    name: '이름1',
    isDefault: true,
    address: '경상북도 구미시 인동22길 22',
    details: '305호',
    phone: '010-1234-5678',
    request: '문 앞'
  },
  {
    name: '이름2',
    isDefault: false,
    address: '서울특별시 강동구 올림픽로22길 23',
    details: '1101호',
    phone: '010-5678-1234',
    request: '경비실'
  }
])

const emit = defineEmits(['addAddress'])

const openModal = () => {
  modal.value = true
}

const closeModal = () => {
  modal.value = false
}

const doSend = () => {
  if (message.value.length > 0) {
    alert(message.value)
    message.value = ''
    closeModal()
  } else {
    alert('메시지를 입력해주세요.')
  }
}

const addAddress = () => {
  modal.value = false
  emit('addAddress', true)
}

const editAddress = (index: number) => {
  // TODO 주소 수정
}

const selectAddress = (index: number) => {
  // TODO 주소 선택
}
</script>

<style scoped>
.btn-style {
  width: 260px;
  height: 70px;
  font-size: 1.4rem;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid black;
  background: #dad8d8;
}

.btn-style:hover {
  background-color: #b6b3b3;
}

.address-card {
  margin: 10px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid rgba(200, 200, 200, 0.32);
}

.address-card-name {
  display: flex;
  width: auto;
  height: 56px;
  padding: 10px;
  align-items: center;
}

.address-default {
  display: flex;
  width: auto;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
}

.address-details {
  margin: 10px;
}

.address-default-layout {
  display: flex;
  padding: 8px 25px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 1px solid #000;
  background: white;
}

.address-btn-layout {
  display: flex;
  align-items: flex-start;
  gap: 230px;
  margin: 10px;
}

.address-btn-modify {
  display: flex;
  width: 83px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid gray;
}

.address-btn-select {
  display: flex;
  width: 83px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #466fd8;
}

.new-address {
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  width: auto;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid #c8c8c8;
  pointer: default;
}
</style>
