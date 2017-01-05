import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Index from './views/Index/Index.vue'
import Site from './views/Site/Site.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/index', component: Index },
        { path: '/site', component: Site },
        { path: '/', redirect: '/index' }
    ]
})

export default router