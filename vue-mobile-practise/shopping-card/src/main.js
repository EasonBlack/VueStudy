import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);

import App from './App.vue'
import router from './router';
import store from './store/index.js'

new Vue({
    el: '#app',
    router,
    store,
    template: `<App></App>`,
    components: {App}
})
