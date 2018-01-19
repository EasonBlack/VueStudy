import Vue from 'vue';


const state = {
    rows: [],
    cols: [],
}

const mutations = {
    getAllAccounts(state,rows) {
        state.rows = rows;
    }
}

const actions = {
    async getAllACcounts() {
        
    }
}


export default {
    state,
    mutations,
    actions
}