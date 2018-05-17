import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const Main = () => System.import('./modules/main/index.vue');
const Login = () => System.import('./modules/login/index.vue');
const Campaign = () => System.import('./modules/campaign/index.vue');
const ChartType1 = () => System.import('./modules/ChartType1/index.vue');
const ChartType2 = () => System.import('./modules/ChartType2/index.vue');
const ChartType3 = () => System.import('./modules/ChartType3/index.vue');

const router = new VueRouter({
    routes: [
        { path: '/login', name: 'login', component:Login},
        { path: '/app',component: Main, children: [
            { path: '/',  redirect: { name: 'campaign' }},
            { path: 'campaign', name: 'campaign',component: Campaign },
            { path: 'charttype1', name: 'charttype1', component: ChartType1},
            { path: 'charttype2', name: 'charttype2', component: ChartType2},
            { path: 'charttype3', name: 'charttype3', component: ChartType3},
        ]},
        { path: '/', redirect: '/login' }
    ]
})

export default router