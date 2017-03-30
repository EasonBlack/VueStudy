

import fetchBasic from './root';

const state = {
    aa: [],
    bb: []
}

const mutations = {
    fetchAA: function (state, items) {
        state.aa = items
    },
    fetchBB: function (state, items) {
        state.bb = items
    },
}

const actions = {
    fetchAA ({commit, state}, current) {
        let URL = '../../data/aa.json'
        fetchBasic(URL)
            .then((d)=> {
                commit('fetchAA', d.body)
            })
    },

    fetchBB ({commit, state}, current) {
        let URL = '../../data/bb.json';
        fetchBasic(URL)
            .then((d)=> {
                commit('fetchBB', d.body)
            })
    }
}

export default {
    state,
    mutations,
    actions
}