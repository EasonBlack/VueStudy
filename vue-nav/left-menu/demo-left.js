Vue.component('left-menu', {
    props: ['menus'],
    template: `<ul>
         <li v-for="menu in menus" v-on:click="toggleSub(menu)">
             {{menu.name}} | {{menu.active}}
             <transition name="submenu">
              <ul class="app__submenu_list" v-if="menu.active">
                  <li v-for="sub in menu.children">
                      {{sub.name}}
                  </li>
             </ul>
             </transition>
         </li>
    </ul>`,
    methods: {
        toggleSub: function (menu) {
            menu.active = !menu.active;
        }
    }
})