Vue.component('app-item', {
    props: ['item', 'index'],
    template: `<li class="app__item"
             
                   :style="{ bottom: 200 * ( 0.45 * index) + 'px' , 
                         right: index * 2 + 'px',
                         width: 300 * (1 - 0.15 * index) + 'px' ,
                         height: 300 * (1 - 0.2 * index)+ 'px',
                         'background-color': item.bgc,
                         opacity: 1 - index * 0.2,
                         zIndex: 20-index 
                   }"
                >
         This is Item {{item.title}} 
     </li>`
})