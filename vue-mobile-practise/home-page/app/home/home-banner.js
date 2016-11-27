Vue.component('home-banner', {
    props: ['images'],
    template: `
       <div class="banner__wrapper">
               <ul class="banner__list" 
                   :style="{
                       width,
                       marginLeft
                   }">
                    <li v-for="image in images">
                    <img 
                    style="width:100vw;height:150px;" 
                    :src="image.src"/>
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
            return 100 * this.images.length + 'vw';
        },
        marginLeft: function () {
            return -1 * this.position * 100 + 'vw';
        }
    },
    mounted: function () {
        let max = this.images.length - 1;
        $('.banner__list').on('swiperight', ()=> {
            if (this.position > 0) {
                this.position--;
            }

        })
        $('.banner__list').on('swipeleft', ()=> {
            if (this.position < max) {
                this.position++;
            }

        })
    }
})