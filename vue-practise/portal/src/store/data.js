import Vue from 'vue';
import config from '../common/config.js'

const state = {
    all: [],
}

const mutations = {
    fetchData: function (state, d) {
        state.all = d
    },
}

const actions = {
    fetchData: function({commit, state}) {
        Vue.http.get(config.API_ROOT + '/api/test/fetchData').then((response) => {
            commit('fetchData', response.body)
        })
    }
}


export default {
    state,
    mutations,
    actions
}