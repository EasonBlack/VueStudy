import Vue from 'vue';
import vDrag from './drag';

const install = (Vue,options={})=>{
    Vue.directive('drag', vDrag());
}

export default {
    install
}