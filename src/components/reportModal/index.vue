<template>
  <div class="reportModalWrap">
    <div><span>帖子编号</span>{{ postId }}</div>
    <div><span>帖子内容</span>{{ postContent }}</div>
    <div><span>举报原因</span>{{ reportContent }}</div>
    <div><span>处理状态</span>{{ status===0 ? '未审批' : (status===1 ? '已通过' : '未通过') }}</div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  postId: number,
  postContent: string,
  reportContent: string,
  status: number,
}>()

</script>

<style>
.reportModalWrap {
  border: solid 3px #3a68b7;
  border-radius: 5px;
  padding: 20px;

  display: flex;
  flex-direction: row;
  gap: 8px;

  div span {
    font-weight: 700;
  }
}

</style>