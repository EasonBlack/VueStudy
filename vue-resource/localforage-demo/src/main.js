import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import resource from 'vue-resource';
Vue.use(resource);
import VueLocal from './localforageConfig';
VueLocal();



new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
