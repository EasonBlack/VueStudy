Vue.component('left-menu-item', {
    props: ['item'],
    template: `<li class="left-menu__item"
                    v-bind:class="{show: item.show}"
                    :style="{backgroundColor: item.bgc}">
         This is Item {{item.title}} 
     </li>`
})