import Vue from 'vue';


const state = {
    menus: [
        {id: "customerDetails", title: "Customer Details"},
        {id: "accountDetails", title: "Account Details"},
        {id: "billHistory", title: "Bill History"},
    ],
    selectedMenu: "customerDetails"
}

const mutations = {
    selectAccountDetailMenu(state, id) {
        state.selectedMenu = id;
    }
}

const actions = {
  
}


export default {
    state,
    mutations,
    actions
}