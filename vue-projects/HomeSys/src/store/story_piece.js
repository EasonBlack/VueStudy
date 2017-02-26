import Vue from 'vue';
import Config from '../common/config.js';

const state = {
    current: []
}

const mutations = {
    fetchStoryPiece: function (state, items) {
        state.current = items
    },
    addNewStoryPiece: function (state, p) {
        state.current.unshift(p);
    },
    setStoryPiece: function (state, o) {
        let tempid = o.tempid;
        let _p = state.current.find((o)=> {
            return o.tempid == tempid;
        })
        _p.x = o.x;
        _p.y = o.y;
        _p.tempid= o.x +'_' + o.y;
    }
}

const actions = {
    fetchStoryPiece ({commit, state}, current) {

    }
}


export default {
    state,
    mutations,
    actions
}