import Vue from 'vue'
import App from './App.vue'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// Vue.use(ElementUI)

import { ColorPicker } from 'element-ui';
Vue.use(ColorPicker);

new Vue({
    el: '#app',
    components:{App},
    template:'<App></App>'
})
