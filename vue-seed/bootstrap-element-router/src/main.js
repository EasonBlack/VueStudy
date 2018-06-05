import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

import App from './App.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'

import '$bootstrap';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);

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
