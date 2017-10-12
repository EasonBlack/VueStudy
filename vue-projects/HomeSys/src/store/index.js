import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import feedback from './feedback';
import question from './question';
import eventType from './event_type';
import eventItem from './event_item';
import eventDaily from './event_daily';
import storyPiece from './story_piece';
import menu from './menu';

export default new Vuex.Store({
    modules: {
        feedback,
        question,
        eventType,
        eventItem,
        eventDaily,
        storyPiece,

        menu
    }
})