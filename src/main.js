import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Bootstrap 5 (AdminLTE v4 yêu cầu)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// AdminLTE 4
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/js/adminlte.min.js'

// Font Awesome Free
import '@fortawesome/fontawesome-free/css/all.min.css'

const vuetify = createVuetify({
  components,
  directives,
})

const router = createRouter({
  history: createWebHistory(),
  routes,
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
