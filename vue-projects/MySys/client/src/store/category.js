
import {ApiCategory} from '$api/index';

const state = {
  litCategory: [],
  itCategory: []
}

const mutations = {
  setLitCategory(state, items) {
    state.litCategory = items;
  },
  setItCategory(state, items) {
    state.itCategory = items;
  },
}

const actions = {
  async getLitCategory({commit, state, rootState, dispatch}, req) {
    let result = await ApiKey.ApiCategory('lit');
    commit('setLitCategory', result.data);
  },

  async getItItems({commit, state, rootState, dispatch}, req) {
    let result = await ApiKey.ApiCategory('it');
    commit('setItCategory', result.data);
  },
  
}

export default {
  state,
  mutations,
  actions
}