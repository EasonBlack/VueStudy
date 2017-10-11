import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from './App.vue'
import 'flag'

Vue.use(VueI18n)



const locales = {
    cn : {
        info: "bbbb",
        help: {
            xxx: '22222222222'
        }           
    },
    us: {
        info: "aaaa",
        help: {
            xxx: '11111111111'
        }   
    }
}

const i18n = new VueI18n({
    locale: 'cn', // set locale
    messages: locales
})


new Vue({
    el: '#app',
    i18n,
    methods: {
        setLan(lan) {
            this.$i18n.locale = lan;
        }
    },
    render: h => h(App)
})
