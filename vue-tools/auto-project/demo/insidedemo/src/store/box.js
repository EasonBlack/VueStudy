

function getTheBox(id, boxes) {
    let len = id.split('.').length;
    let res = new Array(len).fill().reduce((b, blank, i) => {
        let _ids = id.toString().split('.').slice();
        let _i = _ids.splice(0, i + 1).join('.')
        let _b = b[_i] || b.boxes[_i]
        return _b
    }, boxes)
    return res;
}

function getParentBox(id, boxes) {
    let len = id.split('.').length;
    let res = new Array(len).fill().reduce((b, blank, i) => {
        let _ids = id.toString().split('.').slice();
        let _i = _ids.splice(0, i + 1).join('.')
        let _b = b[_i] || b.boxes[_i]
        if(i==len-1) {
            _b = b
        }
        return _b
    }, boxes)
    return res;
}


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
    triggerFlag: 0,
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

    moveHandle(state, { e, boxid }){
        state.moveFlag = true;
        state.currentBoxId = boxid;

        state.startTop = e.clientY;
        state.startLeft = e.clientX;
        let _box = getTheBox(state.currentBoxId, state.boxes);
        state.originTop = _box.currentTop;
        state.originLeft = _box.currentLeft;
        state.triggerFlag = 0;
    },

    sizeHandle(state, { e, boxid }){
        state.sizeFlag = true;
        state.currentBoxId = boxid;
        state.startTop = e.clientY;
        state.startLeft = e.clientX;
        let _box = getTheBox(state.currentBoxId, state.boxes);
        state.originWidth = _box.width;
        state.originHeight = _box.height;
        state.triggerFlag = 0;        
    },

    mouseUp(state) {
        state.moveFlag = false;
        state.sizeFlag = false;
    },

    mouseMove(state, {e}){
        
        if (!state.moveFlag && !state.sizeFlag) {
            return false;
        }

        let _box = getTheBox(state.currentBoxId, state.boxes);

        if (state.moveFlag) {
            _box.currentTop = state.originTop + e.clientY - state.startTop;
            _box.currentLeft = state.originLeft + e.clientX - state.startLeft;
        }

        if (state.sizeFlag) {
            _box.width = state.originWidth + e.clientX - state.startLeft;
            _box.height = state.originHeight + e.clientY - state.startTop;
        }
        state.triggerFlag+=1;
    }
    
}

const actions = {
}


export default {
    state,
    mutations,
    actions
}