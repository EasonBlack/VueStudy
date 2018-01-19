import axios from 'axios'



const state = {
    personDetailView: false,
    personEditView: false,
    rows: [
        { name: 'xxx',age: '17'},
        { name: 'yyy',age: '18'},
    ],
    cols: [
        {id: 'name', title: 'Name'},
        {id: 'age', title: 'Age'},
    ],
    detail : {},
}

const mutations = {
    togglePersonDetail(state, bool) {
        state.personDetailView = bool
    },
    togglePersonEdit(state, bool) {
        state.personEditView = bool
    },
    setDetail(state, row) {
        state.detail = row;
    },
    createPerson(state, row){
        state.rows.push(row);
        state.personEditView = false;
    },
    updatePerson(state, row){
        let _r = state.rows.find(r=>r.name == row.name);      
        _r.name = row.name;
        _r.age = row.age;
        state.personEditView = false;
    },
    deletePerson(state, row){
        let _i = state.rows.findIndex(r=>r.name == row.name);
        state.rows.splice(_i, 1);
        state.personEditView = false;
    }
}

const actions = {
  
}


export default {
    state,
    mutations,
    actions
}