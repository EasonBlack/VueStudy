import Vue from 'vue'


let App  =require('./App1.vue')
let aa = require('./aaa.tx')

console.log(aa);

new Vue({
    el: '#app',
    render: h => h(App)
})
