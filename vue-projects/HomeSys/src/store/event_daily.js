import Vue from 'vue';
import Config from '../common/config.js';

const state = {
    current: [],
    month: []
}

const mutations = {
    fetchDaily: function (state, items) {
        state.current = items
    },
    fetchMonth: function(state, items) {
        state.month = items
    }
}

const actions = {
    fetchDaily ({commit, state}, current) {
        Vue.http.get(Config.API_ROOT +'/api/home/fetchDaily/'+ current).then((response) => {
            commit('fetchDaily', response.body.data)
        })
    },
    fetchDailyByDate ({commit, state}, d) {
        Vue.http.get(Config.API_ROOT +'/api/home/fetchDaily/'+ d.startDate + '/' + d.endDate).then((response) => {
            commit('fetchMonth', response.body.data)
        })
    },
    postDaily ({commit, state}, req) {
        Vue.http.post(Config.API_ROOT + '/api/home/postDaily/'+ req.date, req).then((response) => {
            commit('fetchDaily', response.body.data)
        })
    },

}


export default {
    state,
    mutations,
    actions
}