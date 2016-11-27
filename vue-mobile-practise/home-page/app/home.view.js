Vue.component('home', {
    template: `
    <div class="home__mask">
       <div class="home__container"
           v-bind:class="{
           'home__menu_active': menuActive
         }">
            <left-menu></left-menu>    
            <right-content v-on:toggleMenu="toggleMenu"></right-content>  
        </div>  
    </div>
    `,
    data: function () {
        return {
            menuActive: false
        }
    },
    methods: {
        toggleMenu: function () {
            this.menuActive = !this.menuActive;
        }
    }
})