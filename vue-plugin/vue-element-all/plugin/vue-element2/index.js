import Button2 from './src/Button.vue';

/* istanbul ignore next */
Button2.install = function(Vue) {
    console.log('install from Button2');
    Vue.component(Button2.name, Button2);
};

export default Button2;