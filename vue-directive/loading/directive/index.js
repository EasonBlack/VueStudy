import Vue from 'vue';
import vLoading from './loading';

const install = (Vue,options={})=>{
    Vue.directive('loading', vLoading());
}

export default {
    install
}