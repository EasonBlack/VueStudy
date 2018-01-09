import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Login from './modules/login/index.vue'
import Main from './modules/main/index.vue'
import Home from './modules/home/index.vue'
import Bill from './modules/bill/index.vue'
import Rate from './modules/rate/index.vue'
import Revenue from './modules/revenue/index.vue'


const router = new VueRouter({
    routes: [
        { path: '/login', component: Login },
        { path: '/home',  component: Main, children: [
            { path: '/',  redirect: { name: 'home' }},
            { path: '/home', name: 'home', component: Home},
            { path: '/revenue', name: 'revenue', component: Revenue},
            { path: '/bill',  name: 'bill', component: Bill},
            { path: '/rate', name: 'rate',  component: Rate},
        ]},
        { path: '/', redirect: '/login' }
    ]
})

export default router