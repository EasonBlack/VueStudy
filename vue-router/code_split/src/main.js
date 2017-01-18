import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);

const AppView1 = resolve => require(['./App-View1.vue'], resolve)
const AppView2 = resolve => require(['./App-View2.vue'], resolve)

const router = new VueRouter({
    routes: [
        { path: '/foo', component: AppView1 },
        { path: '/bar', component: AppView2 }
    ]
})

new Vue({
    router,
    el: '#app',
    components: {
        App
    }
})


// new Vue({
//     router,
//     el: '#app',
//     render: h => h(App)
// })
