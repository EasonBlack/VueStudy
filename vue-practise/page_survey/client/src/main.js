import Vue from 'vue'
import resource from 'vue-resource';

Vue.use(resource);
import router from './router';
import App from './App.vue'

new Vue({
    el: '#app',
    router,
    template: `<App></App>`,
    components: {App}
})
