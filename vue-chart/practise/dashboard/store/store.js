import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        months:  ['Jan','Feb','Mar','Apr','May', 'Jun','Jul','Aug','Sep', 'Oct', 'Nov', 'Dec'],
        monthlyAudit: []
    },
    mutations: {
        getAudit: (state, res) =>  state.monthlyAudit = res
    },
    actions: {
        fetchMonthlyAudit ({ commit, state }) {
            Vue.http.get('../data/monthly_audit.json').then((response) => {
                commit('getAudit', response.body)
            })
        }
    }
})

export default store;