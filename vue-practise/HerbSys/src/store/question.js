import Vue from 'vue';


const state = {
    all: []
}

const mutations = {
    getQuestions: function (state, questions) {
        state.all = questions
    }
}

const actions = {
    fetchQuestions ({commit, state}) {
        Vue.http.get('http://localhost:3000/api/herb/question').then((response) => {
            commit('getQuestions', response.body.data)
        })
    },
}


export default {
    state,
    mutations,
    actions
}