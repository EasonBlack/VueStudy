Vue.component('app', {
    props: [],
    template: `<div id="app__container">
        <app-svg  v-on:actMenu="actMenu"></app-svg>
        <left-menu :active="active"></left-menu>
        <right-menu :active="active"></right-menu>
    </div>`,
    data: ()=> {
        return {
            active: false
        }
    },
    methods: {
        actMenu: function (obj) {
            this.active = obj.active;
        }
    }
})