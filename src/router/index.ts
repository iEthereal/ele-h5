import {createRouter, createWebHistory} from 'vue-router'
import TabsViewVue from '@/views/tabs/TabsView.vue'
import HomeViewVue from '@/views/tabs/home/HomeView.vue'
import OrderViewVue from '@/views/tabs/order/OrderView.vue'
import MeViewVue from '@/views/tabs/me/MeView.vue'
import LoginView from '@/views/login/LoginView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', redirect: '/home'},
        {
            path: '/tabs',
            name: 'tabs',
            component: TabsViewVue,
            children: [
                {name: 'home', path: '/home', component: HomeViewVue},
                {name: 'order', path: '/order', component: OrderViewVue},
                {name: 'me', path: '/me', component: MeViewVue}
            ]
        },
        {
            name: 'login', path: '/login', component: LoginView
        }
    ]
})

export default router
