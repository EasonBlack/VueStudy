
import {ApiBook} from '$api/index';

const state = {
  
}

const mutations = {
 
}

const actions = {

    async getBook({commit, state, rootState, dispatch}, req) {
        let result = await ApiBook.GetBook(req);
        return result;
    },

    async getBookCharactor({commit, state, rootState, dispatch}, req) {
        let result = await ApiBook.GetBookCharactor(req);
        return result;
    },

   
}

export default {
  state,
  mutations,
  actions
}