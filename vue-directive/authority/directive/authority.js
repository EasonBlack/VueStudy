
const authConfig = {
    guest: 0,
    normal: 1,
    admin: 2
}

export default {
    bind(el, binding, vnode) {
        console.log(123)
        let auth = vnode.data.attrs.userauth;
        if( binding.value && authConfig[auth] < authConfig[binding.value]) {
            console.log(vnode);
            const comment = document.createComment(' ');
            vnode.elm = comment;
            vnode.text = ' ';
            vnode.isComment = true;
            //vnode.componentInstance.$el = comment;
            vnode.context = undefined;
            vnode.tag = undefined;

            if (el.parentNode) {
                el.parentNode.replaceChild(comment, el);
            }
        }
    },
    inserted(el, binding, vnode) {

    },
    update(el, binding, vnode) {

    },
    unbind(el) {

    }

}