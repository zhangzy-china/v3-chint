import {createRouter, RouteRecordRaw, createWebHashHistory} from "vue-router";

// 1. 配置路由
const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        // @ts-ignore
        component: () => import("@/view/login/index.vue")
    },
    {
        path: "/index", // 默认路由 home页面
        // @ts-ignore
        component: () => import("@/view/index/index.vue"),
    },
];
// 2.返回一个 router 实列，为函数，配置 history 模式 createWebHistory,createWebHashHistory 路由模式
// createWebHashHistory 在url上面携带 # 拼接,createWebHistory则不携带
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// 3.导出路由   去 main.ts 注册 router.ts
export default router
