<template>
    <div>
      <h1>登录页面</h1>
      <button @click="login">登录</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      login() {
        localStorage.setItem('loggedIn', 'true'); // 模拟登录
        this.$router.push('/'); // 登录后重定向到首页
      }
    }
  };
  </script>
  
  <style scoped>
  /* 添加样式 */
  </style>
  