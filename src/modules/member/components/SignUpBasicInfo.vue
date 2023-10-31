<template>
  <form action="" method="post" v-on:submit.prevent="submitForm" id="form-basic-info">
    <div class="sec-content" style="padding-left: 12%">
      <div class="input-wrapper">
        <div class="label-width label-loc-start">
          <label for="input-member-name">이름 <span class="astar-color">*</span> </label>
        </div>
        <div>
          <input type="text" id="input-member-name" v-model="name" />
          <div style="padding-top: 8px">
            <span id="normal-msg" v-if="validateName">1 ~ 10자 이내로 입력해주세요.</span>
          </div>
          <div style="padding-top: 8px">
            <span id="error-msg" v-if="!validateName">최대 10자까지 입력가능합니다.</span>
          </div>
        </div>
      </div>
      <div class="input-wrapper">
        <div class="label-width label-email-loc-start">
          <label for="input-username-1">이메일 <span class="astar-color">*</span> </label>
        </div>
        <div>
          <div id="input-username-wrapper">
            <div id="input-username-sub-wrapper">
              <input type="text" id="input-username-1" v-model="username1" />
              <p>@</p>
              <input type="text" id="input-username-2" v-model="username2" />
            </div>
            <select id="input-select" v-model="selectedOption">
              <option value="direct">직접입력</option>
              <option value="naver.com">naver.com</option>
              <option value="google.com">gmail.com</option>
              <option value="daum.com">daum.net</option>
            </select>
            <div id="btn-double-check" @click="checkDuplicated"><p>중복확인</p></div>
          </div>
          <div>
            <span id="error-msg" v-if="!validateUsername">올바르지 않은 이메일 형식입니다.</span>
          </div>
          <div><span id="right-msg" v-if="validateUsername">올바른 이메일 형식입니다.</span></div>
        </div>
      </div>
      <div class="input-wrapper">
        <div class="label-width label-loc-start">
          <label for="input-member-phone-no">전화번호 <span class="astar-color">*</span> </label>
        </div>
        <div>
          <input
            type="text"
            id="input-member-phone-no"
            v-model="memberPhoneNumber"
            maxlength="11"
            pattern="[0-9]+"
          />
          <div style="padding-top: 8px">
            <span id="normal-msg">'-' 빼고 숫자만 입력</span>
          </div>
        </div>
      </div>
      <div class="input-wrapper">
        <div class="label-width label-loc-start">
          <label for="input-member-password">비밀번호 <span class="astar-color">*</span> </label>
        </div>
        <div>
          <input type="password" id="input-member-password" v-model="password" />
          <div style="padding-top: 8px">
            <span id="error-msg" v-if="!validatePassword"
              >영문자, 숫자, 특수문자 모두 포함하여 8 ~ 16자 이내로 작성해주세요.</span
            >
          </div>
          <div style="padding-top: 8px">
            <span id="right-msg" v-if="validatePassword"
              ><font-awesome-icon :icon="['fas', 'key']" /> 안전한 비밀번호입니다.</span
            >
          </div>
        </div>
      </div>
      <div class="input-wrapper">
        <div class="label-width label-loc-start">
          <label for="input-member-password-check"
            >비밀번호 확인 <span class="astar-color">*</span>
          </label>
        </div>
        <div>
          <input type="password" id="input-member-password-check" v-model="passwordCheck" />
          <div style="padding-top: 8px">
            <span id="error-msg" v-if="!validatePasswordCheck">비밀번호가 일치하지 않습니다.</span>
          </div>
          <div style="padding-top: 8px">
            <span id="right-msg" v-if="validatePasswordCheck">비밀번호가 일치합니다.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="sec-btn">
      <div class="btn-prev">
        <router-link to="/member/sign-up"
          ><button @click="decreaseActiveNo">이전</button></router-link
        >
      </div>
      <div class="btn-next">
        <button type="submit">다음</button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useMemberStore } from '../../stores/member'
