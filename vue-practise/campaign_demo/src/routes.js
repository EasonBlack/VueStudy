import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const Campaign = () => System.import('./modules/campaign/index.vue');
const Overview = () => System.import('./modules/overview/index.vue');

const router = new VueRouter({
    routes: [
        { path: '/overview', name: 'overview',component: Overview },
        { path: '/campaign',name: 'campaign', component: Campaign },
        { path: '/', redirect: '/overview' }
    ]
})

export default router