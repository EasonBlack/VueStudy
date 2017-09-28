export function getTheBox(id, boxes) {
  let len = id.indexOf('.') > -1 ? id.split('.').length : 1;
  let res = new Array(len).fill().reduce((b, blank, i) => {
      let _ids = id.toString().split('.').slice();
      let _i = _ids.splice(0, i + 1).join('.')
      let _b = b[_i] || b.boxes[_i]
      return _b
  }, boxes)
  return res;
}

export function getParentBox(id, boxes) {
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

