import {getTheBox, getParentBox} from './box_fun'

const mutations_act = {
  moveHandle(state, {
    e,
    boxid
  }) {
    state.moveFlag = true;
    state.currentBoxId = boxid;

    state.startTop = e.clientY;
    state.startLeft = e.clientX;
    let _box = getTheBox(state.currentBoxId, state.boxes);
    state.originTop = _box.currentTop;
    state.originLeft = _box.currentLeft;
    state.triggerFlag = 0;
  },

  sizeHandle(state, {
    e,
    boxid
  }) {
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

  mouseMove(state, {
    e
  }) {

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
    state.triggerFlag += 1;
  }
}

export default mutations_act