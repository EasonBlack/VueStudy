
import {ApiInspire} from '$api/index';

const state = {
  
}

const mutations = {
 
}

const actions = {

    async getInspire({commit, state, rootState, dispatch}, req) {
        let result = await ApiInspire.GetInspire(req);
        return result;
    },

    async postInspire({commit, state, rootState, dispatch}, req) {
        let result = await ApiInspire.PostInspire(req);
        return result;
    },

    async putInspire({commit, state, rootState, dispatch}, req) {
        let result = await ApiInspire.PutInspire(req);
        return result;
    },
}

export default {
  state,
  mutations,
  actions
}