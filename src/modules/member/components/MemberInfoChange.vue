<template>
  <form action='' id='member-info-change' v-on:submit.prevent='submitForm' method='post'>
    <div id='member-info-change-container'>
      <div id='sec-input-change'>
        <div class='input-change-info-wrapper'>
          <div>
            <label for='input-change-name'>이름 <span class='sign-necessary'>*</span></label>
          </div>
          <input type='text' id='input-change-name' class='input-change' v-model='memberName' required />
        </div>
        <div class='input-change-info-wrapper'>
          <div>
            <label for='input-change-origin-password'>기존 비밀번호 <span class='sign-necessary'>*</span></label>
          </div>
          <div>
            <input type='password' id='input-change-origin-password' class='input-change' v-model='originPassword' required />
            <div class='msg-necessary'>회원 정보 수정을 위해, 기존 비밀번호를 입력해주세요.</div>
          </div>
        </div>
        <div class='input-change-info-wrapper'>
          <div>
            <label for='input-change-new-password'>새 비밀번호</label>
          </div>
          <input type='password' id='input-change-new-password' class='input-change' v-model='newPassword' />
        </div>
        <div class='input-change-info-wrapper'>
          <div>
            <label for='input-change-phone-no'>전화번호 <span class='sign-necessary'>*</span></label>
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
import { checkOriginPasswordForChange, getMemberInfo, putMemberInfoForChange } from '@/services/api/MemberService'
import { ref, onMounted } from 'vue'
import { toast, type ToastOptions} from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const options = {
  transition: toast.TRANSITIONS.BOUNCE,
  position: toast.POSITION.TOP_RIGHT,
  pauseOnHover: true,
  progress: undefined,
  autoClose: 3000,
  toastStyle: {
    fontWeight: 'bold'
  }
} as ToastOptions;

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
    console.error('멤버 수정전 정보 조회 실패:', error)
  })
})

const submitForm = (event: any) => {
  event.preventDefault()
  const memberInfoForChangeRequest: MemberInfoForChangeRequest = {
    memberName: memberName.value,
    originPassword: originPassword.value,
    newPassword: newPassword.value,
    memberPhoneNumber: memberPhoneNo.value
  }

  checkOriginPasswordForChange(originPassword.value)
    .then(response => {
      if(response) {
        putMemberInfoForChange(memberInfoForChangeRequest)
          .then(response => {
            alert('회원정보가 성공적으로 수정되었습니다.')
            location.reload()
          }).catch(error => {
          toast.error(error.toString(), options as ToastOptions);
        })
      } else {
        toast.error('기존 비밀번호가 맞지 않습니다.', options as ToastOptions);
        return
      }
    }).catch(error => {
    toast.error(error.toString(), options as ToastOptions);
  })
}
</script>

<style scoped>
@import '@/assets/color.css';
@import '@/assets/font.css';

@import '@/assets/css/member/member-info-change.css';
</style>