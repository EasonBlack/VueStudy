
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
        console.log(vnode);
        const id = nodeList.push(vnode.elm) - 1;
        const documentHandler = function(e) {
            console.log(e.target.parentElement);
            vnode.context.$parent.$parent['currentDrag'] = e.target.parentElement.id;
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setData("box",  e.target.parentElement.id);
            e.dataTransfer.setDragImage(e.target.parentElement, 10 ,10);
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