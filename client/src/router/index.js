import { createRouter, createWebHashHistory } from 'vue-router'
import Todolist from "../views/Todolist.vue"

const routes = [
  {
    path: '/',
    name: 'Todolist',
    component: Todolist
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
