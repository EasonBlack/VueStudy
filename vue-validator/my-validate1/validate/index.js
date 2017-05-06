import Vue from 'vue';
import myDirective from './directive';

const install = (Vue,options={})=>{
    Vue.directive('validate', myDirective());
}

export default {
    install
}