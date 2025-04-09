import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
const router = createRouter({
  history: createWebHistory(),
  routes, 
})
if (import.meta.hot) { 
  handleHotUpdate(router) 
} 
createApp(App).use(router).mount('#app')