import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createRouter, createWebHistory } from 'vue-router'

const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',
      name: 'catalog',
      component: () => import('@/components/Catalog.vue')
    },
    { path: '/card',
      name: 'card',
      component: () => import('@/components/Card.vue') 
    },
  ]
})

const app = createApp(App)

app.use(vuetify)
app.use(pinia)
app.use(router)

app.mount('#app')
