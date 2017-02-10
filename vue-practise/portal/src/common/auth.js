import Vue from 'vue';
import cookies from './cookie.js'
import config from './config.js'

export default {
    checkAccount: function(cb) {

        let token = cookies.getCookie('token');
        console.log(token);
        Vue.http.headers.common['Authorization'] = token;
        Vue.http.get(`${config.API_ROOT}/api/test/checkAccount`).then((response) => {
            console.log(response);
            if(cb){
                cb(response.body)
            }
        })
        
        // Vue.http.get(`${config.API_ROOT}/API/getJson/getData4Test`).then((response) => {
        //     console.log(response);
        // })
    }
}