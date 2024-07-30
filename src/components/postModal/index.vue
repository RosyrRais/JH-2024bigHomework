<template>
  <div class="postModalWrap">
    <div class="postModalName">{{ userId }}</div>
    <div class="postModalContent">{{ postContent }}</div>
    <div class="postModalBtns">
      <button @click="reportModal = true">举报</button>
      <button @click="changeModal = true">修改</button>
      <button @click="deletePost">删除</button>
    </div>
    <n-modal v-model:show="reportModal">
      <n-card title="举报" style="width: 300px;">
        <span style="margin-right: 10px;">举报理由</span><input type="text" v-model="reportContent">
        <button @click="reportPost" style="float: right;margin-top: 20px;">举报</button>
      </n-card>
    </n-modal>
    <n-modal v-model:show="changeModal">
      <n-card title="修改" style="width: 300px;">
        <span style="margin-right: 10px;">更改为</span><input type="text" v-model="changeContent">
        <button @click="changePost" style="float: right;margin-top: 20px;">提交</button>
      </n-card>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NModal, NCard } from 'naive-ui';
import { useRequest } from 'vue-hooks-plus';
import { reportPostAPI, deletePostAPI, editPostAPI } from '@/apis';
import { useMainStore } from '@/stores';
import { useNotification } from 'naive-ui';

const notification = useNotification();
const userStore = useMainStore().useUserStore();

const props = defineProps<{
  postId: number,
  userId: number,
  postContent: string,
}>();

const reportModal = ref(false);
const changeModal = ref(false);
const reportContent = ref("");
const changeContent = ref("");

const reportPost = () => {
  useRequest(() => reportPostAPI({
    user_id: userStore.userId,
    post_id: props.postId,
    reason: reportContent.value,
  }), {
    onSuccess(res: any) {
      if(res.code === 200) {
        reportModal.value = false;
        notification.success({
          content: "反馈成功",
          meta: "已交由管理员处理",
          duration: 1000,
          keepAliveOnHover: true,
        })
      } else {
        notification.warning({
          content: "反馈失败",
          meta: res.msg,
          duration: 1000,
          keepAliveOnHover: true,
        })
      }
    }
  })
}

const changePost = () => {
  useRequest(() => editPostAPI({
    user_id: userStore.userId,
    post_id: props.postId,
    content: changeContent.value,
  }), {
    onSuccess(res: any) {
      if(res.code === 200) {
        changeModal.value = false;
        notification.success({
          content: "更改成功",
          duration: 1000,
          keepAliveOnHover: true,
        })
      } else {
        notification.warning({
          content: "更改失败",
          meta: res.msg,
          duration: 1000,
          keepAliveOnHover: true,
        })
      }
    }
  })
}

const deletePost = () => {
  useRequest(() => deletePostAPI({
    user_id: userStore.userId,
    post_id: props.postId,
  }), {
    onSuccess(res: any) {
      if(res.code === 200) {
        reportModal.value = false;
        notification.success({
          content: "删除成功",
          duration: 1000,
          keepAliveOnHover: true,
        })
      } else {
        notification.warning({
          content: "删除失败",
          meta: res.msg,
          duration: 1000,
          keepAliveOnHover: true,
        })
      }
    }
  })
}

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