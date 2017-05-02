import Vue from 'vue'
import App from './App.vue'

import VueHtml5Editor from 'vue-html5-editor'
Vue.use(VueHtml5Editor,{});

new Vue({
    el: '#app',
    render: h => h(App)
})
