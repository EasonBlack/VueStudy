
const nodeList = [];
const ctx = 'drag'
let actionNode;

document.addEventListener('dragstart', function(e){
    nodeList.forEach(node => {
        let id = e.target.parentNode.id;
        if(node.id == id) {
            node[ctx].documentHandler(e);
        }
    });
})


export default (options)=> ({
    inserted(el, binding, vnode) {
        const id = el.id;
        nodeList.push(vnode.elm);
        const documentHandler = function(e) {

            vnode.context.$parent.$parent['currentDrag'] = e.target.parentElement.id;
            e.dataTransfer.effectAllowed = "move";
            setTimeout(()=>{
                console.log(vnode);
                vnode.context['isHide'] = true;
            },0)
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