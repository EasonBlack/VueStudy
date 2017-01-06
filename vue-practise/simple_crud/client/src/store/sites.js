import Vue from 'vue';


const state = {
    all: []
}

const mutations = {
    getSites: function (state, sites) {
        state.all = sites
    }
}

const actions = {
    fetchSites ({commit, state}) {
        Vue.http.get('/api/sites').then((response) => {
            commit('getSites', response.body.data)
        })
    },
    postSites ({commit, state}, req) {
        Vue.http.post('/api/sites', req).then((response) => {
            commit('getSites', response.body.data)
        })
    },
    deleteSites ({commit, state}, req) {
        Vue.http.delete(`/api/sites/${req.id}`, req).then((response) => {
            commit('getSites', response.body.data)
        })
    }
}


export default {
    state,
    mutations,
    actions
}