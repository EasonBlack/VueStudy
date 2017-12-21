import Vue from 'vue';


const state = {
    isPointClickDown: false,
    originX: null,
    originY: null,
    stopX: null,
    stopY: null,
    lines: [],

    deleteMode: false,
    deletePoint: null
}

const mutations = {
    pointClickDownStart(state, {x, y}) {
        state.isPointClickDown = true;
        state.originX = x;
        state.originY = y;
    },

    pointClickDownOut(state) {
        state.isPointClickDown = false;
    },

    pointClickDownStop(state, {x, y}) {
        state.isPointClickDown = false;
        state.stopX = x;
        state.stopY = y;
        if(state.originX == x && state.originY == y) {

        } else {
            state.lines.push({
                x1: state.originX,
                y1: state.originY,
                x2: state.stopX,
                y2: state.stopY
            })
        }   
    },

    setDeleteMode(state) {
        state.deleteMode = !state.deleteMode;
    },
    deleteDeletePoint(state) {
        state.deletePoint = null;
    },
    addDeletePoint(state, {x,y}) {
        let isDelete = false;
        if(!state.deletePoint) {
            state.deletePoint = {x, y}
        } else {
            for(var i=state.lines.length-1;i>=0;i--){
                let _line = state.lines[i];
                if(_line.x1 == state.deletePoint.x && _line.y1 == state.deletePoint.y 
                && _line.x2 == x && _line.y2 == y) {
                    state.lines.splice(i, 1);
                    state.deletePoint = null;
                    isDelete = true;              
                }
            }
        }
        
        if(state.deletePoint && !isDelete) {
            state.deletePoint = {x, y}
        }
    },

}

const actions = {
   
}


export default {
    state,
    mutations,
    actions
}

