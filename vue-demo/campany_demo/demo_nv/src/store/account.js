import Vue from 'vue';
import { Column } from '$model';

const state = {
    rows: [
        {id: 1, name: "aaa", number: "123"},
        {id: 1, name: "aaa", number: "123"},
        {id: 1, name: "aaa", number: "123"},
    ],
    cols: [
        new Column('id', "Id", {  columnclass: 'center', coltype: 'col-key'}),
        new Column('name', "Name", {  columnclass: 'left'}),
        new Column('number', "Number", {  columnclass: 'center'}),
    ],
}

const mutations = {
    getAllAccounts(state,rows) {
        state.rows = rows;
    }
}

const actions = {
    async getAllACcounts() {
        
    }
}


export default {
    state,
    mutations,
    actions
}