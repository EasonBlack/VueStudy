Vue.component('app', {
    props: [],
    template: `<div class="app__container">
         <ul class="app__list"> 
           <app-item :item="firstItem" :index="'0'" class="app__item_first" v-bind:class="{blur: firstItem.blur || false}"></app-item>
           <app-item  v-for="(item, index) in items" 
                    :item="item" 
                    :index="index" 
                    v-bind:key="item">
           </app-item>
         </ul>
       
         <button v-on:click="next">Next</button>
         <button v-on:click="third">Show Third</button>
     </div>`,
    data: ()=> {
        return {
            items: [
                {index: 1, title: 'One', bgc: 'steelblue', ready: false},
                {index: 2, title: 'Two', bgc: 'lightseagreen', ready: false},
                {index: 3, title: 'Three', bgc: 'lightcoral', ready: false},
                {index: 4, title: 'Four', bgc: 'lightyellow', ready: false}
            ],
            firstItem: {}
        }
    },
    mounted: function () {
        this.firstItem = this.items[0];
    },
    methods: {
        next: function () {
            let _first = 1;
            let _last = this.items.length;
            let _theItem = this.items[0];
            this.firstItem.blur = true;

            this.items.splice(0, 1);
            this.items.push(_theItem);

            setTimeout(() => {
                this.firstItem = this.items[0];
                this.firstItem.blur=false;
            },500)
        },

        next_first_disappear_slow: function () {
            let _first = 1;
            let _last = this.items.length;
            let _theItem = this.items[0];
            setTimeout(() => {
                this.items.splice(0, 1);
                _theItem.ready = false;
                this.items.push(_theItem);
            }, 400)
        },

        third: function () {
            let num = 3;
            for (let i = 0; i < num; i++) {
                //this.next();
                setTimeout(() => {
                    this.next()
                }, 750 * i)
            }

        }
    }
})