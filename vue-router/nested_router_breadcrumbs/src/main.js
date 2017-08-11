import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

import App from './App.vue'
import Home from './components/Home/Home.vue'

import HomeIndex from './components/Home/children/Index.vue'
import HomeEvent from './components/Home/children/Event.vue'
import HomeEventAdd from './components/Home/children/EventAdd.vue'
import HomeResource from './components/Home/children/Resource.vue'


const router = new VueRouter({
    routes: [
        {
            path: '/home', component: Home, meta: {title: 'Home'},
            children: [
                {
                    path: '/',
                    name: 'index',
                    meta: {title: 'Index'},
                    component: HomeIndex
                },
                {
                    path: 'event',
                    name: 'event',
                    meta: {title: 'Event'},
                    component: HomeEvent
                },
                {
                    path: 'event/add',
                    name: 'eventadd',
                    meta: {title: 'Event Add', parent: 'event'},
                    component: HomeEventAdd
                },
                {
                    path: 'resource',
                    name: 'resource',
                    meta: {title: 'Resource'},
                    component: HomeResource
                },
            ]
        },
        {path: '/', redirect: '/home'}
    ]
});


new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
