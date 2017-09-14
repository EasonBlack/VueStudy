import Vue from 'vue'
import App from './App.vue'
import router from './routes'

import '$style/bootstrap4.0.0-beta.css'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
