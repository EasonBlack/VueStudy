import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from './App.vue'

Vue.use(VueI18n)
Vue.config.lang = 'ja'

var locales = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    ja: {
        message: {
            hello: 'こんにちは、世界'
        }
    }
}

Object.keys(locales).forEach(function (lang) {
    Vue.locale(lang, locales[lang])
})

new Vue({
    el: '#app',
    render: h => h(App)
})
