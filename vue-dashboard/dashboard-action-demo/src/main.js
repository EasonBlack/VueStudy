import Vue from 'vue/dist/vue'
import App from './App.vue'
import router from './router';

import vDrag from './demo2/v-drag/index'
Vue.use(vDrag);

new Vue({
    el: '#app',
    router,
    components:{App},
    template:'<App></App>'
})
