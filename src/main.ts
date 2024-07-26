import { createApp } from 'vue'
import App from './App.vue'
import router from './pages/index.ts'
import pinia from './stores/createPinia.ts';
import naive from 'naive-ui';

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(naive);

app.mount('#app');
