//outside click

const nodeList = [];
let startClick;
document.addEventListener('mousedown', e=>{
    startClick = e;
})

document.addEventListener('mouseup', e=>{
    nodeList.forEach(n=>{
        n.ctx.documentHandle(startClick)
    });
})

export default {
    bind: function (el, binding, vnode) {
        nodeList.push(el);

        const documentHandle = function(mousedown) {
            console.log(vnode.elm == mousedown.target);
            //console.log();
            if(vnode.elm == mousedown.target) return;
            //vnode.context[el.ctx.methodName]() t same as
            vnode.context[binding.expression]()
        }

        el.ctx = {
            documentHandle,//: binding.expression
            methodName: binding.expression
        }
    }
}