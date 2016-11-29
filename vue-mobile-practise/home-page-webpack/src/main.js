import Vue from 'vue'

import 'bootstrap.css';

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

import App from './App.vue'
import Home from './views/home/Home.vue'
import Detail from './views/detail/Detail.vue'


const router = new VueRouter({
    routes: [
        {path: '/home', component: Home},
        {path: '/detail', component: Detail},
        {path: '/', redirect: '/home'}
    ]
});


new Vue({
    router,
    el: '#app',
    render: h=>h(App)
})
