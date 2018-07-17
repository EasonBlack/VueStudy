import Vue from 'vue'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store/index.js'
const unsync = sync(store, router)

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
