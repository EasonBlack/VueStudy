
const nodeList = [];
const ctx = 'drag'
let actionNode;

document.addEventListener('dragstart', function(e){
    actionNode = e.target;
    nodeList.forEach(node => {
        node[ctx].documentHandler(e)
    });
})


export default (options)=> ({
    bind(el, binding, vnode) {
        const id = nodeList.push(el) - 1;
        const documentHandler = function(e) {
            vnode.context.$parent.$parent['currentDrag'] = e.target.id;
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setData("box", e.target.id);
        };
        el[ctx] = {
            id,
            documentHandler
        };
    },
    update(el, binding, vnode) {

    },
    unbind(el) {
        let len = nodeList.length;
        for (let i = 0; i < len; i++) {
            if (nodeList[i][ctx].id === el[ctx].id) {
                nodeList.splice(i, 1);
                break;
            }
        }
    }
})