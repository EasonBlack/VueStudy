import axios from 'axios'


const state = {
    %%className%%DetailView: false,
    %%className%%EditView: false,
    rows: [
    ],
    cols: [
        [% for col in cols -%]
            {id: '%%col%%', title: '%%col.capitalize()%%'},
        [% endfor %]
    ],
    detail : {},
}

const mutations = {
    toggle%%className.capitalize()%%Detail(state, bool) {
        state.%%className%%DetailView = bool
    },
    toggle%%className.capitalize()%%Edit(state, bool) {
        state.%%className%%EditView = bool
    },
    setDetail(state, row) {
        state.detail = row;
    },
    create%%className.capitalize()%%(state, row){
        state.rows.push(row);
        state.%%className%%EditView = false;
    },
    update%%className.capitalize()%%(state, row){
        let _r = state.rows.find(r=>r.%%keycol%% == row.%%keycol%%);   
        [% for col in cols -%]
            _r.%%col%% = row.%%col%%
        [% endfor %]   
        state.%%className%%EditView = false;
    },
    delete%%className.capitalize()%%(state, row){
        let _i = state.rows.findIndex(r=>r.%%keycol%% == row.%%keycol%%);
        state.rows.splice(_i, 1);
        state.%%className%%EditView = false;
    }
}

const actions = {
  
}


export default {
    state,
    mutations,
    actions
}