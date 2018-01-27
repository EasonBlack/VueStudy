import axios from 'axios'


const state = {
    rows: [
    ],
    cols: [
        {id: 'id', title: 'Id'},
        {id: 'name', title: 'Name'}
    ],
    detail: {},
    isEdit: false,
    isCharactorEdit: false,
    charactorDisplay: false,
}

const mutations = {

    toggleCharactorEdit(state) {
        state.isCharactorEdit = !state.isCharactorEdit;
    },
    toggleCharactorPanel(state, bool) {
        state.charactorDisplay = bool==undefined ? !state.charactorDisplay : bool
    },
    getCharactorByBookId(state, res) {
        state.rows = res;
    },

}

const actions = {
    async getCharactorByBookId({commit}, book) {
        let result = await axios.get(`book/${book.id}/charactors`)
        commit('getCharactorByBookId', result.data.rows);
    }
}

export default {
    state,
    mutations,
    actions
}


