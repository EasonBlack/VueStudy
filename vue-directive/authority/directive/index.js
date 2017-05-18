import Vue from 'vue';
import vAuth from './authority';

const install = (Vue,options={})=>{
    Vue.directive('authority', vAuth());
}

export default {
    install
}