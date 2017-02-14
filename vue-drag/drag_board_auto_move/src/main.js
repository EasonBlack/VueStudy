import Vue from 'vue'
import App from './App.vue'
import resource from 'vue-resource';
Vue.use(resource);

new Vue({
    el: '#app',
    template: `<App></App>`,
    components: {App}
})
