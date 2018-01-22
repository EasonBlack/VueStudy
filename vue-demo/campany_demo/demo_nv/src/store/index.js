import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import app from './app';
import account from './account';
import account_detail from './account-detail';

export default new Vuex.Store({
    modules: {
        app,
        account,
        account_detail
    }
})