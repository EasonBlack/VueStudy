import Vue from 'vue'
import axios from 'axios'
import VueI18n from 'vue-i18n'

import App from './App.vue'
import 'flag'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'cn'
})

new Vue({
    el: '#app',
    i18n,
    render: h => h(App)
})
