import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Login from './modules/login/index.vue'
import Home from './modules/home/index.vue'


const router = new VueRouter({
    routes: [
        { path: '/login', component: Login },
        { path: '/home', component: Home },
        { path: '/', redirect: '/home' }
    ]
})

export default router