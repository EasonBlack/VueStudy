import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

import '$style/bootstrap4.0.0-beta.3.css'

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
