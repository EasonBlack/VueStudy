import Vue from 'vue'
import VeeValidate from 'vee-validate';

import App from './App.vue'

VeeValidate.Validator.extend('testvee', {
    getMessage: field => 'The ' + field + ' value is not through validate.',
    validate: value => {
        if(value % 2) {
            return true
        } else {
            return false
        }
    }
});


Vue.use(VeeValidate);

new Vue({
    components: {App},
    el: '#app',
    template: '<App></App>'
})
