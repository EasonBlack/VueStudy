Vue.component('right-menu', {
    props: ['active'],
    template: `<div class="app__right-menu_container">
         <ul class="right-menu__list">     
            <right-menu-item  v-for="(item, index) in items" :item="item" v-bind:key="item"></right-menu-item>
         </ul>
         <!--<button v-on:click="show">Show</button>-->
         <!--<button v-on:click="hide">Hide</button>-->
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
    watch: {
      'active' : function(val, oldval) {
          if(val==true && val !=oldval) {
              this.items.forEach((item,index)=> {
                  setTimeout(()=> {
                      item.show = true;
                  }, 100 * index)
              })
          } else if(val == false && val != oldval) {
              this.items.forEach((item,index)=> {
                  setTimeout(()=> {
                      item.show = false;
                  }, 100 * index)
              })
          }
      }
    }
})