import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

import resource from 'vue-resource';
import VeeValidate from 'vee-validate';

Vue.use(resource);
Vue.use(VeeValidate);

new Vue({
    el: '#app',
    router,
    store,
    template: `<App></App>`,
    components: {App}
})
