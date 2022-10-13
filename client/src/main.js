import { createApp } from 'vue'
import Todolist from "../src/views/Todolist.vue"
import './registerServiceWorker'
import router from './router'

createApp(Todolist).use(router).mount('#app')
