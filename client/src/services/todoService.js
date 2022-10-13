import axios from "axios"

let url = "http://localhost:1234/todolist"

export default class todoService {
  async getTodos() {
    const todos = await axios.get(url)
    return todos.data
  }
}
