
const nodeList = [];
const ctx = 'drag'
let actionNode;

document.addEventListener('dragstart', function(e){
    actionNode = e.target;
    nodeList.forEach(node => {
        console.log(node[ctx].id);
        node[ctx].documentHandler(e)
    });
})


export default (options)=> ({
    bind(el, binding, vnode) {
        const id = nodeList.push(el) - 1;
        const documentHandler = function(e) {
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setData("current",e.target.id);
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