import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Calendar from './modules/calendar/index.vue'


const router = new VueRouter({
    routes: [
        { path: '/calendar', component: Calendar },
        { path: '/', redirect: '/calendar' }
    ]
})

export default router