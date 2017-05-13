import Vue from 'vue/dist/vue'
import App from './App.vue'
import router from './router';

new Vue({
    el: '#app',
    router,
    components:{App},
    template:'<App></App>'
})
