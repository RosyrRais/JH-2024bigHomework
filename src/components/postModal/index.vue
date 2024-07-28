<template>
  <div class="postModalWrap">
    <div class="postModalName">{{ userId }}</div>
    <div class="postModalContent">{{ postContent }}</div>
    <div class="postModalBtns">
      <button>举报</button>
      <button>修改</button>
      <button>删除</button>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  postId: number,
  userId: number,
  postContent: string,
}>();

</script>

<style>
.postModalWrap {
  position: relative;
  border: solid 3px #3a68b7;
  border-radius: 5px;
  padding: 20px;
}

.postModalName {
  font-size: 16px;
  font-weight: 600;
}

.postModalBtns {
  position: absolute;
  top: 5px;
  right: 3px;

  font-size: small;
  display: flex;
  flex-direction: row;
  gap: 3px;
}
</style>