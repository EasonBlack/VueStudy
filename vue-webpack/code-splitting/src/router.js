import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//import Login from './modules/login.vue'
const Login = resolve => require(['./modules/login.vue'], resolve)
const View1 = resolve => require(['./modules/view1.vue'], resolve)

const router = new VueRouter({
    routes: [
        { path: '/login', name: 'login',component: Login },
        { path: '/view1',name: 'view1', component: View1 },
        { path: '/', redirect: 'view1' },
        { path: '/*', redirect: 'view1' },
    ]
})

export default router