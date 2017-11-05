import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import App from './App.vue'
import Login from './Login.vue'

const router = new VueRouter({
    routes: [
        { path: '/', component: Login },
        { path: '/login', component: Login },
        { path: '/app', component: App }
    ]
})

new Vue({
    router,
}).$mount('#app')


// new Vue({
//     router,
//     el: '#app',
//     render: h => h(App)
// })
