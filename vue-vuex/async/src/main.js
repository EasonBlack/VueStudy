import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(VueRouter);

import App from './App.vue'
import Detail from './Detail.vue'

const store = new Vuex.Store({
    state: {
        count: 0,
        items: []
    },
    mutations: {
        increment: (state,id) => {
            state.items.find((i)=>i.id == id).num ++
        },
        decrement:(state,id) => {
            state.items.find((i)=>i.id == id).num --
        },
        getData: (state, res) =>  state.items = res,
        getItem: (state, id) => state.items.find((i)=>i.id == id)
    },
    actions: {
        fetch ({ commit, state }) {
            Vue.http.get('../data/data.json').then((response) => {
                commit('getData', response.body)
            })
        }
    }
})

const router = new VueRouter({
    routes: [
        { path: '/app', component: App },
        { path: '/detail/:id', component: Detail },
        { path: '/', redirect: '/app' }
    ]
})

new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    created: function(){
        this.$store.dispatch('fetch');
    },
    template: `
       <router-view></router-view>
    `
})
