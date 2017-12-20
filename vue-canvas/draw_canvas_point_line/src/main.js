import Vue from 'vue'
import App from './App.vue'
import resource from 'vue-resource';
import store from './store/index.js'

Vue.use(resource);

new Vue({
    el: '#app',
    store,
    template: `<App></App>`,
    components: {App}
})
