<template>
  <div class="loginWrap">
    <div style="width: 100px;">
      <div>姓名</div>
      <div>学号/工号</div>
      <div>密码</div>
    </div>
    <div style="width: 200px;">
      <input type="text" v-model="name">
      <input type="text" v-model="username">
      <input type="password" v-model="password">
      <div>
        <input type="radio" v-model="user_type" name="identity" :value="1"> 学生
        <input type="radio" v-model="user_type" name="identity" :value="2"> 教师
      </div>
    </div>
  </div>
  <input type="button" value="确认" @click="actRegister" style="position: relative;left: 40%;margin-top: 20px;">
</template>

<script setup lang="ts">
import { useRequest } from 'vue-hooks-plus';
import { registerAPI } from '@/apis';
import { ref } from 'vue';

const name = ref();
const username = ref();
const password = ref();
const user_type = ref(1);

const actRegister = () => {
  useRequest(() => registerAPI({
    name: name.value,
    username: username.value,
    password: password.value,
    user_type: user_type.value,
  }), {
    onSuccess(res: any) {
      console.log(res);
    }
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