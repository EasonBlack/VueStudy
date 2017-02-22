Vue.component('menu-list', {
    props: ['menus'],
    template: `<div class="menu__list">        
            <ul >
                <li v-for="menu in menus" @click="activeMenuHandle(menu)">
                     <div class="title__container">
                        {{menu.name}}
                     </div>
                     <div class="content__container"
                        v-bind:class="{
                            active: activeMenu == menu.id
                        }"
                     >
                         <slot></slot>
                     </div>
                 </li>
        </ul>
    </div>`,
    data() {
        return {
            activeMenu : this.menus[0].id
        }
    },
    methods: {
        activeMenuHandle: function (menu) {
            this.activeMenu = menu.id;
        }
    }
})