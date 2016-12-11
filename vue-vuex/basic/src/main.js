import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import App from './App.vue'

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    }
})

new Vue({
    el: '#app',
    store,
    components: { App },
    template: `
      <app></app>
    `
})
