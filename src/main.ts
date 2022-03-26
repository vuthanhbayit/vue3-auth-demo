import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { authPlugin } from 'vue3-auth'

const app = createApp(App)

app.use(router)
app.use(authPlugin, {
  router,
  baseUrl: import.meta.env.VITE_BASE_URL,
  local: {
    endpoints: {
      login: {
        url: '/front-store/auth/login',
        method: 'post',
        propertyName: 'token',
      },
      user: {
        url: '/front-store/auth/user',
        method: 'get',
        propertyName: 'data',
      },
      logout: false,
    },
  },
})

app.mount('#app')
