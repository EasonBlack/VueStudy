const state = {
   activeMenu : null
}

const mutations = {
    setActiveMenu: function (state, menu) {
        state.activeMenu = menu
    }
}


export default {
    state,
    mutations
}