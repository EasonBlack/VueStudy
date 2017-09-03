import Vue from 'vue';


const state = {
    currentLoginBox : 'signup', //['signin', 'signup']
}

const getters = {

}

const mutations = {
    setCurrentLoginBox(state, {name}) {
        state.currentLoginBox = name;
    }
}

const actions = {

}


export default {
    state,
    mutations,
    actions,
    getters
}