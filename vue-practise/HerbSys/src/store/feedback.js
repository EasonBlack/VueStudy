import Vue from 'vue';


const state = {
    all: []
}

const mutations = {
    getFeedbacks: function (state, feedbacks) {

        state.all = feedbacks
    }
}

const actions = {
    fetchFeedbacks ({commit, state}) {
        Vue.http.get('http://localhost:3000/api/herb/feedback/0/0').then((response) => {
            commit('getFeedbacks', response.body)
        })
    },
}


export default {
    state,
    mutations,
    actions
}