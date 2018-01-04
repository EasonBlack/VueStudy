import axios from 'axios'



const state = {
    personDetailView: false,
    personEditView: false,
    rows: [
        { name: 'Thomas Hardy',email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222'},
        { name: "Dominique Perrier", email: "dominiqueperrier@mail.com", address: "Obere Str. 57, Berlin, Germany", phone: "(313) 555-5735"},
        { name: "Maria Anders", email: "mariaanders@mail.com", address: "25, rue Lauriston, Paris, France", phone: "(503) 555-9931"},
        { name: "Fran Wilson", email: "franwilson@mail.com", address: "C/ Araquil, 67, Madrid, Spain", phone: "(204) 619-5731"},
        { name: "Martin Blank", email: "martinblank@mail.com", address: "Via Monte Bianco 34, Turin, Italy", phone: "(480) 631-2097"}
    ],
    cols: [
        {id: 'name', title: 'Name'},
        {id: 'email', title: 'Email'},
        {id: 'address', title: 'Address'},
        {id: 'phone', title: 'Phone'}
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
        _r.email = row.email;
        _r.address = row.address;
        _r.phone = row.phone;
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