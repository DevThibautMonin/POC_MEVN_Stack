<template>
  <div>
    <h1>Todos</h1>
    <div v-for="todo in todos" v-bind:key="todo" @click="deleteTodo(todo)">
      {{ todo.description }}
    </div>
    <div>
      <form @submit="createTodo">
        <input placeholder="Description" type="text" v-model="description">
        <input type="submit" value="Create">
      </form>
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
      todoService : undefined,
      description : undefined
    }
  },
 mounted() {
    this.todoService = new TodoService()
    this.todoService.getTodos().then((todos) => {
      this.todos = todos
    })
  },
  methods: {
    createTodo() {
      event.preventDefault()
      this.todoService.createTodo(this.description).then(() => {
        this.todoService.getTodos().then((todos) => {
          this.todos = todos
          this.description = ""
        })
      })
    },
    deleteTodo(todo) {
      event.preventDefault()
      this.todoService.deleteTodo(todo).then(() => {
        this.todoService.getTodos().then((todos) => {
          this.todos = todos
        })
      })
    }
  }
}
</script>
