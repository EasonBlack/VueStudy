import Vue from 'vue';


const state = {
    all: [],
    dropdownAnswer:[]
}

const mutations = {
    getQuestions: function (state, questions) {
        state.all = questions
    },
    getDefaultAnswer: function(state, answers) {
        state.dropdownAnswer = answers;
    }
}

const actions = {
    fetchQuestions ({commit, state}) {
        Vue.http.get(Vue.pconfig.apiHost +'api/herb/question').then((response) => {
            commit('getQuestions', response.body.data)
        })
    },
    postQuestion ({commit, state}, req) {
        console.log(req);
        Vue.http.post(Vue.pconfig.apiHost + 'api/herb/question', req).then((response) => {
            commit('getQuestions', response.body.data)
        })
    },
    updateQuestion ({commit, state}, req) {
        let _id = req.id;
        Vue.http.put(Vue.pconfig.apiHost + 'api/herb/question/' + _id,  req).then((response) => {
            commit('getQuestions', response.body.data)
        })
    },
    fetchQuestionAnswer ({commit, state}, id) {
        Vue.http.get(Vue.pconfig.apiHost + 'api/herb/question_answer/' + id).then((response) => {
            commit('getDefaultAnswer', response.body.data)
        })
    }
}


export default {
    state,
    mutations,
    actions
}