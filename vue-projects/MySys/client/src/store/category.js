
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
    let result = await ApiCategory.GetCategory('lit');
    commit('setLitCategory', result.data);
  },

  async getItCategory({commit, state, rootState, dispatch}, req) {
    let result = await ApiCategory.GetCategory('it');
    commit('setItCategory', result.data);
  },
  
}

export default {
  state,
  mutations,
  actions
}