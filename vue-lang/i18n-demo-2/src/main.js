import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from './App.vue'

Vue.use(VueI18n)
Vue.config.lang = 'la'

var locales = {
    la : {
        message: {
            hello: 'こんにちは、世界 111'
        }
    }

}

Vue.locale('la', locales.la)


new Vue({
    el: '#app',
    render: h => h(App)
})
