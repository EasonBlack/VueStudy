import Vue from 'vue';

let menus = [
    {id: "customerDetails", title: "Customer Details"},
    {id: "accountDetails", title: "Account Details"},
    {id: "billHistory", title: "Bill History"},
]

const state = {
    menus:menus,
    selectedMenu: menus[0].id,

    popup: false
}

const mutations = {
    selectAccountDetailMenu(state, id) {
        state.selectedMenu = id;
    },
    toggleCustomerDetailPopup(state, bool) {
        state.popup = bool;
    }
}

const actions = {
  
}


export default {
    state,
    mutations,
    actions
}