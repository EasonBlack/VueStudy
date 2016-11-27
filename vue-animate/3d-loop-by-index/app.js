Vue.component('app', {
    props: [],
    template: `<div class="app__container">
 
         <transition-group name="list" tag="ul" class="app__list">
          <app-item  v-for="(item, index) in items" 
                    :item="item" 
                    :index="index" 
                    :key = 'item'
                    >
           </app-item>
         </transition-group>
          
         <ul>
            <li v-for="item in originItems">
               <input type="radio" name="cc" v-on:click="selectIt(item)" />
               <span>{{item.title}}</span>
            </li>
         </ul>
       
      
     </div>`,
    data: ()=> {
        return {
            originItems: [],
            items: [
                {id: 1, title: 'One', bgc: 'steelblue', ready: false},
                {id: 2, title: 'Two', bgc: 'lightseagreen', ready: false},
                {id: 3, title: 'Three', bgc: 'lightcoral', ready: false},
                {id: 4, title: 'Four', bgc: 'lightyellow', ready: false}
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
            for (let i = 0; i < _index; i++) {
                //this.items[i].ready = true;
                setTimeout(()=> {
                    this.items[i].ready = true;
                }, 200 * i)

            }
            setTimeout(()=> {
                for (let i = 0; i < _index; i++) {
                    let _theItem = this.items[0];
                    _theItem.ready = false;
                    this.items.splice(0, 1);
                    setTimeout(()=> {
                        this.items.push(_theItem);
                    }, 300 * i)
                }
            }, 200 * _index)
        },

    }
})