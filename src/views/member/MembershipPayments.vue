<template>
  <div class="main-content-container">
    <div id="membership-promotion-content">
      <div id="honors-title">롯드 오너스</div>
      <div id="membership-payments-banner">
        <p id="banner-text">
          <font-awesome-icon :icon="['fas', 'trophy']" /> 이우엽님 롯드오너스로<br />
          할인 및 적립 혜택 DEAL하세요!
        </p>
        <div id="btn-membership-join">
          롯드 오너스 가입하기
          <span class="icon-arrow">
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
          </span>
        </div>
      </div>
    </div>
    <div id="sec-intro">
        <div id="intro-title">롯데 오너스란?</div>
        <div id="intro-sub-title-container">
            <div class="intro-sub-title-wrapper">
                <div class="intro-sub-icon"><p><font-awesome-icon :icon="['fas', 'turn-up']" /></p></div>
                <div class="intro-sub-title">파격적인 할인율</div>
                <div>3%, 5%</div>
            </div>
            <div class="intro-sub-title-wrapper">
                <div class="intro-sub-icon"><p><font-awesome-icon :icon="['fas', 'circle-dollar-to-slot']" /></p></div>
                <div class="intro-sub-title">포인트 적립</div>
                <div>1%, 2%</div>
            </div>
            <div class="intro-sub-title-wrapper">
                <div class="intro-sub-icon"><p><font-awesome-icon :icon="['fas', 'arrow-trend-down']" /></p></div>
                <div class="intro-sub-title">저가형 멤버십</div>
                <div>연 6,900원, 9,900원</div>
            </div>
        </div>
    </div>
    <div class="box-container">
        <div id="price-box">
            <div id="price-box-text">1년동안<br>펀딩 프렌즈 6,900원,<br>펀딩 파트너 9,900원</div>
            <div id="price-ticket-wrapper">
                <div class="price-ticket" @click="readyForPaymentsOfFundingFriends"><font-awesome-icon :icon="['fas', 'won-sign']" /> 6,900</div>
                <div class="price-ticket"><font-awesome-icon :icon="['fas', 'won-sign']" /> 9,900</div>
            </div>
        </div>
        <div id="membership-type-desc-box">
            <div class="honors-type">
                <font-awesome-icon :icon="['fas', 'users']" />
                <div class="honors-type-text">펀딩 프렌즈</div>
                <div class="honors-type-desc">
                    실제 결제 금액의<br>
                    1% 포인트 적립<br><br>
                    실제 결제 금액의<br>
                    3% 할인
                </div>
            </div>
            <div class="honors-type">
                <font-awesome-icon :icon="['fas', 'people-group']" />
                <div class="honors-type-text">펀딩 파트너</div>
                <div class="honors-type-desc">
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

<script setup lang="ts">
import type { MembershipInfoForJoinRequest } from '@/services/types/MemberRequest';
import { postMembershipInfoForJoin } from '@/services/api/MemberService';

const readyForPaymentsOfFundingFriends = () => {
    if(confirm('멤버십 가입을 위한 결제 코드로 이동하시겠습니까?')) {
        const fundingFriendsJoinRequest: MembershipInfoForJoinRequest = {
            membershipPolicyId: 1,
            itemName: '펀딩 프렌즈',
            totalAmount: '6900',
            taxFreeAmount: '0',
        }
        const response: Promise<string> = postMembershipInfoForJoin(fundingFriendsJoinRequest);
        console.log("response:", response);
    
        response.then(data => {
            const redirectUrl = data;
            console.log("redirectUrl:", redirectUrl);
            window.open(redirectUrl, '멤버십 결제 QR 코드', 'top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no');
        }).catch(error => {
            console.error('오류발생: ', error);
        });
    } else {
        return;
    }
}

</script>

<style>
@import '@/assets/color.css';
@import '@/assets/font.css';

body, ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
}

.main-content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
}

#membership-promotion-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
}

#honors-title {
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    padding-bottom: 50px;
}

#membership-payments-banner {
  width: 1000px;
  height: 270px;
  padding: 20px;
  background-color: var(--banner-bg-color);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#banner-text {
  text-align: center;
  font-size: 35px;
  font-weight: bold;
}

#btn-membership-join {
  padding: 10px 70px;
  background-color: white;
  border-radius: 30px;
  color: black;
  cursor: pointer;
}

.icon-arrow {
    font-size: 12px;
    padding-left: 10px;
}

#intro-title {
    padding-top: 50px;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
}

#intro-sub-title-container {
    display: flex;
    gap: 150px;
    justify-content: center;
    padding-top: 50px;
}

.intro-sub-title-wrapper {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.intro-sub-icon {
    background-color: var(--circle-bg-color);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    padding-top: 7px;  
}

.intro-sub-title {
    color: var(--honors-main-color);
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    padding-top: 10px;
}

.box-container {
    display: flex;
    justify-content: space-between;
    width: 1000px;
    padding-top: 70px;
    padding-bottom: 100px;
}

#price-box {
    width: 450px;
    height: 260px;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--card-border-color);
    border-radius: 5px;
    padding: 45px 10px 15px;
}

#membership-type-desc-box {
    width: 450px;
    height: 260px;
    display: flex;
    justify-content: space-around;
    border: 1px solid var(--card-border-color);
    border-radius: 5px;
    padding: 45px 10px 15px;
}

#price-box-text {
    text-align: center;
    font-weight: bold;
    font-size: 22px;
}

#price-ticket-wrapper {
    padding-top: 40px;
    display: flex;
    gap: 5px;
    justify-content: space-around;
}

.price-ticket {
    background-color: var(--main-color);
    font-weight: bold;
    font-size: 22px;
    padding: 10px 40px;
    border-radius: 5px;
    cursor: pointer;
}

.price-ticket:hover {
    background-color: var(--deep-color);
}

.honors-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 60px;
}

.honors-type-text {
    padding-top: 10px;
    font-size: 22px;
    font-weight: bold;
    color: var(--honors-main-color);
}

.honors-type-desc {
    padding-top: 10px;
    font-size: 15px;
    text-align: center;
}
</style>
