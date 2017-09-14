
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home from './home/home.vue'

const router = new VueRouter({
  routes: [
    { path: '/home', name: 'home',component: Home },
    { path: '/', redirect: '/home' }
  ]
})

export default router