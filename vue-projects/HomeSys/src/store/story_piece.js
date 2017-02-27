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
        let _id = tempid.split('_')[0];
        let _tempid= tempid.split('_')[1];

        let _p = state.current.find((o)=> {
            return o.tempid == _tempid || o.id== _id
        })
        _p.x = o.x;
        _p.y = o.y;
        _p.tempid = o.x +'_' + o.y;
    }
}

const actions = {
    fetchStoryPiece({commit, state}) {
        Vue.http.get(Config.API_ROOT + '/api/home/storyPiece').then((response) => {
            commit('fetchStoryPiece', response.body.data)
        })
    },
    saveStoryPiece ({commit, state}, pieces) {
        Vue.http.post(Config.API_ROOT + '/api/home/storyPiece', {pieces}).then((response) => {
            commit('fetchStoryPiece', response.body.data)
        })
    }
}


export default {
    state,
    mutations,
    actions
}