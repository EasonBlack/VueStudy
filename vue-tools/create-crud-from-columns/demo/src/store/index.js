import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import person from './person';

export default new Vuex.Store({
    modules: {
        person
    }
})