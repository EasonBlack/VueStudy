import axios from 'axios'


const state = {
    rows: [
    ],
    cols: [
        {id: 'id', title: 'Id'},
        {id: 'name', title: 'Name'}
    ],
    detail: {},
    bookId: '',
    isEdit: false,
    charactorDisplay: false,
}

const mutations = {

    toggleCharactorEdit(state, bool) {
        state.isEdit = bool == undefined ? !state.isEdit : bool;
    },
   
    displayCharactorPanel(state, bookId) {
        state.bookId = bookId;
        state.charactorDisplay =true;
    },
    cancelCharactorPanel(state) {
        state.bookId = '';
        state.charactorDisplay =false;
    },
    getCharactorByBookId(state, res) {
        state.rows = res;
    },
    getCharactorById(state, res) {
        state.detail = res;
    }

}

const actions = {
    async getCharactorByBookId({commit}, book) {
        let result = await axios.get(`book/${book.id}/charactors`)
        commit('getCharactorByBookId', result.data.rows);
        return result.data.rows.length 
    },

    async editCharactor({commit, dispatch}, charactor) {
        var fd = new FormData();
        fd.append('name',  charactor.name);
        fd.append('subname', charactor.subname);
        fd.append('bookId', charactor.bookId);
        fd.append('desc', charactor.desc);
        if(charactor.id) {
            await axios.put(`charactors/${charactor.id}`, fd)
        } else {
            await axios.post(`book/${charactor.bookId}/charactors`, fd)
        }
           
        dispatch("getCharactorByBookId", {id: charactor.bookId});  
    },
}

export default {
    state,
    mutations,
    actions
}


