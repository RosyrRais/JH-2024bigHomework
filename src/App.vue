<template>
  <n-modal-provider>
    <n-notification-provider>
      <router-view />
    </n-notification-provider>
  </n-modal-provider>
</template>

<script setup lang="ts">
import { NNotificationProvider, NModalProvider } from 'naive-ui';
</script>