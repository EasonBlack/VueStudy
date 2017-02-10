import Vue from 'vue';
import cookies from '../config/cookie.js'
import config from '../config/config.js'

const state = {
    user: {},
}

const mutations = {
    checkAccount: function (state, user) {
        state.user = user
    }
}

const actions = {
    checkAccount ({commit, state}) {
        let token = cookies.getCookie('token');
        console.log(token);
        Vue.http.headers.common['Authorization'] = token;
        Vue.http.get(`${config.API_ROOT}/API/getJson/getData4Test`).then((response) => {
            console.log(response);
            commit('checkAccount', response.body)
        }, (error)=>{
            console.log(error);
        })
    }
}


export default {
    state,
    mutations,
    actions
}