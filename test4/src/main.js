import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // 引入 Vuex Store

const app = createApp(App);
app.use(store); // 使用 Store
app.mount('#app');
