import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store/index.js'

import resource from 'vue-resource';
import '$bootstrap';

Vue.use(resource);

// IMPORT ALL ELEMENT UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);
// import {Menu,MenuItem} from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';
// console.log(Menu);
// Vue.component(Menu.name, Menu);
// Vue.component(MenuItem.name, MenuItem);


import '../styles/main.scss';

new Vue({
    el: '#app',
    router,
    store,
    template: `<App></App>`,
    components: {App}
})
