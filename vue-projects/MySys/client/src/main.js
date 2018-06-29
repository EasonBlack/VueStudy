import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';



new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
