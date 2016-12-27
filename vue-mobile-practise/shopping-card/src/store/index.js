import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        homeItems: [],
        cards: []
    },
    mutations: {
        getHomeNav: function(state,res) {
            state.homeItems = res
        },
        getCards: function(state,res) {
            state.cards = res
        }

    },
    actions: {
        fetchHomeNav ({ commit, state }) {
            Vue.http.get('../../data/homeNav.json').then((response) => {
                commit('getHomeNav', response.body)
            })
        },
        fetchHomeCard ({commit, state}) {
            Vue.http.get('../../data/card.json').then((response) => {
                commit('getCards', response.body)
            })
        }
    }
})