Vue.component('right-content', {
    template: `<div class="right-content__container">
          <div class="right-content__title-section">
                <span class="glyphicon glyphicon-menu-hamburger" v-on:click="toggleMenu"></span>   
                Home
          </div>
          <div class="right-content__main-section">
               <home-banner :images="images" ></home-banner>
               <home-sub-nav :icons="icons" :stick="subnavStick"></home-sub-nav>
               <div class="home-list__container">
                    <div class="home-list__item" v-for="item in items">
                      {{item.title}}
                     </div>
               </div>
          </div>
    </div>`,
    data: function () {
        return {
            subnavStick: false,
            images: [
                {id: 1, src: '/Vue-Study/assets/400_400_1.png'},
                {id: 2, src: '/Vue-Study/assets/400_400_2.png'},
                {id: 3, src: '/Vue-Study/assets/400_400_3.png'}
            ],
            icons: [
                {class: 'glyphicon-home'},
                {class: 'glyphicon-time'},
                {class: 'glyphicon-road'},
                {class: 'glyphicon-lock'},
                {class: 'glyphicon-picture'}
            ],
            items : [
                {title: 'Item One'},
                {title: 'Item Two'},
                {title: 'Item Three'},
                {title: 'Item Four'},
                {title: 'Item Five'},
                {title: 'Item Six'},
                {title: 'Item Seven'},
                {title: 'Item Eight'},
                {title: 'Item Nine'},
                {title: 'Item Ten'}
            ]
        }
    },
    methods: {
        toggleMenu: function () {
            this.$emit("toggleMenu")
        }
    },
    mounted: function() {
        $('.right-content__container').scroll((e) => {
            let $e = $(e.target);
            let _top = $e.scrollTop();
            if(_top > 150) {
                this.subnavStick = true;
            } else {
                this.subnavStick = false;
            }
        });

    }
})