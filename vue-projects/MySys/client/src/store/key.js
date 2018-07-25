
import {ApiKey} from '$api/index';

const state = {
  litItems: [],
  itItems: []
}

const mutations = {
 
}

const actions = {
  async getKeys({commit, state, rootState, dispatch}, req) {
    let result = await ApiKey.GetKey();
    return result;
  },

  async postKeys({commit, state, rootState, dispatch}, req) {
    await ApiKey.PostKeyList({items: req.items});
    let result = await ApiKey.GetKey();
    return result;
  },

}

export default {
  state,
  mutations,
  actions
}