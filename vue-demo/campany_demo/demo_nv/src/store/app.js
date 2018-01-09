import Vue from 'vue';


const state = {
    screenSpin: false
}

const mutations = {
    toggleScreenSpin(state, bool) {
        state.screenSpin = bool;
    }
}

const actions = {
  
}


export default {
    state,
    mutations,
    actions
}