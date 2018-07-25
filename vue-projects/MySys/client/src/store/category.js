
import {ApiCategory} from '$api/index';

let setCategoryItems = (function f(items, id)  {
  let res = items.filter(item=>item.PARENT_ID==id);
  res.forEach(r=>{
    r.children = f(items, r.ID)
  })
  return res;
})

let getCategoryChild = (function f(items, id) {
  let _result = [id];
  let res = items.filter(item=>item.PARENT_ID==id);
  res.forEach(r=>{
    let childIds = []
    //_result.push(r.ID);
    childIds = [...f(items, r.ID)]
    _result.push(...childIds);
  })
  console.log(_result);
  return _result;
})

const state = {
  items:[],
  originItems: []
}

const mutations = {
  setItems(state, categorys) {
    state.items = categorys;
  },
  setOriginal(state, items) {
    state.originItems = items;
  },
  getAllCategoryChild(state, id) {
   
    let result = getCategoryChild(state.originItems, id);
    return result;
  }
}

const actions = {

  

  async getCategory({commit, state, rootState, dispatch}, req) {
    let result = await ApiCategory.GetCategory();
    let _items = result.data;
    commit('setOriginal', _items);
    let _category = setCategoryItems(_items, 0);
    commit('setItems', _category);
  },

}

export default {
  state,
  mutations,
  actions
}