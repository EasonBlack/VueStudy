Vue.component('home-sub-nav', {
    props: ['icons', 'stick'],
    template: `
    <div  class="subnav__wrapper"
          v-bind:class="{
           stick: stick
        }">
       <ul class = "subnav__list" 
            :style="{
              width,
              marginLeft
          }">
         <li v-for="icon in icons" class="glyphicon"
             v-bind:class="[icon.class]">
         </li>
       </ul>
     </div>
    `,
    data: function () {
        return {
            position: 0
        }
    },
    computed: {
        width: function () {
            return this.icons.length * 25 + 'vw'
        },
        marginLeft: function () {
            return -1 * this.position * 25 + 'vw';
        }
    },
    mounted: function () {
        let max = this.icons.length - 4;
        $('.subnav__list').on('swiperight', ()=> {
            if (this.position > 0) {
                this.position--;
            }

        })
        $('.subnav__list').on('swipeleft', ()=> {
            if (this.position < max) {
                this.position++;
            }

        })
    }
})