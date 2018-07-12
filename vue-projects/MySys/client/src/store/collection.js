
import {ApiCollection} from '$api/index';

const state = {
  
}

const mutations = {
 
}

const actions = {

    async getItCollection({commit, state, rootState, dispatch}, req) {
        let result = await ApiCollection.GetCollection(Object.assign({type: 'it'}, req));
        return result;
    },

    async getLitCollection({commit, state, rootState, dispatch}, req) {
        let result = await ApiCollection.GetCollection(Object.assign({type: 'lit'}, req));
        return result;
    },

    async postItCollection({commit, state, rootState, dispatch}, req) {
        let result = await ApiCollection.PostCollection(Object.assign({table: 'it'}, req));
        return result;
    },

    async postLitCollection({commit, state, rootState, dispatch}, req) {
        let result = await ApiCollection.PostCollection(Object.assign({table: 'lit'}, req));
        return result;
    },
}

export default {
  state,
  mutations,
  actions
}