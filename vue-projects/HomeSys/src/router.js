import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Calendar from './modules/calendar/index.vue'
import Daily from './modules/daily/index.vue'
import EventMaintenance from './modules/event_maintenance/index.vue'


const router = new VueRouter({
    routes: [
        { path: '/calendar', component: Calendar },
        { path: '/daily/:date', component: Daily },
        { path: '/daily', component: Daily },
        { path: '/event_maintenance', component: EventMaintenance },
        { path: '/', redirect: '/calendar' }
    ]
})

export default router