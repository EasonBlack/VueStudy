import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import person from './person';
import book from './book';
import charactor from './charactor';
import relation from './relation';

export default new Vuex.Store({
    modules: {
        person,
        book,
        charactor,
        relation
    }
})