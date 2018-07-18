
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
    
    async getBookById({commit, state, rootState, dispatch}, id) {
        let result = await ApiBook.GetBookById(id);
        return result;
    },
    async getBookCharactors({commit, state, rootState, dispatch}, id) {
        let result = await ApiBook.GetBookCharactors(id);
        return result;
    },

    async postBookCharactor({commit, state, rootState, dispatch}, res) {
        let result = await ApiBook.PostBookCharactor(res);
        return result;
    },

    async postAndGetBookCharactors({commit, state, rootState, dispatch}, res) {
        await ApiBook.PostBookCharactor(res);
        let result = await ApiBook.GetBookCharactors(res.id);
        return result;
    },

    async putAndGetBookCharactors({commit, state, rootState, dispatch}, res) {
        await ApiBook.PutBookCharactor(res);
        let result = await ApiBook.GetBookCharactors(res.bookId);
        return result;
    },




   
}

export default {
  state,
  mutations,
  actions
}