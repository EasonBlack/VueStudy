import Vue from 'vue';
import Config from '../common/config.js';

const state = {
    all: [],
    current: []
}

const mutations = {
    fetchEventItemsActive: function (state, items) {
        state.all = items
    },
    fetchEventItemsByStatus: function (state, items) {
        state.current = items
    },
}

const actions = {
    fetchEventItemsActive ({commit, state}) {
        Vue.http.get(Config.API_ROOT +'/api/home/fetchEventItemsActive').then((response) => {
            commit('fetchEventItemsActive', response.body.data)
        })
    },
    fetchEventItems ({commit, state}, obj) {
        Vue.http.get(Config.API_ROOT +'/api/home/fetchEventItems', {params: obj}).then((response) => {
            commit('fetchEventItemsByStatus', response.body.data)
        })
    },
    postEventItem ({commit, state}, req) {
        Vue.http.post(Config.API_ROOT + '/api/home/postEventItem', req).then((response) => {
            commit('fetchEventItemsByStatus', response.body.data)
        })
    },
    closeEventItem ({commit, state}, id) {
        Vue.http.put(Config.API_ROOT + '/api/home/closeEventItem/'+ id).then((response) => {
            commit('fetchEventItemsActive', response.body.data)
        })
    }

}


export default {
    state,
    mutations,
    actions
}