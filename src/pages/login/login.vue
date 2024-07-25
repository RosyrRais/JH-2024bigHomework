<template>
<div class="loginWrap">
  <div style="width: 100px;">
    <div>学号/工号</div>
    <div>密码</div>
  </div>
  <div style="width: 200px;">
    <input type="text" v-model="username">
    <input type="password" v-model="password">
  </div>
</div>
<input type="button" value="确认" @click="actLogin" style="position: relative;left: 40%;margin-top: 20px;">
</template>

<script setup lang="ts">
import { useRequest } from 'vue-hooks-plus';
import { loginAPI } from '@/apis';
import { ref } from 'vue';

const username = ref();
const password = ref();

const actLogin = () => {
  useRequest(() => loginAPI({
    username: username.value,
    password: password.value,
  }), {
    onSuccess(res: any) {
      console.log(res);
      if(res.code === 200) {
        //login success
      }
    },
  })
}

</script>

<style>
.loginWrap {
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
}
</style>