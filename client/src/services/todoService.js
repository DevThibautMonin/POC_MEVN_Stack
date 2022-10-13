import axios from "axios"

let url = "http://localhost:1234/todolist/"

export default class todoService {

  async getTodos() {
    const todos = await axios.get(url)
    return todos.data
  }

  async createTodo(description) {
    const todos = await axios.post(url, {
      description : description
    })
    return todos.data
  }

  async deleteTodo(todo) {
    await axios.delete(url + todo._id)
  }

}
