import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import VueConfig from './config.js'

import resource from 'vue-resource';
import VeeValidate from 'vee-validate';

Vue.use(resource);
Vue.use(VeeValidate);
Vue.use(VueConfig, {
    apiHost: 'http://localhost:3000/'
})

new Vue({
    el: '#app',
    router,
    store,
    template: `<App></App>`,
    components: {App}
})
