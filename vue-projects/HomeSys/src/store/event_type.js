import Vue from 'vue';
import Config from '../common/config.js';

const state = {
    all: [],
    currentType: 1  //[1,2,3]
}

const mutations = {
    fetchEventType: function (state, types) {
        state.all = types
    },
    setCurrentEventGroupType(state, name) {
        state.currentType = name;
    }
}

const actions = {
    fetchEventType ({commit, state}) {
        Vue.http.get(Config.API_ROOT + '/api/home/fetchEventType').then((response) => {
            commit('fetchEventType', response.body)
        })
    },
    updateEventType({commit, state}, obj) {
        return new Promise(function(resolve){
            Vue.http.post(Config.API_ROOT + '/api/home/updateEventType/'+ obj.id, {name: obj.name}).then(res=>{
                //commit('fetchEventType', res.body);
                resolve();
            })
        });

    }

}


export default {
    state,
    mutations,
    actions
}