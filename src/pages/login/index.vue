<template>
  <div class="wrap">
    <div class="submit">
      <div :class="chooseLogin ? 'chosen' : undefined" @click="() => changeChoose(true)">登录</div>
      <div :class="chooseLogin ? undefined : 'chosen'" @click="() => changeChoose(false)">注册</div>
    </div>
    <div class="loginComponent">
      <div class="inwrap">
        <login v-if="chooseLogin"/>
        <register v-else/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Login from "./login.vue";
import register from './register.vue';

const chooseLogin = ref<boolean>(false);

const changeChoose = (choose: boolean) => {
  chooseLogin.value = choose;
}

</script>

<style>
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.submit {
  display: flex;
  width: 400px;
  cursor: pointer;

  div {
    width: 50%;
    padding: 10px;
    text-align: center;
    background-color: #c9c9c9;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 3px solid #3a68b7;
  }

  .chosen {
    background-color: #94bbff;
    border-left: 3px solid #3a68b7;
    border-right: 3px solid #3a68b7;
    border-top: 3px solid #3a68b7;
    border-bottom: none;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
}

.loginComponent {
  width: 400px;

  .inwrap {
    background-color: #94bbff;
    border-left: 3px solid #3a68b7;
    border-right: 3px solid #3a68b7;
    border-bottom: 3px solid #3a68b7;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 20px;
}
}
</style>