/* main.ts */
import { createApp } from 'vue'
import App from './App.vue'
import router from './pages/index.ts'
//引入 router

const app = createApp(App);

app.use(router);
// .use() 对组件进行挂载

app.mount('#app');
