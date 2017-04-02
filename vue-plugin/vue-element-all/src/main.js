import Vue from 'vue'
import App from './App.vue'

import El from '../plugin'
Vue.use(El);

new Vue({
    el: '#app',
    components: {App},
    template: '<App></App>'
})
