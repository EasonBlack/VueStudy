Vue.component('app', {
    props: [],
    template: `<div class="app__container">
         <ul class="app__list">     
            <app-item  v-for="(item, index) in items" :item="item" :index="index" v-bind:key="item"></app-item>
         </ul>
         <button v-on:click="show">Show</button>
         <button v-on:click="hide">Hide</button>
     </div>`,
    data: ()=> {
        return {
            items: [
                {title: 'One', bgc: 'steelblue', show: false},
                {title: 'Two', bgc: 'lightseagreen', show: false},
                {title: 'Three', bgc: 'lightcoral', show: false},
                {title: 'Four', bgc: 'lightyellow', show: false}
            ]
        }
    },
    methods: {
        show: function () {
            this.items.forEach((item,index)=> {
                setTimeout(()=> {
                    item.show = true;
                }, 100 * index)
            })
        },
        hide: function () {
            this.items.forEach((item,index)=> {
                setTimeout(()=> {
                    item.show = false;
                }, 100 * index)
            })
        }
    }
})