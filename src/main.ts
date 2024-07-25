import { createApp } from 'vue'
import App from './App.vue'
import router from './pages/index.ts'
import pinia from './stores/createPinia.ts';

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app');
