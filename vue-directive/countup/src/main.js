import Vue from 'vue/dist/vue'
import App from './App.vue'

import Authority from '../directive'

new Vue({
    el: '#app',
    data: {
        x: "gg"
    },
    components:{App},
    template:'<App></App>'
})
