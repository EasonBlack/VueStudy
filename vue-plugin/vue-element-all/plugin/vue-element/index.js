import Button from './src/Button.vue';

/* istanbul ignore next */
Button.install = function(Vue) {
    console.log('install from Button1');
    Vue.component(Button.name, Button);
};

export default Button;