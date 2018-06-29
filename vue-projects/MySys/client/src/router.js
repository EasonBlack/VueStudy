import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Book from './views/book/index.vue'
import General from './views/general/index.vue'
import Charactor from './views/charactor/index.vue'


const router = new VueRouter({
    routes: [
        { path: '/book', component: Book },
        { path: '/book/:id', component: General, children: [
            {  path: 'charactor',component: Charactor },
            {  path: '/',redirect: 'charactor' }
        ]},
        { path: '/', redirect: '/book' }
    ]
})

export default router