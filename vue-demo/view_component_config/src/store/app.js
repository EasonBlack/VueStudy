
const state = {
  loadingNum : 0 
}
  
 
  
const mutations = {
    addLoadingNum(state) {
      state.loadingNum = state.loadingNum + 1
    },
    minusLoadingNum(state) {
      if(state.loadingNum >=1 ) {
        state.loadingNum = state.loadingNum - 1
      } else {
        state.loadingNum = 0;
      }
    }
}
  
const actions = {
  
}

export default {
    state,
    getters,
    mutations,
    actions
  }