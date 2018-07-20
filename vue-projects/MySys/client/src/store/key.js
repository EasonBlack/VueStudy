
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
    await ApiKey.PostKeyList({type: 'lit', items: req.items, category: req.category});
    let result = await ApiKey.GetKeyByCategory('lit', req.category);
    return result;
    //let result2 = await ApiKey.GetKey('lit');
    //commit('setLitItems', result2.data);
  },

  async postInspireKey({commit, state, rootState, dispatch}, req) {
    await ApiKey.PostKeyList({type: 'lit', items: req.items, category: 7});
    let result = await ApiKey.GetKeyByCategory('lit', 7);
    return result;
  },

  async postItItems({commit, state, rootState, dispatch}, req) {
    await ApiKey.PostKeyList({type: 'it', items: req.items, category: req.category});
    let result = await ApiKey.GetKeyByCategory('it', req.category);
    return result;
    //let result2 = await ApiKey.GetKey('it');
    //commit('setItItems', result2.data);
  },

  async getKeyByCategory({commit, state, rootState, dispatch}, req) {
    let result = await ApiKey.GetKeyByCategory(req.type, req.category);
    if(req.type=='it') {
      commit('setItItems', result.data);
    } else if (req.type == 'lit') {
      commit('setLitItems', result.data);
    }
    return result;
    
  },


  async getInspireKey({commit, state, rootState, dispatch}, req) {
    let result = await ApiKey.GetKeyByCategory('lit', 7);
    return result;
  }
  
}

export default {
  state,
  mutations,
  actions
}