import './assets/css/base.css'
import './assets/css/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueFeather from 'vue-feather'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(router)
app.component(VueFeather.name, VueFeather)
app.use(VueAxios, axios)
app.mount('#app')
