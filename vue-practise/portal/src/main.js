import Vue from 'vue'
import resource from 'vue-resource';

Vue.use(resource);

import router from './router';
import store from './store/index.js'
import App from './App.vue';
import Auth from './common/auth.js';
import Config from './common/config'

Auth.checkAccount(function(res){
    if(res=='success') {
        let vm = new Vue({
            el: '#app',
            router,
            store,
            template: `<App></App>`,
            components: {App}
        })
    } else {
        location.href= Config.LOGIN_URL;
    }
})


