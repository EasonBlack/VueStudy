import Vue from 'vue'
import App from './App.vue'

import {configHandle} from './configHandle'

configHandle();

//Vue.prototype.$msg = MessageBox;

let vm = new Vue({
    el: '#app',
    components: {App},
    template: '<App></App>',
})

