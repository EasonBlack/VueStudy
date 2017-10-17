import Vue from 'vue'
import App from './pages/app/app.vue'

import 'bootstrap/dist/css/bootstrap.css';
import '$style/fonts.fonttello.css';

new Vue({
    el: '#app',
    render: h => h(App)
})
