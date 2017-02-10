import Vue from 'vue';
import cookies from './cookie.js'
import config from './config.js'

export default {
    checkAccount: function() {

        let token = cookies.getCookie('token');
        console.log(token);
        Vue.http.headers.common['Authorization'] = token;
        Vue.http.get(`${config.API_ROOT}/API/getJson/getData4Test`).then((response) => {
            console.log(response);
        })
    }
}