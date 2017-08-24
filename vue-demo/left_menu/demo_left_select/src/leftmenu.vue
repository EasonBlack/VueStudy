<template>
    <ul  class='menu__container'>
        <li v-for='item in items '>
            <div class='menu__item' 
                @click.stop='toggleSelect(item)'
                :class='{
                    hasSelect: item.items
                }'
            >
                {{item.title}}
            </div>     
            <transition name='toggle'>
                <menu-select :items='item.items' 
                v-if='item.items && showSelect' class='menu__item_select' 
                @menuSelectedHandle='menuSelectedHandle'
                @stopSelectMenu='stopSelectMenu'/>
            </transition>
            <transition name='itemselected'>
                <item-selected 
                v-if='item.items && menuSelected'  
                :item='menuSelected'
                class='menu__item_selected' />
            </transition>
        </li>
    </ul>
</template>

<script>
    import menuSelect from './leftmenu_select.vue';
    import itemSelected from './leftmenu_itemselected.vue';
    export default{
        components:{menuSelect, itemSelected},
        props: ['items'],
        data(){
            return{
                showSelect: false,
                menuSelected: null
            }
        },
        created() {

        },
        methods: {
            toggleSelect(item) {
                if(!item.items) return false;
                this.showSelect = !this.showSelect;
            },
            menuSelectedHandle(item) {
                this.menuSelected = item;
            },
            stopSelectMenu() {
                this.showSelect = false;
            }
        }
    }
</script>

<style lang='scss' scoped>
     .menu__item {
         line-height:50px;
         height:50px;
         text-align: center;
         width:100%;
         position:relative;
     }
     .hasSelect:after {
         content: '';
         position: absolute;
         width: 20px;
         height: 20px;
         background-color: black;
         top: 15px;
         right: 5px;
     }
     .menu__item_select {
         position:absolute;
         top:0;
         left:100%;  
         z-index:2;
     }
     .menu__item_selected {
         height:130px;
         color:steelblue;
         overflow: hidden;
     }
    .toggle-enter-active, .toggle-leave-active {
        transition: left .5s ease;   
        z-index:-1;
    }
    .toggle-enter, .toggle-leave-to {
        left :-180px; 
        z-index:-1;
    }

    .itemselected-enter-active, .itemselected-leave-active {
        transition: height .5s ease;
        
    }
    .itemselected-enter, .itemselected-leave-to {
        height :0px;
    }
</style>
