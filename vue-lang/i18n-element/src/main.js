import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from './App.vue'

import {DatePicker} from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'
// locale.use(lang)
Vue.use(VueI18n)
Vue.component(DatePicker.name, DatePicker)

const i18n = new VueI18n({
    locale: 'en', // set locale
    messages:  {
        'en': {...enLocale},
        'zh': {...zhLocale}
    }
})
ElementLocale.i18n((key, value) => i18n.t(key, value))

new Vue({
    el: '#app',
    i18n,
    render: h => h(App)
})
