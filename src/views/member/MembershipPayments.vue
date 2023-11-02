<template>
  <div class='main-content-container'>
    <div id='membership-promotion-content'>
      <div id='honors-title'>롯드 오너스</div>
      <div id='membership-payments-banner' @click='scrollToPriceTicket'>
        <p id='banner-membership-text'>
          <font-awesome-icon :icon="['fas', 'trophy']" />
          {{ memberName }}님 롯드오너스로<br />
          할인 및 적립 혜택 DEAL하세요!
        </p>
        <div id='btn-membership-join'>
          롯드 오너스 가입하기
          <span class='icon-arrow'>
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
          </span>
        </div>
      </div>
    </div>
    <div id='sec-intro'>
      <div id='intro-title'>롯드 오너스란?</div>
      <div id='intro-sub-title-container'>
        <div class='intro-sub-title-wrapper'>
          <div class='intro-sub-icon'>
            <p>
              <font-awesome-icon :icon="['fas', 'turn-up']" />
            </p>
          </div>
          <div class='intro-sub-title'>파격적인 할인율</div>
          <div>3%, 5%</div>
        </div>
        <div class='intro-sub-title-wrapper'>
          <div class='intro-sub-icon'>
            <p>
              <font-awesome-icon :icon="['fas', 'circle-dollar-to-slot']" />
            </p>
          </div>
          <div class='intro-sub-title'>포인트 적립</div>
          <div>1%, 2%</div>
        </div>
        <div class='intro-sub-title-wrapper'>
          <div class='intro-sub-icon'>
            <p>
              <font-awesome-icon :icon="['fas', 'arrow-trend-down']" />
            </p>
          </div>
          <div class='intro-sub-title'>저가형 멤버십</div>
          <div>연 6,900원, 9,900원</div>
        </div>
      </div>
    </div>
    <div class='box-container'>
      <div id='price-box'>
        <div id='price-box-text'>1년동안<br>펀딩 프렌즈 6,900원,<br>펀딩 파트너 9,900원</div>
        <div id='price-ticket-wrapper'>
          <div class='price-ticket' @click='readyForPaymentsOfFundingFriends'>
            <font-awesome-icon :icon="['fas', 'comment']" size='xl' />
            6,900원
          </div>
          <div class='price-ticket' @click='readyForPaymentsOfFundingPartner'>
            <font-awesome-icon :icon="['fas', 'comment']" size='xl' />
            9,900원
          </div>
        </div>
      </div>
      <div id='membership-type-desc-box'>
        <div class='honors-type'>
          <font-awesome-icon :icon="['fas', 'users']" />
          <div class='honors-type-text'>펀딩 프렌즈</div>
          <div class='honors-type-desc'>
            실제 결제 금액의<br>
            1% 포인트 적립<br><br>
            실제 결제 금액의<br>
            3% 할인
          </div>
        </div>
        <div class='honors-type'>
          <font-awesome-icon :icon="['fas', 'people-group']" />
          <div class='honors-type-text'>펀딩 파트너</div>
          <div class='honors-type-desc'>
            실제 결제 금액의<br>
            2% 포인트 적립<br><br>
            실제 결제 금액의<br>
            5% 할인
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import type { MembershipInfoForJoinRequest } from '@/services/types/MemberRequest'
import { postMembershipInfoForJoin, getMemberInfo } from '@/services/api/MemberService'

const memberName = ref('')

onMounted(() => {
  getMemberInfo()
    .then(response => {
      memberName.value = response.memberName
    }).catch(error => {
    console.error('회원 정보 조회 실패:', error)
  })
})

const sendReadyRequestOfMembershipPayments = (membershipInfoForJoinRequest: MembershipInfoForJoinRequest) => {
  const response: Promise<string> = postMembershipInfoForJoin(membershipInfoForJoinRequest)
  response.then(data => {
    const redirectUrl = data
    window.open(redirectUrl, '멤버십 결제 QR 코드', 'top=10, left=10, width=500, height=450, status=no, menubar=no, toolbar=no, resizable=no')
  }).catch(error => {
    console.error('오류발생: ', error)
  })
}

const readyForPaymentsOfFundingFriends = () => {
  if (confirm('멤버십 가입을 위한 결제 코드로 이동하시겠습니까?')) {
    const fundingFriendsJoinRequest: MembershipInfoForJoinRequest = {
      membershipPolicyId: 1,
      itemName: '펀딩 프렌즈',
      totalAmount: '6900',
      taxFreeAmount: '0'
    }
    sendReadyRequestOfMembershipPayments(fundingFriendsJoinRequest)
  } else {
    return
  }
}

const readyForPaymentsOfFundingPartner = () => {
  if (confirm('멤버십 가입을 위한 결제 코드로 이동하시겠습니까?')) {
    const fundingPartnerJoinRequest: MembershipInfoForJoinRequest = {
      membershipPolicyId: 2,
      itemName: '펀딩 파트너',
      totalAmount: '9900',
      taxFreeAmount: '0'
    }
    sendReadyRequestOfMembershipPayments(fundingPartnerJoinRequest)
  } else {
    return
  }
}

const scrollToPriceTicket = () => {
  window.scrollTo({ top: 1200, behavior: 'smooth' })
}
</script>

<style scoped>
@import '@/assets/color.css';
@import '@/assets/font.css';

@import '@/assets/css/member/membership-payments.css';
</style>
