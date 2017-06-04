import Vue from 'vue'
import store from './store/index.js';
import resource from 'vue-resource';
import App from './App.vue'

Vue.use(resource);

new Vue({
    el: '#app',
    store,
    components: { App },
    template: `
      <app></app>
    `
})
