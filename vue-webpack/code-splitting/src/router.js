import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//import Login from './modules/login.vue'
const Login = resolve => require(['./modules/login.vue'], resolve)
const View1 = resolve => require(['./modules/view1.vue'], resolve)

const Page1 = r => require.ensure([], () => r(require('./modules/page1.vue')), 'page-module')
const Page2 = r => require.ensure([], () => r(require('./modules/page2.vue')), 'page-module')


const router = new VueRouter({
    routes: [
        { path: '/login', name: 'login',component: Login },
        { path: '/view1',name: 'view1', component: View1 },
        { path: '/page1',name: 'page1', component: Page1 },
        { path: '/page2',name: 'page2', component: Page2 },
        { path: '/', redirect: 'view1' },
        { path: '/*', redirect: 'view1' },
    ]
})

export default router