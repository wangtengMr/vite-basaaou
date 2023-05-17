import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { login } from '@/ulite/api'
const params = {
  password: '123456',
  userType: 1 ,
  username: 'admin'
}
const getlogin = () => {
  login({...params}).then((res) => {
    console.log(res)
    localStorage.setItem('token',res.data.data.token)
  })
}

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


getlogin()
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
