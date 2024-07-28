<template>
  <div class="homeWrap">
    <div class="leftBar">
      <div>用户:{{ userStore.userName }}</div>
      <div @click="() => setHomeState(0)">广场</div>
      <div @click="() => setHomeState(1)">发布</div>
      <div v-if="userStore.loginSession" @click="logout">登出</div>
      <div v-if="!userStore.loginSession" @click="() => router.push('/login')">登录</div>
    </div>
    <div class="contentWrap">
      <post v-show="homeState === 1"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/stores';
import { ref } from 'vue';
import router from '..';
import post from './post.vue';
import { useNotification } from 'naive-ui';

const notification = useNotification();
const userStore = useMainStore().useUserStore();

const homeState = ref(0); // 0主页 1发布
const setHomeState = (s: 0|1) => { 
  if(s === 1 && !userStore.loginSession) {
    notification.info({
      content: "未登录",
      meta: "请在发布帖子前登录论坛",
      duration: 1000,
      keepAliveOnHover: true
    })
  } else {
    homeState.value = s;
  }
};

const logout = () => {
  userStore.resetUserStates();
  router.push('/login');
}

</script>

<style>
.homeWrap {
  display: flex;
}

.leftBar {
  width: 260px;
  height: 100vh;
  padding: 30px 0 0 40px;
  border-right: solid 3px #0ba2e3;

  display: flex;
  flex-direction: column;
  gap: 20px;
}

.leftBar div:not(:first-child) { 
  cursor: pointer;
  font-size: large;
  border-left: solid 5px #3a68b7;
  padding-left: 10px;
}

.leftBar div:not(:first-child):hover {
  border-left: solid 4px #94bbff;
}

.leftBar div:first-child {
  padding-left: 5px;
  font-size: 23px;
  font-weight: 700;
}
</style>