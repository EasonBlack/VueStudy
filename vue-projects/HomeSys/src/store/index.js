import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import feedback from './feedback';
import question from './question';
import eventType from './event_type';

export default new Vuex.Store({
    modules: {
        feedback,
        question,
        eventType
    }
})