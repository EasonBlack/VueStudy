import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import pointEvent from './pointevent';


export default new Vuex.Store({
    modules: {
        pointEvent,
    }
})