
import {ApiCollection} from '$api/index';

const state = {
  
}

const mutations = {
 
}

const actions = {

    async getCollection({commit, state, rootState, dispatch}, req) {
        let result = await ApiCollection.GetCollection(Object.assign({}, req));
        return result;
    },


    async postCollection({commit, state, rootState, dispatch}, req) {
        let result = await ApiCollection.PostCollection(Object.assign({}, req));
        return result;
    },

   
    async putCollection({commit, state, rootState, dispatch}, req) {
        let result = await ApiCollection.PutCollection(Object.assign({}, req));
        console.log(result);
        return result;
    },

   
}

export default {
  state,
  mutations,
  actions
}