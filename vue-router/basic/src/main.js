import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppView1 from './App-View1.vue';
import AppView2 from './App-View2.vue';


Vue.use(VueRouter);

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
