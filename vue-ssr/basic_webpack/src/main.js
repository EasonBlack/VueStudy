import Vue from 'vue'
import App from './App.vue'

export function createApp () {
    const app = new Vue({
        // the root instance simply renders the App component.
        render: h => h(App)
    })
    return { app }
}


// new Vue({
//     el: '#app',
//     render: h => h(App)
// })
