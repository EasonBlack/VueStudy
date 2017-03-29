
import Vue from 'vue';
import * as localForage from "localforage";

export default ()=> {
    Vue.http.interceptors.push(function(request, next) {
        
        next(function(data){
            localForage.setItem(request.url, data);
        });
    });
}