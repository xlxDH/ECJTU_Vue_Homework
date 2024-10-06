<template>
    <div>
      <h1>待办事项</h1>
      <input v-model="newTodo" @keyup.enter="handleAddTodo" placeholder="添加新的待办事项" />
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
          <button @click="toggleTodo(index)">切换完成</button>
          <button @click="removeTodo(index)">删除</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        newTodo: ''
      };
    },
    computed: {
      ...mapGetters(['allTodos']),
      todos() {
        return this.allTodos;
      }
    },
    methods: {
      ...mapActions(['addTodo', 'removeTodo', 'toggleTodo']),
      handleAddTodo() { // 修改方法名，避免冲突
        if (this.newTodo) {
          this.addTodo(this.newTodo); // 调用 Vuex action
          this.newTodo = ''; // 清空输入框
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
  }
  </style>
  