import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Index from './views/Index/Index.vue'
import Edit from './views/Edit/Edit.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/index', component: Index },
        { path: '/edit', component: Edit },
        { path: '/', redirect: '/index' }
    ]
})

export default router