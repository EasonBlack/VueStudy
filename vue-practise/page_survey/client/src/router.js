import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home from './views/home/index.vue'
import Survey from './views/survey/index.vue'


const router = new VueRouter({
    routes: [
        { path: '/home', component: Home },
        { path: '/survey', component: Survey },
        { path: '/', redirect: '/home' }
    ]
})

export default router