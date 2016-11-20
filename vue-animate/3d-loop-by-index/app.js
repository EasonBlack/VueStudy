Vue.component('app', {
    props: [],
    template: `<div class="app__container">
         <ul class="app__list"> 
           <!--<li v-for="(itemback,index) in backItems" class="app__item"-->
               <!--v-bind:key="itemback"-->
               <!--v-bind:class="{blur: itemback.blur}"-->
               <!--:style="{ bottom: 200 * ( 0.45 * index) + 'px' , -->
                         <!--right: index * 2 + 'px',-->
                         <!--width: 300 * (1 - 0.15 * index) + 'px' ,-->
                         <!--height: 300 * (1 - 0.2 * index)+ 'px',-->
                         <!--'background-color': itemback.bgc,-->
                         <!--opacity: 1 - index * 0.2,-->
                         <!--zIndex: 20-index -->
                   <!--}"-->
           <!--&gt;-->
                <!--This is Item {{itemback.title}} -->
           <!--</li>-->
           <app-item  v-for="(item, index) in items" 
                    :item="item" 
                    :index="index" 
                    >
           </app-item>
         </ul>
         <ul>
            <li v-for="item in originItems">
               <input type="radio" name="cc" v-on:click="selectIt(item)" />
               <span>{{item.title}}</span>
            </li>
         </ul>
       
      
     </div>`,
    data: ()=> {
        return {
            originItems: [
            ],
            items: [
                {id: 1, title: 'One', bgc: 'steelblue'},
                {id: 2, title: 'Two', bgc: 'lightseagreen'},
                {id: 3, title: 'Three', bgc: 'lightcoral'},
                {id: 4, title: 'Four', bgc: 'lightyellow'}
            ],
            firstItem: {}
        }
    },
    mounted: function () {
         this.originItems = this.items.slice();
    },
    methods: {
        selectIt: function (item) {
            let _index = this.items.findIndex((t) => t.id == item.id);
            // this.backItems = [];
            // for (let i = 0; i < _index; i++) {
            //     this.backItems.push(this.items[i]);
            //     setTimeout(() => {
            //         this.backItems[this.backItems.length - 1].blur = true;
            //     }, 10);
            // }
            for (let i = 0; i < _index; i++) {
                let _theItem = this.items[0];
                this.items.splice(0, 1);
                this.items.push(_theItem);
            }
        },

    }
})