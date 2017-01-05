import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import visitors from './visitors';
import sites from './sites';

export default new Vuex.Store({
    modules: {
        visitors,
        sites
    }
})