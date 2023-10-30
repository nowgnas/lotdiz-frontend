<template>
  <div class="likes-card-wrapper">
    <div class="likes-card-content-wrapper">
        <div class="sec-project-img">
          <div>
            <img src="https://picsum.photos/200" alt="" class="img-likes" />
          </div>
          <div class="icon-heart-wrapper"><font-awesome-icon :icon="['fas', 'heart']" /></div>
        </div>
        <div class="sec-project-title">
          <div>
              <div class="text-achivement-rate">1200% 달성</div>
              <div class="text-title">[제주한라봉] 달달합니다~.</div>
          </div>
          <div class="text-remain-days">7일</div>
          <div class="text-maker">(주)한라봉</div>
        </div>
          </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
.likes-card-wrapper {
  width: 832px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 5px;
}

.likes-card-content-wrapper {
    display: flex;
    justify-content: center;
    gap: 50px;
}

.img-likes {
  width: 280px;
  height: 200px;
  border-radius: 5px;
}

.sec-project-img {
  display: flex;
  align-items: center;
  position: relative;
}

.icon-heart-wrapper {
    position: absolute;
    color: var(--heart-color);
    top: 15px;
    right: 15px;
    font-size: 25px;
    cursor: pointer;
}

.sec-project-title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.text-achivement-rate {
  font-weight: bold;
  font-size: 15px;
  color: var(--main-color);
}

.text-title {
    font-weight: bold;
}

.text-remain-days {
    color: var(--main-color);
    font-size: 15px;
    font-weight: bold;
}

.text-maker {
    color: var(--middle-gray);
    font-size: 14px;
}
</style>
