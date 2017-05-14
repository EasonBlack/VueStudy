import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


const Demo1 = resolve => require(['./demo/move-target.vue'], resolve)
const Demo2 = resolve => require(['./demo2/move-target-multi.vue'], resolve)


const router = new VueRouter({
    routes: [
        { path: '/demo1', name: 'demo1',component: Demo1 },
        { path: '/demo2', name: 'demo2',component: Demo2 }
    ]
})

export default router