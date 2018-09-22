
import {ApiCollection} from '$api/index';

const state = {
  
}

const mutations = {
 
}

const actions = {

    async getCollection({commit, state, rootState, dispatch}, req) {
        let result = await ApiCollection.GetCollection(Object.assign({}, req));
        console.log(result);
        return result;
    },

    async getCollectionById({commit, state, rootState, dispatch}, id) {
        let result = await ApiCollection.GetCollectionById(id);
        console.log(result);
        return result;
    },

    async getRandomCollection({commit, state, rootState, dispatch}, req) {
        let result = await ApiCollection.GetRandomCollection(Object.assign({}, req));
        return result;
    },


    async postCollection({commit, state, rootState, dispatch}, req) {
        let result = await ApiCollection.PostCollection(Object.assign({}, req));
        return result;
    },

   
    async putCollection({commit, state, rootState, dispatch}, req) {
        let result = await ApiCollection.PutCollection(Object.assign({}, req));
        return result;
    },

    async patchCollectionTimes({commit, state, rootState, dispatch}, req) {
        await ApiCollection.PatchCollectionTimes(req.id);
        let result = await ApiCollection.GetCollectionById(req.id);
        return result;
    }

   
}

export default {
  state,
  mutations,
  actions
}