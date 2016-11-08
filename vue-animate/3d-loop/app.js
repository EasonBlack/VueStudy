Vue.component('app', {
    props: [],
    template: `<div class="app__container">
         <ul class="app__list">
           <transition-group name="item-list" tag="ul">
                <app-item  v-for="(item, index) in items" :item="item" :index="index" v-bind:key="item"></app-item>
           </transition-group> 
         </ul>
         <button v-on:click="next">Next</button>
     </div>`,
    data: ()=> {
        return {
            items: [
                {index: 1, title: 'One', bgc: 'steelblue'},
                {index: 2, title: 'Two', bgc: 'lightseagreen'},
                {index: 3, title: 'Three', bgc: 'lightcoral'},
                {index: 4, title: 'Four', bgc: 'lightyellow'}
            ]
        }
    },
    methods: {
        next: function() {
            let _first = 1;
            let _last = this.items.length;
            let _theItem = this.items[0];
            this.items.splice(0,1);
            this.items.push(_theItem);
        }
    }
})