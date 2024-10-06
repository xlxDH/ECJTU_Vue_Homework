<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/login">登录</router-link>
    </nav>
    <router-view></router-view> <!-- 用于展示匹配的组件 -->
  </div>
</template>

<script>
export default {
};
</script>

<style>
/* 添加样式 */
</style>
