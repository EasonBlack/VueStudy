import axios from 'axios'



const state = {
    rows: [
    ],
    cols: [
        {id: 'id', title: 'Id'},
        {id: 'name', title: 'Name'},
        {id: 'author', title: 'Age'},
    ],
    detail: {},
    isEdit: false
}

const mutations = {
    getAllBooks(state, res) {
        state.rows = res;
    },

    getBookById(state, book) {
        state.detail = book;
    },

    toggleBookEdit(state) {
        state.isEdit = !state.isEdit;
    }

}

const actions = {

    async editBook({commit, dispatch}, book) {
        var fd = new FormData();
        fd.append('name',  book.name);
        fd.append('author', book.author);
        if(book.id) {
            await axios.put(`bookItems/${book.id}`, fd)
        } else {
            await axios.post('bookItems', fd)
        }
           
        dispatch("getAllBooks");  
    },

    async getAllBooks({commit}) {
        let result = await axios.get('bookItems')
        commit('getAllBooks', result.data.rows);
    }
  
}


export default {
    state,
    mutations,
    actions
}