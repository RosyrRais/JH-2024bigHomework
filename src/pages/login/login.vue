<template>
<div class="loginWrap">
  <div style="width: 100px;">
    <div>学号/工号</div>
    <div>密码</div>
  </div>
  <div style="width: 200px;">
    <input type="text">
    <input type="password">
  </div>
</div>
<input type="button" value="确认" style="position: relative;left: 40%;margin-top: 20px;">
</template>

<script setup lang="ts">

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