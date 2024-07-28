<template>
  <div class="groundWrap">
    <postModal 
    class="posts" 
    v-for="post in postlist" 
    :user-id="post.user_id" 
    :post-content="post.content"
    :post-id="post.id"
    />
  </div>
</template>

<script setup lang="ts">
import { useRequest } from 'vue-hooks-plus';
import { getPostsAPI } from '@/apis';
import { postModal } from '@/components';
import { ref } from 'vue';
import { useNotification } from 'naive-ui';

const notification = useNotification();

const postlist = ref();

useRequest(() => getPostsAPI(), {
  onSuccess(res: any) {
    if(res.code === 200) {
      postlist.value = res.data.post_list;
    } else {
      notification.warning({
        content: "帖子列表获取失败",
        duration: 1000,
        keepAliveOnHover: true,
      })
    }
  }
})
</script>

<style>
.groundWrap {
  width: calc(100vw - 300px);
  height: 100vh;
  overflow-y: scroll;
}

.posts {
  margin: 30px 70px;
}
</style>