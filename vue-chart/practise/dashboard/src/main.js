import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import router from './router'
import App from './App.vue'
import store from '../store/store'

import './charts/theme'

Vue.use(VueResource);
Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: `<App></App>`
})
