import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import app from './app';
import person from './person';

export default new Vuex.Store({
    modules: {
        app,
        person
    }
})