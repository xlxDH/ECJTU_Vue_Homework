import { createRouter, createWebHistory } from 'vue-router'; // 使用 Vue Router 4 的导入方式
import ParentComponent from '../components/ParentComponent.vue';
import LoginComponent from '../components/LoginComponent.vue';

const routes = [
  {
    path: '/',
    component: ParentComponent
  },
  {
    path: '/login',
    component: LoginComponent
  }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 使用 Web 历史模式
  routes
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('loggedIn'); // 模拟登录状态
  if (to.path !== '/login' && !isLoggedIn) {
    next('/login'); // 未登录重定向到登录页面
  } else {
    next(); // 继续访问
  }
});

export default router;
