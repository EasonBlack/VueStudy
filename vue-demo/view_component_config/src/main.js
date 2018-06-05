import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

import App from './App.vue'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'

import '$bootstrap';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);


import Chart1 from '../packages/chart1/index.js';
import Chart2 from '../packages/chart2/index.js';
import Chart3 from '../packages/chart3/index.js';
import Chart4 from '../packages/chart4/index.js';
const components = [
    Chart1,Chart2,Chart3,Chart4
]
console.log(components);
components.map(component => {
    Vue.component(component.name, component);
});

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
