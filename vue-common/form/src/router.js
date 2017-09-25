import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const AppCom = () => System.import('./App-com.vue');


const router = new VueRouter({
    routes: [
        { path: '/app/:name', name: 'app',component: AppCom },
        { path: '/', redirect: '/app/demo1' }
    ]
})

export default router