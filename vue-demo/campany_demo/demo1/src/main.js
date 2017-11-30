import Vue from 'vue'
import App from './App.vue'
import router from './routes'

new Vue({
    el: '#app',
    router,
    template: `<App></App>`,
    components: {App}
})
