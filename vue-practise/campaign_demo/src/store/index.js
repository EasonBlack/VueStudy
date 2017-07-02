import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import campaign from './campaign';
import menu from './menu';
import store from './store'

export default new Vuex.Store({
    modules: {
        store,
        campaign,
        menu
    }
})