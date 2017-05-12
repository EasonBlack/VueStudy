import Vue from 'vue'

import App from './App.vue'
import myValidate from '../validate/index'

Vue.use(myValidate);

new Vue({
    components: {App},
    el: '#app',
    template: '<App></App>'
})
