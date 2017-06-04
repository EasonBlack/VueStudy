import Vue from 'vue';

const state = {
    list: []
}

const mutations = {
   fetchUsers: function(state, o ) {
       console.log(o);
       state.list = o.body;
   }
}

const actions = {
    fetchUsers:function({commit, state, rootState}){
        rootState.common.MessageBox = "Hello";
        Vue.http.get('src/data.json')
            .then((o)=>{
                commit("fetchUsers", o);
            })
    }
}

export default {
    state,
    mutations,
    actions
}