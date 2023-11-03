<template>
  <div>
    <div class='card-container'>
      <div>
        <div class='card-body' id='point-card'>
          <div class='card-icon-text-wrapper'>
            <svg xmlns='http://www.w3.org/2000/svg' width='50' height='51' viewBox='0 0 67 68' fill='none'>
              <path
                d='M39.6772 31.5708C39.6772 32.4342 39.3727 33.1665 38.7637 33.7678C38.1547 34.3691 37.4185 34.6697 36.5551 34.6697H30.7042V28.4488H36.5551C37.4185 28.4488 38.1547 28.7533 38.7637 29.3623C39.3727 29.9713 39.6772 30.7075 39.6772 31.5708ZM43.8167 31.5708C43.8167 29.5666 43.1114 27.8552 41.7007 26.4368C40.29 25.0184 38.5748 24.3092 36.5551 24.3092H26.5415V45.0302H30.7042V38.8093H36.5551C38.5594 38.8093 40.2707 38.104 41.6891 36.6933C43.1075 35.2826 43.8167 33.5751 43.8167 31.5708ZM54.5241 34.6697C54.5241 37.4757 53.9768 40.1583 52.8822 42.7176C51.7876 45.2769 50.3152 47.4816 48.4651 49.3317C46.615 51.1818 44.4103 52.6542 41.851 53.7488C39.2917 54.8434 36.6091 55.3908 33.8031 55.3908C30.9972 55.3908 28.3145 54.8434 25.7552 53.7488C23.1959 52.6542 20.9913 51.1818 19.1412 49.3317C17.2911 47.4816 15.8187 45.2769 14.7241 42.7176C13.6294 40.1583 13.0821 37.4757 13.0821 34.6697C13.0821 31.8638 13.6294 29.1811 14.7241 26.6219C15.8187 24.0626 17.2911 21.8579 19.1412 20.0078C20.9913 18.1577 23.1959 16.6853 25.7552 15.5907C28.3145 14.496 30.9972 13.9487 33.8031 13.9487C36.6091 13.9487 39.2917 14.496 41.851 15.5907C44.4103 16.6853 46.615 18.1577 48.4651 20.0078C50.3152 21.8579 51.7876 24.0626 52.8822 26.6219C53.9768 29.1811 54.5241 31.8638 54.5241 34.6697Z'
                fill='black' />
            </svg>
            <p class='card-text'>포인트</p>
          </div>
          <div class='card-value'>{{ points }}</div>
        </div>
        <div class='card-body' id='grade-card'>
          <div class='card-icon-text-wrapper'>
            <svg xmlns='http://www.w3.org/2000/svg' width='50' height='51' viewBox='0 0 50 51' fill='none'>
              <path
                d='M41.6951 4.85693H8.54449C6.24467 4.85693 4.40067 6.70094 4.40067 9.00076V31.7918C4.40067 34.0916 6.24467 35.9356 8.54449 35.9356H16.8321V46.2952L25.1198 42.1514L33.4074 46.2952V35.9356H41.6951C43.9949 35.9356 45.8389 34.0916 45.8389 31.7918V9.00076C45.8389 6.70094 43.9949 4.85693 41.6951 4.85693ZM41.6951 31.7918H8.54449V27.648H41.6951V31.7918ZM41.6951 21.4322H8.54449V9.00076H41.6951V21.4322Z'
                fill='black' />
            </svg>
            <p class='card-text'>멤버십등급</p>
          </div>
          <div class='card-value' v-if='membershipGrade === ""'>
            <div id='a-membership-join-wrapper'>
              <a href='/member/membership-honors'>멤버십가입</a>
            </div>
          </div>
          <div class='card-value' v-else>{{ membershipGrade }}</div>
        </div>
      </div>
      <div class='card-body' id='funding-history-card'>
        <div class='card-icon-text-wrapper'>
          <font-awesome-icon :icon="['far', 'heart']" size="2xl" />
          <p class='card-text'>찜내역</p>
        </div>
        <div id='funding-history-value'>{{ likesCnts }}</div><!--hard coding.-->
      </div>
    </div>
    <div id='activity-history-container'>
      <div id='activity-history-title'>나의 활동</div>
      <div id='activity-type-wrapper'>
        <div id='activity-first-row'>
          <div class='activity-wrapper'>
            <div class='activity-title'>펀딩내역</div>
            <div class='activity-open'>
<!--              <a href='/funding/details'><font-awesome-icon :icon="['fas', 'chevron-right']" /></a>-->
              <a href=' '><font-awesome-icon :icon="['fas', 'chevron-right']" /></a>
            </div>
          </div>
          <div class='activity-wrapper'>
            <div class='activity-title'>찜내역</div>
            <div class='activity-open'>
              <a href='/member/likes-list'>
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
              </a>
            </div>
          </div>
        </div>
        <div id='activity-second-row'>
          <div class='activity-wrapper'>
            <div class='activity-title'>개인정보수정</div>
            <div class='activity-open'>
              <a href='/member/my-page/change'>
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { getMemberPointsForShow, getMembershipInfoForShow, getLikesCnts } from '@/services/api/MemberService'
import { ref, onMounted } from 'vue'

const points = ref(0)
const membershipGrade = ref('')
const likesCnts = ref(0)

onMounted(() => {
  getMemberPointsForShow()
    .then(response => {
      points.value = response
    }).catch(error => {
    console.error('포인트 조회 실패:', error)
  })

  getMembershipInfoForShow()
    .then(response => {
      if (response == null) {
        membershipGrade.value = ''
      } else {
        membershipGrade.value = response.membershipPolicyGrade
      }
    }).catch(error => {
    console.error('멤버십 정보 조회 실패:', error)
  })

  getLikesCnts()
    .then(response => {
      likesCnts.value = response
    }).catch(error => {
    console.error('현재 회원의 찜개수 조회 실패:', error)
  })
})

</script>

<style scoped>
@import '@/assets/color.css';
@import '@/assets/font.css';

@import '@/assets/css/member/my-page-supporter.css';
</style>