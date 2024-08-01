<template>
  <div class="manageWrap">
    <n-table>
      <thead>
        <tr>
          <th>帖子内容</th>
          <th>举报原因</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rep in reportList">
          <td>{{ rep.content }}</td>
          <td>{{ rep.reason }}</td>
          <td>
            <button @click="() => dueReport(1, rep.username, rep.post_id)">同意</button>
            <button @click="() => dueReport(2, rep.username, rep.post_id)">否决</button>
          </td>
        </tr>
      </tbody>
    </n-table>
  </div>
</template>

<script setup lang="ts">
import { NTable } from 'naive-ui';
import { ref } from 'vue';
import { useRequest } from 'vue-hooks-plus';
import { getReportListAPI, editReportAPI } from '@/apis';
import { useMainStore } from '@/stores';
import { useNotification } from 'naive-ui';

const notification = useNotification();
const userStore = useMainStore().useUserStore();

const reportList = ref();

useRequest(() => getReportListAPI({
  user_id: userStore.userId,
}), {
  onSuccess(res: any) {
    if(res.code === 200) {
      reportList.value = res.data.report_list;
    }
  }
})

const dueReport = (approval: number, userId: number, postId: string) => {
  useRequest(() => editReportAPI({
    user_id: userId,
    post_id: postId,
    approval: approval,
  }), {
    onSuccess(res: any) {
      if(res.code === 200) {
        notification.success({
          content: "操作成功",
          duration: 1000,
          keepAliveOnHover: true,
        })
      } else {
        notification.error({
          content: "操作失败",
          meta: res.msg,
          keepAliveOnHover: true,
        })
      }
    }
  })
}

</script>

<style>
.manageWrap {
  padding: 50px 0 0 80px;
}
</style>