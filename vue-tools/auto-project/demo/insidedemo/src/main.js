import Vue from 'vue'
import App from './app.vue'
import store from './store/index.js'

import resource from 'vue-resource';

Vue.use(resource);

new Vue({
    el: '#app',
    store,
    template: `<App></App>`,
    components: {App}
})
