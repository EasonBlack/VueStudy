

export default {
    bind(el, binding, vnode) {
        console.log(el.parentNode);
        if(!binding.value) {
            let mask = document.createElement('div');
            mask.style.position = 'relative';
            mask.style.backgroundColor = 'rgba(0,0,0,0.1)';
            mask.style.width = '100%';
            mask.style.height = '100%';
            mask.style.minHeight = '300px'
            let maskImg = document.createElement('img');
            maskImg.className='main__loading';
            maskImg.src='assets/spinner.png'
            mask.appendChild(maskImg)
            el.mask = mask;
 
            el.appendChild(mask);
        }
    },

    inserted(el, binding, vnode) {
        
    },

    update(el, binding, vnode) {
        console.log(binding.value);
        if(binding.value) {
            el.removeChild(el.mask);
        }
    },
    unbind(el) {
        
    }

}