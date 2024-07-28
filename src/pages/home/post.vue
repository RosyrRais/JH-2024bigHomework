<template>
  <div class="postWrap">
    <div class="publishWrap">
      <div class="postTitle">发布帖子</div>
      <textarea v-model="postContent" style="width: 300px;height: 200px;"></textarea>
      <button @click="addPost">发布</button>
    </div>
    <div>
      <div class="postTitle">举报审批</div>
      <div>content</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRequest } from 'vue-hooks-plus';
import { addPostAPI } from '@/apis';
import { useMainStore } from '@/stores';
import { useNotification } from 'naive-ui';

const notification = useNotification();
const userStore = useMainStore().useUserStore();

const postContent = ref();

const addPost = () => {
  if(postContent.value !== "" && postContent.value !== undefined) {
    useRequest(() => addPostAPI({
      content:  postContent.value,
      user_id: userStore.userId,
    }), {
      onSuccess(res: any) {
        if(res.code === 200) {
          notification.success({
            content: "内容成功发表",
            duration: 1000,
            keepAliveOnHover: true,
          })
        } else {
          notification.error({
            content: "内容发表失败",
            meta: res.msg,
            duration: 1000,
            keepAliveOnHover: true,
          })
        }
      }
    })
  } else {
    notification.warning({
      content: "空内容",
      meta: "请勿发表空内容",
      duration: 1000,
      keepAliveOnHover: true,
    })
  }

}

</script>

<style>
.postWrap {
  padding: 80px;

  display: flex;
  flex-direction: row;
  gap: 70px;
}

.postTitle {
  font-weight: 700;
  font-size: larger;
}

.publishWrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

</style>