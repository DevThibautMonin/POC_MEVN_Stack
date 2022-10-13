<template>
  <div>
    <h1>Todos</h1>
    <div v-for="todo in todos" v-bind:key="todo">
      {{ todo.title }}
      {{ todo.description }}
    </div>
  </div>
</template>

<script>

import TodoService from "../services/todoService.js"

export default {
  name: "Todolist",
  data() {
    return {
      todos : undefined,
      todoService : undefined
    }
  },
 mounted() {
    this.todoService = new TodoService()
    this.todoService.getTodos().then((todos) => {
      this.todos = todos
    })
  }
}
</script>
