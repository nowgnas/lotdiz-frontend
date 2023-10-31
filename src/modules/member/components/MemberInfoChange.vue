<template>
  <form action='' id='member-info-change' v-on:submit.prevent='submitForm' method='post'>
    <div id='member-info-change-container'>
      <div id='sec-input-change'>
        <div class='input-change-info-wrapper'>
          <div>
            <label for='input-change-name'>이름</label>
          </div>
          <input type='text' id='input-change-name' class='input-change' v-model='memberName' required />
        </div>
        <div class='input-change-info-wrapper'>
          <div>
            <label for='input-change-origin-password'>기존 비밀번호</label>
          </div>
          <input type='password' id='input-change-origin-password' class='input-change' v-model='originPassword' />
        </div>
        <div class='input-change-info-wrapper'>
          <div>
            <label for='input-change-new-password'>새 비밀번호</label>
          </div>
          <input type='password' id='input-change-new-password' class='input-change' v-model='newPassword' />
        </div>
        <div class='input-change-info-wrapper'>
          <div>
            <label for='input-change-phone-no'>전화번호</label>
          </div>
          <input type='text' id='input-change-phone-no' class='input-change' v-model='memberPhoneNo' required />
        </div>
      </div>
      <div id='sec-unchanged-n-btn'>
        <div id='input-unchanged-wrapper'>
          <div>
            <div>
              <label for='input-unchanged-email'>이메일</label>
            </div>
            <input type='text' id='input-unchanged-email' v-model='memberEmail' readonly>
          </div>
          <div id='text-unchanged-createdAt-wrapper'>
            <div>
              <label for='text-unchanged-createdAt' id='sub-title-unchanged-createdAt'><p>생성날짜</p></label>
            </div>
            <div id='text-unchanged-createdAt'>{{ createdAt }}</div>
          </div>
        </div>
        <div id='bt-member-info-change-wrapper'>
          <input type='submit' id='btn-member-info-change' value='수정하기'>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang='ts'>
import type { MemberInfoForChangeRequest } from '@/services/types/MemberRequest'
import { getMemberInfo, putMemberInfoForChange } from '@/services/api/MemberService'
import { ref, onMounted } from 'vue'

const memberName = ref('')
const memberPhoneNo = ref('')
const memberEmail = ref('')
const originPassword = ref('')
const newPassword = ref('')
const createdAt = ref('')

onMounted(() => {
  getMemberInfo()
    .then(response => {
      memberName.value = response.memberName
      memberPhoneNo.value = response.memberPhoneNumber
      memberEmail.value = response.memberEmail
      createdAt.value = response.createdAt
      createdAt.value = createdAt.value.replace("T", " ")
    }).catch(error => {
    console.error('멤버 수정전 정보 조회 실패')
  })
})

const submitForm = (event: any) => {
  event.preventDefault()
  const memberInfoForChangeRequest: MemberInfoForChangeRequest = {
    memberName: memberName.value,
    originPassword: 'woo1234@',
    newPassword: 'woo1234@',
    memberPhoneNumber: memberPhoneNo.value
  }
  putMemberInfoForChange(memberInfoForChangeRequest)
    .then(response => {
      alert('회원 정보 수정 완료되었습니다.')
    }).catch(error => {
    console.error('회원 정보 수정 실패:', error)
  })

}
</script>

<style scoped>
@import '@/assets/color.css';
@import '@/assets/font.css';

@import '@/assets/css/member/member-info-change.css';
</style>