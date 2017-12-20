import Vue from 'vue';


const state = {
    isPointClickDown: false,
    originX: null,
    originY: null,
    stopX: null,
    stopY: null,
    lines: []
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
        state.lines.push({
            x1: state.originX,
            y1: state.originY,
            x2: state.stopX,
            y2: state.stopY
        })
    }
}

const actions = {
   
}


export default {
    state,
    mutations,
    actions
}

