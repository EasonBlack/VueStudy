import {getTheBox, getParentBox} from './box_fun'
import mutations_act from './box_mutations_act'
import axios from 'axios'



const state = {
    moveFlag: false,
    sizeFlag: false,
    startTop: 0,
    startLeft: 0,
    originTop: 0,
    originLeft: 0,
    originWidth: 0,
    originHeight: 0,
    currentBoxId: null,
    currentBoxSugar: null,
    triggerFlag: 0,
    styleModalDisplay: false,
    boxes: {
        "1": {
            currentLeft: 20,
            currentTop: 100,
            title: 'box-1',
            width: 400,
            height: 300,
            // boxes: {
            //     '1.11': {
            //         currentLeft: 0,
            //         currentTop: 10,
            //         title: 'box-1',
            //         width: 100,
            //         height: 100,
            //     }
            // }
        }
    }
}

const mutations = {
    editBoxTitle(state, {title, boxid}) {
        let _box = getTheBox(boxid, state.boxes);
        _box.title = title;
    },

    setCurrentBoxId(state, {boxid}) {
        state.currentBoxId = boxid;
        let _box = getTheBox(boxid, state.boxes);
        state.currentBoxSugar = _box.sugar;
        state.styleModalDisplay = true;
    },
    setCurrentBoxNull(state) {
        state.currentBoxId = null;
        state.currentBoxSugar = null;
        state.styleModalDisplay = false;
    },

    addInside(state, {id}) {
        let newId = Date.now();
        let len = id.toString().split('.').length;

        let res = new Array(len).fill().reduce((b, blank, i) => {
            let _ids = id.toString().split('.').slice();
            let _i = _ids.splice(0, i + 1).join('.')
            let _b = b[_i] || b.boxes[_i]

            if (i == len - 1) {
                _b.boxes = _b.boxes || {};
                _b.boxes[_i + "." + newId] = {
                    id: _i + "." + newId,
                    title: 'box',
                    width: 150,
                    height: 100,
                    currentTop: 20,
                    currentLeft: 20
                }
            }
            return _b
        }, state.boxes)
    },

    deleteHandle(state, {boxid}){
        let _box = getParentBox(boxid, state.boxes);
        delete _box.boxes[boxid];
        console.log(state.boxes);
        state.triggerFlag+=1;
    },
    
    saveBoxContent(state, {html, css, script, boxid, sugar}){
        let _box = getTheBox(boxid, state.boxes);
        _box.html = html;
        _box.css = css;
        _box.script = script;
        _box.sugar = sugar;
    }
    
}

const actions = {
    setup({state}) {
        let URL = 'http://localhost:90/setup';
        axios.post(URL, state.boxes)
        .then(res=>{
            console.log(res);
        })
    }
    
}


export default {
    state,
    mutations : Object.assign({}, mutations,mutations_act),
    actions
}