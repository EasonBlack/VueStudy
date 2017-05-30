

export default {
    bind(el, binding, vnode) {
        console.log(binding.value);
        let num = Number(binding.value);
        let current , start ;
        current = start = 0 ;
        let aId = null;
        let step = 2;
        let countFn = ()=> {
            vnode.elm.innerHTML = current;
            if(current >= num) {
                vnode.elm.innerHTML = num;
                window.cancelAnimationFrame(aId);
                return ;
            }
            current += step ;
            aId = window.requestAnimationFrame(countFn);
        }
        countFn();


    },
    inserted(el, binding, vnode) {

    },
    update(el, binding, vnode) {

    },
    unbind(el) {

    }

}