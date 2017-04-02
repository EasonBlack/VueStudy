import Vue from 'vue'


import App from './App.vue'
import resource from 'vue-resource';

import '$style/fonts.fonttello.css';


Vue.use(resource);


new Vue({
    components: {App},
    el: '#app',
    template: `<App></App>`
})
