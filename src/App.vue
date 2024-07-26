<template>
  <n-message-provider>
    <n-notification-provider>
      <router-view />
    </n-notification-provider>
  </n-message-provider>
</template>

<script setup lang="ts">
import { NNotificationProvider, NMessageProvider } from 'naive-ui';
</script>