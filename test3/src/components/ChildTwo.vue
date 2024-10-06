<template>
    <div>
      <h2>子组件二</h2>
      <p>{{ message }}</p>
      <button @click="sendResponse">发送响应</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['message'],
    methods: {
      sendResponse() {
        this.$emit('response', '子组件二的响应');
      }
    }
  };
  </script>
  
  <style scoped>
  /* 添加样式 */
  </style>
  