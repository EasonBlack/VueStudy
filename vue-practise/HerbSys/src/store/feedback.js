import Vue from 'vue';


const state = {
    all: [],
    detail: []
}

const mutations = {
    getFeedbacks: function (state, feedbacks) {
        state.all = feedbacks
    },
    getFeedbackDetail: function(state, feedbackDetail) {
        state.detail = feedbackDetail;
    }
}

const actions = {
    fetchFeedbacks ({commit, state}) {
        Vue.http.get('http://localhost:3000/api/herb/feedback/0/0').then((response) => {
            commit('getFeedbacks', response.body)
        })
    },
    fetchFeedBackDetailById ({commit, state}, id) {
        Vue.http.get('http://localhost:3000/api/herb/feedback/'+ id).then((response) => {
            commit('getFeedbackDetail', response.body)
        })
    }
}


export default {
    state,
    mutations,
    actions
}