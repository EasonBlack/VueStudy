import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import box from './box';


export default new Vuex.Store({
    modules: {
        box
    }
})