<template>
    <div>
      <h1 v-bind:title="title">{{ title }}</h1> <!-- 动态绑定title -->
      <input v-model="inputValue" placeholder="输入一些内容" /> <!-- 双向数据绑定 -->
      <p>你输入的内容是: {{ inputValue }}</p> <!-- 显示输入的值 -->
  
      <p v-if="isActive">状态是：激活</p> <!-- 根据isActive显示不同文本 -->
      <p v-else-if="!isActive">状态是：未激活</p>
      <button @click="toggleActive">切换状态</button> <!-- 切换状态按钮 -->
    </div>
  </template>
  
  <script>
  export default {
    name:'MyComponent',
    data() {
      return {
        title: '欢迎使用',
        inputValue: '',
        isActive: true,
      };
    },
    methods: {
      toggleActive() {
        this.isActive = !this.isActive; // 切换isActive的值
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  