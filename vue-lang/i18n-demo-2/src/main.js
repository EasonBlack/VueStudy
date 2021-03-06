import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from './App.vue'
import 'flag'

Vue.use(VueI18n)


const locales = {
    cn : {
        message: {
            hello: 'こんにちは、世界 111'
        }           
    },
    us: {
        message: {
            hello: '123123123123'
        }   
    }
}

const i18n = new VueI18n({
    locale: 'cn', // set locale
    messages: locales, // set locale messages
})


new Vue({
    el: '#app',
    i18n,
    render: h => h(App)
})
