import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const ResourceDetail = () => System.import('./modules/resource-detail/index.vue');


const router = new VueRouter({
    routes: [
        { path: '/resource',name: 'resource', component: ResourceDetail },
        { path: '/', redirect: '/resource' }
    ]
})

export default router