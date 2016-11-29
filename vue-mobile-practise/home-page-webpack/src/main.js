import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

import App from './App.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'


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
