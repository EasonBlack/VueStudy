import Vue from 'vue';
import countup from './countup';

const install = (Vue,options={})=>{
    Vue.directive('countup', countup());
}

export default {
    install
}