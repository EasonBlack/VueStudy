Vue.component('app', {
    props: [],
    template: `<div class="app__container">
           <button v-on:click="toggleButton">Toggle Button</button>
           <ul class="app__button-array-list">
               <li v-for="(item, index) in items"
                 v-bind:class="{
                  active: active
               }"
                  :style = "{
                      transition: 'bottom 0.3s ease ' + index * 0.2 + 's',
                      left: index * 120 + 'px'
                  }"
               >
                    <a class="btn">{{item.title}}</a>
                </li>
            </ul>
     </div>`,
    data: ()=> {
        return {
            active: false,
            items: [
                {index: 1, title: 'One'},
                {index: 2, title: 'Two'},
                {index: 3, title: 'Three'},
                {index: 4, title: 'Four'}
            ]
        }
    },
    methods: {
        toggleButton: function() {
            this.active = !this.active;
        }
    }
})