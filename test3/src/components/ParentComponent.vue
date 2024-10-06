<template>
    <div>
      <h1>父组件</h1>
      <ChildOne :message="messageFromParent" @response="handleResponse" />
      <ChildTwo :message="messageFromParent" @response="handleResponse" />
      <p>子组件响应: {{ responseMessage }}</p>
    </div>
  </template>
  
  <script>
  import ChildOne from './ChildOne.vue';
  import ChildTwo from './ChildTwo.vue';
  
  export default {
    components: { ChildOne, ChildTwo },
    data() {
      return {
        messageFromParent: '来自父组件的消息',
        responseMessage: ''
      };
    },
    methods: {
      handleResponse(response) {
        this.responseMessage = response;
      }
    }
  };
  </script>
  
  <style scoped>
  /* 添加样式 */
  </style>
  