import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import app from './app';
import account from './account';

export default new Vuex.Store({
    modules: {
        app,
        account
    }
})