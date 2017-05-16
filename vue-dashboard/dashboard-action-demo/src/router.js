import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


const Demo1 = resolve => require(['./demo/move-target.vue'], resolve)
const Demo2 = resolve => require(['./demo2/move-target-multi.vue'], resolve)
const Demo3 = resolve => require(['./demo3/move-target-conflict.vue'], resolve)
const Demo4 = resolve => require(['./demo4/move-target-conflict.vue'], resolve)


const router = new VueRouter({
    routes: [
        { path: '/demo1', name: 'demo1',component: Demo1 },
        { path: '/demo2', name: 'demo2',component: Demo2 },
        { path: '/demo3', name: 'demo3',component: Demo3 },
        { path: '/demo4', name: 'demo4',component: Demo4 }
    ]
})

export default router