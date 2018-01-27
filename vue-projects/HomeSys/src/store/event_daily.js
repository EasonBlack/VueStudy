import Vue from 'vue';
import axios from 'axios';
import Config from '../common/config.js';


const state = {
    current: [],
    month: [],
    week: []
}

const mutations = {
    fetchDaily: function (state, items) {
        state.current = items
    },
    fetchMonth: function(state, items) {
        state.month = items
    },
    fetchWeek: function(state, items) {
        state.week = items
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

    async fetchDailyByEventId ({commit, state}, d) {
        let result = await axios.get(`${Config.API_ROOT}/api/home/fetchDailyByEventId/${d.id}/${d.start}/${d.end}`)
        return result.data;
    },
    async fetchDailyByTypeId ({commit, state}, d) {
        let result = await axios.get(`${Config.API_ROOT}/api/home/fetchDailyByTypeId/${d.id}/${d.start}/${d.end}`)
        return result.data;
    },

    fetchDailyByWeek ({commit, state}, d) {
        Vue.http.get(Config.API_ROOT +'/api/home/fetchDaily/'+ d.startDate + '/' + d.endDate).then((response) => {
            commit('fetchWeek', response.body.data)
        })
    },
    postDaily ({commit, state}, req) {
        Vue.http.post(Config.API_ROOT + '/api/home/postDaily/'+ req.date, req).then((response) => {
            commit('fetchDaily', response.body.data)
        })
    },
    putDaily({commit, state}, req) {
        Vue.http.put(Config.API_ROOT + '/api/home/putDaily/'+ req.id, req).then((response) => {
            commit('fetchDaily', response.body.data)
        })
    },
    deleteDaily({commit, state},req) {
        Vue.http.delete(Config.API_ROOT + '/api/home/deleteDaily/'+ req.id, req).then((response) => {
            commit('fetchDaily', response.body.data)
        })
    }

}


export default {
    state,
    mutations,
    actions
}