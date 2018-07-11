
import {ApiKey} from '$api/index';

const state = {
  litItems: [],
  itItems: []
}

const mutations = {
  setLitItems(state, items) {
    state.litItems = items;
  },
  setItItems(state, items) {
    state.itItems = items;
  },
}

const actions = {
  async getLitItems({commit, state, rootState, dispatch}, req) {
    let result = await ApiKey.GetKey('lit');
    commit('setLitItems', result.data);
  },

  async getItItems({commit, state, rootState, dispatch}, req) {
    let result = await ApiKey.GetKey('it');
    commit('setItItems', result.data);
  },

  async postLitItems({commit, state, rootState, dispatch}, req) {
    let result1 = await ApiKey.PostKeyList({type: 'lit', items: req.items});
    let result2 = await ApiKey.GetKey('lit');
    commit('setLitItems', result2.data);
  },

  async postItItems({commit, state, rootState, dispatch}, req) {
    let result1 = await ApiKey.PostKeyList({type: 'it', items: req.items});
    let result2 = await ApiKey.GetKey('it');
    commit('setItItems', result2.data);
  },
  
}

export default {
  state,
  mutations,
  actions
}