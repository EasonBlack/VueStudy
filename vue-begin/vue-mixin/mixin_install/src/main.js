import Vue from 'vue'
import App from './App.vue'
import Mixin from './mixin';

Vue.use(Mixin);


new Vue({
    el: '#app',
    components: {App},
    template: '<App></App>'
})
