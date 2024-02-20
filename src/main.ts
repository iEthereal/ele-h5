// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import { Tabbar,TabbarItem } from 'vant'

import 'vant/lib/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.use(Tabbar)
// app.use(TabbarItem)
 
const rootValue = 16
const rootWidth = 390
const deviceWidth = document.documentElement.clientWidth
const caculateWidth =  (deviceWidth * rootValue) / rootWidth + 'px'
document.documentElement.style.fontSize = caculateWidth

app.mount('#app')
