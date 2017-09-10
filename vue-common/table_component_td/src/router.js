import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import app from './components/home/home.vue';
import detail from './components/detail/detail.vue';


const router = new VueRouter({
    routes: [
        { path: '/home', name: 'home', component: app },
        { path: '/home/detail/:id', name: 'home_detail',component: detail },
        { path: '/', redirect: '/home' }
    ]
})

export default router;