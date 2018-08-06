import {ApiBookSection} from '$api/index';

const state = {
  
}

const mutations = {
 
}

const actions = {
    async getContentBySection({commit, state, rootState, dispatch}, req) {
        let result = await ApiBookSection.GetContentBySection(req);
        return result;
    },
   
    async postContentBySection({commit, state, rootState, dispatch}, res) {
        await ApiBookSection.PostContentBySection(res);
        let result = await ApiBookSection.GetContentBySection({sectionId: res.sectionId});
        return result;
    },
   
}

export default {
  state,
  mutations,
  actions
}