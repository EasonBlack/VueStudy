import Vue from 'vue'
import resource from 'vue-resource';

Vue.use(resource);

import router from './router';
import store from './store/index.js'
import App from './App.vue';
import Auth from './config/auth.js';

new Vue({
    el: '#app',
    router,
    store,
    beforeCreate: function() {
        //this.$store.dispatch('checkAccount');
        //Vue.http.headers.common['Authorization'] = '1234';
        Vue.http.get(`http://192.168.0.16:8080/API/getJson/getData4Test`).then((response) => {
            console.log(response);
        })
        //Auth.checkAccount()
    },
    template: `<App></App>`,
    components: {App}
})
