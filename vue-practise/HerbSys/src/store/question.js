import Vue from 'vue';


const state = {
    all: [],
    type: [],
}

const mutations = {
    getQuestions: function (state, questions) {
        state.all = questions
    },
    getQuestionsType : function(state , type) {
        state.type = type;
    }
}

const actions = {
    fetchQuestions ({commit, state}) {
        Vue.http.get('http://localhost:3000/api/herb/question').then((response) => {
            commit('getQuestions', response.body.data)
        })
    },
    postQuestion ({commit, state}, req) {
        console.log(req);
        Vue.http.post('http://localhost:3000/api/herb/question', req).then((response) => {
            commit('getQuestions', response.body.data)
        })
    },
    fetchQuestionsType({commit, state}){
        Vue.http.get('http://localhost:3000/api/herb/question_type').then((response) => {
            commit('getQuestionsType', response.body.data)
        })
    }
}


export default {
    state,
    mutations,
    actions
}