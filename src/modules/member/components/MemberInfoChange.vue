<template>
  <form action='' id='member-info-change' method='post'>
    <div id='member-info-change-container'>
      <div class='input-change-info-wrapper'>
        <div>
          <label for='input-change-name'>이름</label>
        </div>
        <input type='text' id='input-change-name' class='input-change' v-model='memberName' required/>
      </div>
      <div class='input-change-info-wrapper'>
        <div>
          <label for='input-change-origin-password'>기존 비밀번호</label>
        </div>
        <input type='password' id='input-change-origin-password' class='input-change' />
      </div>
      <div class='input-change-info-wrapper'>
        <div>
          <label for='input-change-new-password'>새 비밀번호</label>
        </div>
        <input type='password' id='input-change-new-password' class='input-change' />
      </div>
      <div class='input-change-info-wrapper'>
        <div>
          <label for='input-change-phone-no'>전화번호</label>
        </div>
        <input type='text' id='input-change-phone-no' class='input-change' v-model='memberPhoneNo' required/>
      </div>
      <div>
        <button type='submit' id='btn-member-info-change'>수정하기</button>
      </div>
    </div>
  </form>
</template>

<script setup lang='ts'>
import type { MemberInfoForQueryResponse } from '../../../services/types/MemberResponse'
import { getMemberInfo } from '../../../services/api/MemberService'
import { ref, onMounted } from 'vue'

const memberName = ref('');
const memberPhoneNo = ref('');
onMounted(() => {
  getMemberInfo()
    .then(response => {
      memberName.value = response.memberName;
      memberPhoneNo.value = response.memberPhoneNumber;
    }).catch(error => {
      console.error('멤버 수정전 정보 조회 실패')
  })
})
</script>

<style>
@import '@/assets/color.css';
@import '@/assets/font.css';

#member-info-change-container {
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-top: 5%;
  padding-left: 5%;
}

.input-change {
  border: none;
  border-bottom: 1px solid var(--icon-color);
  height: 30px;
  width: 400px;
}

#btn-member-info-change {
  border: none;
  padding: 10px 30px;
  background-color: var(--main-color);
  border-radius: 5px;
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
</style>