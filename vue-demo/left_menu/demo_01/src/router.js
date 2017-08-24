import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import home from './modules/home.vue';
import service from './modules/service.vue';
import food from './modules/services/food.vue';
import clean from './modules/services/clean.vue';
import security from './modules/services/security.vue';

const router = new VueRouter({
    routes: [
        { path: '/home', name: 'home',component: home },
        { path: '/service', name: 'service', component: service, children: [
            {path: '/',  redirect: { name: 'food' }},
            {path: 'food', name: 'food', component: food},
            {path: 'clean', component: clean},
            {path: 'security', component: security}
        ]}
    ]
})

export default router