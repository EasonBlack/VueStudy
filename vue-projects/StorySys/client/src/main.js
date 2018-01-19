import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
import '$bootstrap'
import '$mainstyle'

axios.defaults.baseURL='http://localhost:9000';

new Vue({
    el: '#app',
    router,
    store,
    template: `<App></App>`,
    components: {App}
})
