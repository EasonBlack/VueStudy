import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router';
import {checkRouteAuth} from './router';

Vue.use(VueRouter);

let _router = checkRouteAuth(routes)
console.log(_router);
const router = new VueRouter({
    routes: _router
})

new Vue({
    router,
    el: '#app',
    components: {
        App
    }
})

