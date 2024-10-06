import { createStore } from 'vuex';

const store = createStore({
  state: {
    todos: [] // 用于存储待办事项
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    REMOVE_TODO(state, todoIndex) {
      state.todos.splice(todoIndex, 1);
    },
    TOGGLE_TODO(state, todoIndex) {
      state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      // 模拟异步操作
      setTimeout(() => {
        commit('ADD_TODO', { text: todo, completed: false });
      }, 500);
    },
    removeTodo({ commit }, todoIndex) {
      commit('REMOVE_TODO', todoIndex);
    },
    toggleTodo({ commit }, todoIndex) {
      commit('TOGGLE_TODO', todoIndex);
    }
  },
  getters: {
    allTodos(state) {
      return state.todos;
    },
    completedTodos(state) {
      return state.todos.filter(todo => todo.completed);
    },
    activeTodos(state) {
      return state.todos.filter(todo => !todo.completed);
    }
  }
});

export default store;
