
//export default mixin;
export function install(Vue) {
    Vue.mixin({
        beforeCreate: function () {
            console.log('trigger beforeCreate!!');
        }
    })
}


export default {
    install
}