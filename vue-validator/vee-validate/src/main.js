import Vue from 'vue'
import VeeValidate from 'vee-validate';

import App from './App.vue'
import moment from 'moment'

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

VeeValidate.Validator.extend('dateless', {
    getMessage: field => 'The ' + field + ' should not later than end date.',
    validate: (value,other) => {
        let _other = null;
        if(other[0]){
            _other = new Date(other[0])
        }
        return moment(value).isBefore(moment(other[0]))
    }
});


Vue.use(VeeValidate);

new Vue({
    components: {App},
    el: '#app',
    template: '<App></App>'
})
