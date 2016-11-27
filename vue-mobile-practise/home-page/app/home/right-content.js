Vue.component('right-content', {
    template: `<div class="right-content__container">
          <div class="right-content__title-section">
                <span class="glyphicon glyphicon-menu-hamburger" v-on:click="toggleMenu"></span>   
                Home
          </div>
          <home-banner :images="images"></home-banner>
          <div class="right-content__submenu"></div>
          <div class="right-content__list">
          
          </div>
    </div>`,
    data: function () {
        return {
            images: [
                {id: 1, src: 'http://placehold.it/400/564782/000000'},
                {id: 2, src: 'http://placehold.it/400/128983/000000'},
                {id: 3, src: 'http://placehold.it/400/897251/000000'}
            ]
        }
    },
    methods: {
        toggleMenu: function () {
            this.$emit("toggleMenu")
        }
    }
})