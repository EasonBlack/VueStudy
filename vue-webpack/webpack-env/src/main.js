import Vue from 'vue'

console.log(process.env);
console.log(process.env.ENV);
let App  = null
if(process.env.ENV == 'test') {
    App = require('./App2.vue')
} else {
    App = require('./App1.vue')
}


new Vue({
    el: '#app',
    render: h => h(App)
})
