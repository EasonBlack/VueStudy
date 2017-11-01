
import API from '../api/index'
import * as types from './types'

const state = {
  rows: [],
  cols: ['name','age']
}

const mutations = {
  [types.FETCH_HOME](state, res) {
    state.rows = res;
  }
}

const actions = {
  [types.FETCH_HOME]: async ({commit}) => {
    let result =  await API.fetchHomeData()
    commit(types.FETCH_HOME, result.data);
  }
}

export default {
  state,
  mutations,
  actions
}