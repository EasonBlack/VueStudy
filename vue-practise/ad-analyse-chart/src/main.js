import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store/index.js'

import resource from 'vue-resource';
import '$bootstrap';

Vue.use(resource);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);
// import {ElMenu, ElSubmenu} from 'element-ui';
// Vue.component(ElMenu.name, ElMenu);
// Vue.component(ElSubmenu.name, ElSubmenu);

import '../styles/main.scss';

new Vue({
    el: '#app',
    router,
    store,
    template: `<App></App>`,
    components: {App}
})
