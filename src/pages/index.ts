import { createRouter, createWebHistory } from "vue-router";
import login from "./login/index.vue";


const routes = [
    {
        path: "/login",
        name: "Login",
        component: login
    }
    /* 这里写入各个route
     path 模拟路由的访问
     component 该路由使用的vue组件 */

]

//将上面的数据载入 并创建router实例
const router = createRouter({
    history: createWebHistory(),
    /* 由于vue-router实际上是对router的模拟
    所以使用history来实现浏览器的进退功能 */
    routes: routes
})

//导出
export default router;
