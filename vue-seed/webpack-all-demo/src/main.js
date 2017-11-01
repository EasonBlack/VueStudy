import Vue from 'vue'
import routes from './router'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import store from './store'

import 'bootstrap';

const router = new VueRouter({
    routes
});


new Vue({
    router,
    store
}).$mount('#app')
