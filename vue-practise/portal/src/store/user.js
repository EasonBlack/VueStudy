import Vue from 'vue';
import cookies from '../common/cookie.js'
import config from '../common/config.js'

const state = {
    user: {},
}

const mutations = {
    checkAccount: function (state, user) {
        state.user = user
    }
}

const actions = {

}


export default {
    state,
    mutations,
    actions
}