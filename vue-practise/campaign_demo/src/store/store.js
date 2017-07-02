import Vue from 'vue';

const state = {
    storelist: [],
}

const mutations = {
    getStoreList(state, items) {
        state.storelist = items
    }
}

const actions = {
    getStoreList({commit, state}) {
        Vue.http.get('../../data/stores.json').then((response) => {
            console.log(response);
            commit('getStoreList', response.body)
        })
    }
}


export default {
    state,
    mutations,
    actions
}