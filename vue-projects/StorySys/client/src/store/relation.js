import axios from 'axios'

const state = {
    rows: [],
    bookRows: [],
    cols: [
        {id: 'id', title: 'Id'},
        {id: 'name', title: 'Name'}
    ],
    hostName: '',
    hostId: '',
    detail: {},
    charactorId: '',
    isEdit: false,
    relationDisplay: false,
}

const mutations = {
    toggleRelationEdit(state, bool) {
        state.isEdit = bool == undefined ? !state.isEdit : bool;
    },

    displayRelationPanel(state, charactorId) {
        state.charactorId = charactorId;
        state.relationDisplay =true;
    },

    cancelCharactorPanel(state) {
        state.charactorId = '';
        state.relationDisplay =false;
    },

    getRelationByCharactorId(state, res) {
        state.rows = res.relation;
        state.hostName = res.hostName;
        state.hostId = res.hostId;   
    },

    getRelationByBookId(state, res) {
        state.bookRows = res.relation;
    }
}

const actions = {
    async getRelationByCharactorId({commit}, charactor) {
        let _charactor = await axios.get(`charactors/${charactor.id}`);
        let result = await axios.get(`charactors/${charactor.id}/relations`)

        commit('getRelationByCharactorId', { 
            hostName: _charactor.data.name, 
            hostId : _charactor.data.id,
            relation: result.data.rows
        });
        return result.data.rows.length 
    },

    async getRelationByBookId({commit}, bookId) {
        let result = await axios.get(`books/${bookId}/relations`)
        commit('getRelationByBookId', { 
            relation: result.data.rows
        });
        return result.data.rows.length 
    },

    async postRelation({commit, dispatch}, relation) {
        var fd = new FormData();
        fd.append('cid',  relation.cid1);
        fd.append('cid2', relation.cid2);
        fd.append('relationship', relation.relation);
        fd.append('result', relation.result);
        await axios.post(`charactors/${relation.cid1}/relations`, fd)     
        dispatch("getRelationByCharactorId", {id: relation.cid1});  
    },
    
    async deleteRelation({commit, dispatch}, relation) {
        await axios.delete(`relations/${relation.id}`)
        dispatch("getRelationByCharactorId", {id: relation.cid1});      
    }
}

export default {
    state,
    mutations,
    actions
}
