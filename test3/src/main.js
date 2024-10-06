import { createApp } from 'vue'; // 使用 createApp
import App from './App.vue';
import router from './router'; // 引入 router

const app = createApp(App); // 创建应用实例
app.use(router); // 注册 router
app.mount('#app'); // 挂载应用
