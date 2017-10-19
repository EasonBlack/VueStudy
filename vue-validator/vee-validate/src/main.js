import Vue from 'vue'
import VeeValidate from 'vee-validate';
import './custom-validator'

import App from './App.vue'


Vue.use(VeeValidate);

new Vue({
    components: {App},
    el: '#app',
    template: '<App></App>'
})
