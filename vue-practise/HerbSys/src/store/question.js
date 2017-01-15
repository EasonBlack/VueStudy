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
    postQuestion ({commit, state}, req) {
        console.log(req);
        Vue.http.post('http://localhost:3000/api/herb/question', req).then((response) => {
            commit('getQuestions', response.body.data)
        })
    },
    updateQuestion ({commit, state}, req) {
        let _id = req.id;
        Vue.http.put('http://localhost:3000/api/herb/question/' + _id,  req).then((response) => {
            commit('getQuestions', response.body.data)
        })
    }
}


export default {
    state,
    mutations,
    actions
}