

const store = new Vuex.Store({
  state: {
      count: 0,
      name: ''
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    setName: (state,name)=> {
        state.name = name
    }
  },
  actions: {
    async fetch({ commit, state }) {
        let result = await axios.get('./data.json')
        commit('setName', result.data.name);
        return result;
    }
  }
})  