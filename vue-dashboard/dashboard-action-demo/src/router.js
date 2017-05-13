import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


const Demo1 = resolve => require(['./demo/move-target.vue'], resolve)


const router = new VueRouter({
    routes: [
        { path: '/demo1', name: 'demo1',component: Demo1 }
    ]
})

export default router