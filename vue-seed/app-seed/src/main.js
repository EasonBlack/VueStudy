import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store/index.js'

import resource from 'vue-resource';

Vue.use(resource);

new Vue({
    el: '#app',
    router,
    store,
    template: `<App></App>`,
    components: {App}
})
