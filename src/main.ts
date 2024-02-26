// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import {Tabbar, TabbarItem, Search, Icon, Loading, Skeleton,Sticky,Tabs, Tab,Lazyload} from 'vant'
import {NavBar,Form,CellGroup,Field,Button} from "vant";
import lazyPlugin from '@/directives/lazyLoading'
import 'vant/lib/index.css'
import '@/assets/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Tabbar)
app.use(TabbarItem)
app.use(Search)
app.use(Icon)
app.use(Loading)
app.use(Skeleton)
app.use(Sticky)
app.use(Tab)
app.use(Tabs)
// app.use(Lazyload)
app.use(lazyPlugin)

app.use(NavBar)
app.use(Form)
app.use(CellGroup)
app.use(Field)
app.use(Button)

const rootValue = 16
const rootWidth = 390
const deviceWidth = document.documentElement.clientWidth
const caculateWidth =  (deviceWidth * rootValue) / rootWidth + 'px'
document.documentElement.style.fontSize = caculateWidth

app.mount('#app')
