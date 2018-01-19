import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import person from './person';
import book from './book';

export default new Vuex.Store({
    modules: {
        person,
        book
    }
})