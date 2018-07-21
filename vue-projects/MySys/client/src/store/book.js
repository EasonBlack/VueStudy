
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


    async getCharactorContentByCId({commit, state, rootState, dispatch}, id) {
        let result = await ApiBook.GetCharactorContentByCId(id)
        return result;
    },

    async getCharactorContentById({commit, state, rootState, dispatch}, id) {
        let result = await ApiBook.GetCharactorContentById(id)
        return result;
    },


    async postAndGetCharactorContent({commit, state, rootState, dispatch}, res) {
        let pre = await ApiBook.PostCharactorContent(res);
        let result = await ApiBook.GetCharactorContentByCId(res.id);
        return result;
    },

    async putAndGetCharactorContent({commit, state, rootState, dispatch}, res) {
        await ApiBook.PutCharactorContent(res);
        let resultDetail = await ApiBook.GetCharactorContentById(res.id);
        let resultList = await ApiBook.GetCharactorContentByCId(res.cid);
        console.log( {
            list: resultList.data,
            detail: resultDetail.data
        })
        return {
            list: resultList.data,
            detail: resultDetail.data
        };
    },




   
}

export default {
  state,
  mutations,
  actions
}