Vue.component('nav-list', {
    template: `
       <div class="nav__container"> 
            <ul >
                <li class="nav__hack"></li>
                <li v-for="(item,index) in items"
                    v-bind:class="{
                    active: activeNum == index
                 }"
                    v-on:click="activeNum = index">
                    {{item.title}}
                </li>
            </ul>
       </div>
        `,
    data: function() {
        return {
            activeNum: 0,
            items: [
                {title: 'AAAA'},
                {title: 'BBBB'},
                {title: 'CCCC'},
                {title: 'DDDD'},
                {title: 'EEEE'},
                {title: 'FFFF'},
                {title: 'GGGG'},
                {title: 'HHHH'}
            ]
        }
    },
    methods: {
        makeActive: function() {

        }
    },
    watch: {

    }
})