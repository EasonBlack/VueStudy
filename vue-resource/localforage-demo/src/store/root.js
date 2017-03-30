import  localForage from "localforage";
import Vue from 'vue'

export default (URL)=> {

    var promise = new Promise(function(resolve, reject) {
        localForage.getItem(URL)
            .then((d)=> {
                if(d) {
                    console.log('get from cache');
                    resolve(d);
                } else {
                    Vue.http.get(URL).then((response) => {
                        resolve(d);
                    })
                }
            })
    });
    return promise;

}