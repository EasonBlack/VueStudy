Vue.component('app-item', {
    props: ['item'],
    template: `<li class="app__item"
                    v-bind:class="{show: item.show}"
                    :style="{backgroundColor: item.bgc}">
         This is Item {{item.title}} 
     </li>`
})