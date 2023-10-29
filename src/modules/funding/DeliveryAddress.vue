<template>
  <div class="delivery-container">
    <div class="delivery-info-header">
      <div class="delivery-info-header-font">받는 사람 정보</div>
    </div>
    <div class="delivery-info-content">
      <div class="delivery-info-item">
        <div class="delivery-info-item-left">이름</div>
        <div class="delivery-info-item-right">
          <input class="input-style" name="name" placeholder="ex) 홍길동 " required type="text"/>
        </div>
      </div>
      <div class="delivery-info-item">
        <div class="delivery-info-item-left">전화번호</div>
        <div class="delivery-info-item-right">
          <input
              class="input-style"
              name="phone"
              placeholder="ex) 01012345678"
              required
              type="text"
          />
        </div>
      </div>
      <div class="delivery-info-item">
        <div class="delivery-info-item-address-title">주소</div>
        <div class="delivery-info-item-address-button">
          <AddressModal @addAddress="openPostcode"/>
        </div>
      </div>
    </div>

    <div style="display: flex; width: 810px; align-items: center; gap: 31px">
      <div style="display: flex; align-items: flex-start; margin: 30px 0 30px 85px">
        <input name="isDefaultAddress" style="width: 25px; height: 25px" type="checkbox"/>
        <div style="margin-left: 30px; font-size: 1.2rem">기본 배송지로 선택</div>
      </div>
    </div>
    <div class="delivery-info-content">
      <div class="delivery-info-item">
        <div class="delivery-info-item-left">우편번호</div>
        <div class="delivery-info-item-right">
          <input v-model="zipcode" class="input-style" readonly type="text"/>
        </div>
      </div>
      <div class="delivery-info-item">
        <div class="delivery-info-item-left">도로명주소</div>
        <div class="delivery-info-item-right">
          <input v-model="address" class="input-style" readonly type="text"/>
        </div>
      </div>
      <div class="delivery-info-item">
        <div class="delivery-info-item-left">상세주소</div>
        <div class="delivery-info-item-right">
          <input
              v-model="addressDetail"
              class="input-style"
              placeholder="ex) 101호 "
              required
              type="text"
          />
        </div>
      </div>
      <div class="delivery-info-item">
        <div class="delivery-info-item-left">배송 시 요청사항</div>
        <div class="delivery-info-item-right">
          <input class="input-style" name="request" placeholder="집 앞에 놓아주세요." type="text"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddressModal from './AddressModal.vue'
import {ref} from 'vue'

export default {
  created() {
    var scripts = ['//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js']
    scripts.forEach((script) => {
      let tag = document.createElement('script')
      tag.setAttribute('src', script)
      document.head.appendChild(tag)
    })
  },
  setup() {
    const zipcode = ref('')
    const address = ref('')
    const addressDetail = ref('')
    let isNewAddress = false

    const openPostcode = (isOpen) => {
      isNewAddress = isOpen
      new window.daum.Postcode({
        oncomplete: function (data) {
          console.log(data.zonecode)
          console.log(typeof data.zonecode)
          address.value = data.address
          zipcode.value = data.zonecode
          console.log(zipcode.value)
        }
      }).open()
    }

    return {
      zipcode,
      address,
      addressDetail,
      openPostcode
    }
  },
  components: {
    AddressModal
  }
}
</script>

<style>
.delivery-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.delivery-info-header {
  display: flex;
  align-items: center;
  align-self: stretch;
}

.delivery-info-header-font {
  display: flex;
  text-align: left;
  align-items: center;
  color: black;
  font-size: 20px;
  font-weight: bold;
}

.delivery-info-content {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  align-self: stretch;
}

.delivery-info-item {
  display: flex;
  align-items: flex-start;
  gap: 50px;
}

.delivery-info-item-left {
  display: flex;
  font-size: 1rem;
  width: 300px;
  height: 30px;
  flex-direction: column;
  justify-content: center;
}

.delivery-info-item-right {
  display: flex;
  justify-content: center;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #c8c8c8;
}

.input-style {
  width: 300px;
  height: 30px;
  border-radius: 10px;
}

.delivery-info-item-address-title {
  display: flex;
  font-size: 1.5rem;
  width: 260px;
  height: 70px;
  flex-direction: column;
  justify-content: center;
}

.delivery-info-item-address-button {
  display: flex;
  justify-content: center;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #c8c8c8;
}

.btn-style {
  width: 260px;
  height: 70px;
  font-size: 1.4rem;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid black;
  background: white;
}
</style>
