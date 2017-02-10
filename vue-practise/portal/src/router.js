import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import auth from './common/auth';
import config from './common/config'

import Home from './modules/home/index.vue'

const router = new VueRouter({
    routes: [
        {path: '/home', component: Home},
        {path: '/', redirect: '/home'}
    ]
})

router.beforeEach((to, from, next) => {
    auth.checkAccount(function(res){
        console.log(res);
        if(res=='success') {
            next();
        } else {
            next(false);
            location.href= config.LOGIN_URL;
        }
    })

})

export default router