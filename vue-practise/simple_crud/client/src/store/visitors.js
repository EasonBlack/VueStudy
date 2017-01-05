import Vue from 'vue';


const state = {
    all: []
}

const mutations = {
    getVisitors: function (state, visitors) {
        state.all = visitors
    }
}

const actions = {
    fetchVisitors ({commit, state}) {
        Vue.http.get('/api/visitors').then((response) => {
            commit('getVisitors', response.body.data)
        })
    },
    postVisitors ({commit, state}, req) {
        Vue.http.post('/api/visitors', req).then((response) => {
            commit('getVisitors', response.body.data)
        })
    }
}


export default {
    state,
    mutations,
    actions
}