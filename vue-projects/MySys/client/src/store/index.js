import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import app from './app';
import key from './key';
import category from './category';
import collection from './collection';
import inspire from './inspire';
import book from './book';
import bookSection from './book-section';


export default new Vuex.Store({
    modules: {
        app,
        key,
        category,
        collection,
        inspire,
        book,
        bookSection
    }
})