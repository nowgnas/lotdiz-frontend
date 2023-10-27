<template>
  <div class="content-body">
    <div class="notification-header">
      <div class="notification-header-header">
        <div class="notification-header-header-title">
          <img class="notification-header-header-title-img" src='/common/notification-logo.svg' alt=" "/>
          <div class="notification-header-header-title-text">알림</div>
        </div>
      </div>
      <div class="notification-header-content">
        <div class="notification-header-content-text">고객님의 활동과 관련한 소식을 알려드려요</div>
      </div>
    </div>
    <div class="notification-box" @scroll="onScroll">
      <div class="notification-body" v-for="notification in getNotificationResponseDtos" :key="notification.notificationId">
        <div class="notification-body-header">
          <div class="notification-title">
            <div class="notification-title-left">
              <img class="notification-title-img" src='/common/notification-title-img.svg' alt=" "/>
              <div class="notification-title-text">
                {{ notification.notificationTitle }}
              </div>
            </div>
            <div class="notification-title-right">
              <div class="notification-title-date-text">
                {{ notification.createdAt }}
              </div>
            </div>
          </div>
        </div>
        <div class="notification-body-content">
          <div class="notification-body-content-text">
            {{ notification.notificationContent }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// default pagenation 값 세팅
// ref: 뷰에서 컴포넌트 또는 DOM에 접근하기 위해 사용하는 속성(마운트된 요소에만 적용 가능)
import {onBeforeMount, onMounted, ref} from "vue";
import type {
  GetNotificationPageResponseDto,
  GetNotificationResponseDto
} from "@/services/api/NotificationService";
import {getNotifications, setNotificationsIsRead} from "@/services/api/NotificationService";

const requestedSort = ref<string>("createdAt,desc");
const requestedPage = ref<number>(0);
const requestedSize = ref<number>(5);

// ref: 뷰에서 컴포넌트 또는 DOM에 접근하기 위해 사용하는 속성(마운트된 요소에만 적용 가능)
const getNotificationResponseDtos = ref<Array<GetNotificationResponseDto>>(new Array<GetNotificationResponseDto>());
const totalPages = ref<number>(1);

/**
 * 컴포넌트가 마운트되기 전에 호출될 콜백
 */
onBeforeMount(async () => {
  await fetchData();
});

const fetchData = async (
    page: number = requestedPage.value,
    size: number = requestedSize.value,
    sort: string = requestedSort.value) => {
  const response: GetNotificationPageResponseDto<GetNotificationResponseDto> =
      await getNotifications(page, size, sort);
  if(getNotificationResponseDtos.value.length === 0) {
    getNotificationResponseDtos.value = response.notifications;
  } else {
    for (const notification of response.notifications) {
      getNotificationResponseDtos.value.push(notification);
    }
  }

  const notificationIds: Array<number> = [];
  for (const notification of response.notifications) {
    if(!notification.notificationIsRead) {
      notificationIds.push(notification.notificationId);
    }
  }

  await setNotificationIsRead(notificationIds);

  updateTotalPages(response);
};

const setNotificationIsRead = async (notificationIds: Array<number>) => {
  if(notificationIds.length !== 0) {
    await setNotificationsIsRead(notificationIds);
  }
}

// pagenation
const changePage = async (page: number) => {
  await fetchData(page);
  requestedPage.value = page;
}

const onScroll = async (event: any) => {
  const { scrollHeight, scrollTop, clientHeight } = event.target;
  // 스크롤이 끝에 닿으면 데이터를 추가로 로드
  if(scrollHeight === (scrollTop + clientHeight)) {
    const currentPage = requestedPage.value
    if(currentPage + 1 < totalPages.value) {
      await changePage(currentPage + 1);
    }
  }
}

// 총 페이지 수 다시 계산
const updateTotalPages = (response: GetNotificationPageResponseDto<GetNotificationResponseDto>) => {
  totalPages.value = response.totalPages;
}

</script>

<style scoped>
@import "@/assets/css/notification.css";
</style>