import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

import '$bootstrap'
import '$mainstyle'

new Vue({
    el: '#app',
    router,
    store,
    template: `<App></App>`,
    components: {App}
})
