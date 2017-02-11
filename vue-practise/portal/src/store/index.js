import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './user';
import data from './data';


export default new Vuex.Store({
    modules: {
        user,
        data
    }
})