import { computed, ref, watch, nextTick } from 'vue'
import { getIsDulicatedForCheck } from '@/services/api/MemberService'
import router from '../../../router/index'

const memberStore = useMemberStore()

const name = ref('')
const username1 = ref('')
const username2 = ref('')
const selectedOption = ref('직접입력')
const memberPhoneNumber = ref('')
const password = ref('')
const passwordCheck = ref('')

const isDuplicated = ref(true);

watch(selectedOption, (newOption) => {
  if (newOption === 'direct') {
    username2.value = ''
  } else {
    username2.value = newOption
  }
})

const validateName = computed((): boolean => {
  return name.value.length <= 10
})

// email 형식 check 함수
const isUsernameValid = (username1: string, username2: string): boolean => {
  const totalEmail = username1 + '@' + username2
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return expression.test(totalEmail)
}

const validateUsername = computed((): boolean => {
  return isUsernameValid(username1.value, username2.value)
})

const checkDuplicated = () => {
  const fullUsername = username1.value + '@' + username2.value
  getIsDulicatedForCheck(fullUsername)
    .then((data) => {
      if (!data) {
        alert('해당 이메일을 사용할 수 있습니다.')
        isDuplicated.value = false;
      } else {
        alert('해당 이메일을 사용할 수 없습니다.')
      }
    })
    .catch((error) => {
      console.error(error)
    })
}

const isPasswordValid = (password: string): boolean => {
  const expression: RegExp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!*_])[A-Za-z\d@#$%^&+=!*_]{8,16}$/
  return expression.test(password)
}

const validatePassword = computed((): boolean => {
  return isPasswordValid(password.value)
})

const validatePasswordCheck = computed((): boolean => {
  if (passwordCheck.value === '') {
    return false
  }
  return password.value === passwordCheck.value
})

const decreaseActiveNo = () => {
  memberStore.decreaseActiveNo()
}

const submitForm = async (event: any) => {
  event.preventDefault()
  event.stopImmediatePropagation()
  await nextTick()
  const memberNameEle = document.getElementById('input-member-name') as HTMLInputElement | null
  const username1Ele = document.getElementById('input-username-1') as HTMLInputElement | null
  const username2Ele = document.getElementById('input-username-2') as HTMLInputElement | null
  const memberPasswordEle = document.getElementById(
    'input-member-password'
  ) as HTMLInputElement | null
  const memberPasswordCheckEle = document.getElementById(
    'input-member-password-check'
  ) as HTMLInputElement | null

  if (memberNameEle?.value === '') {
    alert('이름을 입력해주세요.')
    memberNameEle.focus()
    return
  }

  if (username1Ele?.value === '' || username2Ele?.value === '') {
    alert('이메일을 입력해주세요.')
    username1Ele?.focus()
    return
  }

  if (memberPasswordEle?.value === '') {
    alert('비밀번호를 입력해주세요.')
    memberPasswordEle.focus()
    return
  }

  if (memberPasswordCheckEle?.value === '') {
    alert('비밀번호를 한번 더 입력해주세요.')
    memberPasswordCheckEle.focus()
    return
  }

  if (
    validateName.value &&
    validateUsername.value &&
    validatePassword.value &&
    validatePasswordCheck.value
  ) {
    if (isDuplicated.value) {
      alert('이메일 중복확인을 해주세요.')
      return
    }
    memberStore.assignMemberName(name.value)
    memberStore.assignUsername(username1.value + '@' + username2.value)
    memberStore.assignMemberPhoneNumber(memberPhoneNumber.value)
    memberStore.assignMemberPassword(password.value)

    memberStore.increaseActiveNo()
    await router.push('/member/sign-up/email-auth')
  } else {
    alert('형식에 맞게 입력해주세요.')
    return
  }
}
</script>

<style scoped>
@import '@/assets/css/member/sign-up-common.css';

@import '@/assets/css/member/sign-up-basic-info.css';
</style>
