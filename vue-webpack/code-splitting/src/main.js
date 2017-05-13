import Vue from 'vue/dist/vue'
import App from './App.vue'
import router from './router'

new Vue({
    el: '#app',
    components:{App},
    router,
    beforeCreate() {
        let _cookie = document.cookie;
        let flag = _cookie.split(';').some(c=> c.split('=')[0]=='name');
        console.log(this.$router.currentRoute.fullPath);
        !flag  &&  this.$router.push('/login')
    },
    template:'<App></App>'
})
