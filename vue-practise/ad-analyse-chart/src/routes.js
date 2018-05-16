import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const Basement = () => System.import('./modules/basement/index.vue');
const Login = () => System.import('./modules/login/index.vue');
const Campaign = () => System.import('./modules/campaign/index.vue');
const Center = () => System.import('./modules/center/index.vue');
const router = new VueRouter({
    routes: [
        { path: '/login', name: 'login', component:Login},
        { path: '/app',component: Basement, children: [
            { path: '/',  redirect: { name: 'campaign' }},
            { path: 'campaign', name: 'campaign',component: Campaign },
            { path: 'center', name: 'center',component: Center },
        ]},
        { path: '/', redirect: '/login' }
    ]
})

export default router