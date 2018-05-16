import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import campaign from './campaign';
import menu from './menu';

export default new Vuex.Store({
    modules: {
        campaign,
        menu
    }
})