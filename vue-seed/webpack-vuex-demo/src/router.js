import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Calendar from './views/calendar/index.vue'
import FeedbackNew from './views/feedback-new/index.vue'
import FeedbackTable from './views/feedback-table/index.vue'
import Question from './views/question/index.vue'

const router = new VueRouter({
    routes: [
        { path: '/calendar', component: Calendar },
        { path: '/new', component: FeedbackNew },
        { path: '/table', component: FeedbackTable },
        { path: '/question', component: Question },
        { path: '/', redirect: '/calendar' }
    ]
})

export default router