Vue.component('app', {
    template: `<div class="main-container">
        <div class="header">Title</div>
        <div class="shop-card"></div>
        <div class="shop-services">
            <ul class="service-type-tab">
                 <li v-on:click="serviceTypeActive = 'menu'" 
                 v-bind:class="{active: serviceTypeActive == 'menu'}">Menu</li>
                 <li v-on:click="serviceTypeActive = 'comment'"
                  v-bind:class="{active: serviceTypeActive == 'comment'}">Comment</li>
                 <li v-on:click="serviceTypeActive = 'service'"
                  v-bind:class="{active: serviceTypeActive == 'service'}">Service</li>
            </ul>
            <div class="menu-container">
                <div class="menu-mask">
                    <ul class="menu-tabs" 
                    :style="{
                        height: 80 * menuData.length +'px'
                    }">
                        <li v-for="item in menuData"
                        v-on:click="menuTypeIdActive=item.id"
                        v-bind:class="{
                            active: menuTypeIdActive==item.id
                        }">
                       
                            {{item.title}}
                        </li> 
                    </ul>
                </div>
               
                <div class="menu-content">
                    <ul class="menu-items">
                        <li class="menu-item" v-for="item in selectMenuItems">
                            <menu-card :item="item"></menu-card>
                        </li>
                    
                    </ul>
                </div>
            </div>
            
        </div>
        <div></div>
        <div class="footer">
             <div class="foot-cost">$ {{totalCost}}</div>
             <div class="foot-check">CHECK-OUT</div>
        </div>
    </div>`,
    data: function () {
        return {
            serviceTypeActive: 'menu',
            menuTypeIdActive: null,
            menuData: []
        }
    },
    methods: {},
    created: function () {
        this.$http.get('data/menu.json').then((response) => {
            this.menuData = response.body;
            this.menuTypeIdActive = this.menuData[0].id;
        });
    },
    computed: {
        selectMenuItems: function () {
            return this.menuData.find((o)=> o.id == this.menuTypeIdActive).items;
        },
        totalCost: function () {
            let _total = 0;
            if(!this.menuData) return 0;
            this.menuData.forEach((group)=> {
                group.items.forEach((item)=> {
                    _total += item.num * item.price;
                })
            })
            return _total.toFixed(2);
        }
    }

})