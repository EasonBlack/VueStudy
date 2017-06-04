
const state = {
    MessageBox: ''
}

const mutations = {
    setMessageBox: function (state, msg) {
        state.MessageBox = msg;
    },
    cancelMessageBox : function(state) {
        state.MessageBox = null;
    }
}

export default {
    state,
    mutations
}