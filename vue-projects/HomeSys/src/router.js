import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Calendar from './modules/calendar/index.vue'
import Daily from './modules/daily/index.vue'
import EventMaintenance from './modules/event_maintenance/index.vue'
import Story from './modules/story/index.vue'


const router = new VueRouter({
    routes: [
        { path: '/calendar', name: 'calendar',component: Calendar },
        { path: '/daily/:date',name: 'daily', component: Daily },
        { path: '/daily', name: 'daily', component: Daily },
        { path: '/event_maintenance', name:'event_maintenance', component: EventMaintenance },
        { path: '/story', name:'story', component: Story },
        { path: '/', redirect: '/calendar' }
    ]
})

export default router