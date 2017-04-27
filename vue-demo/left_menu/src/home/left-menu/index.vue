<template>
    <div class='left__container'>
        <menu-section :items='items' @expandMenu='expandMenu'></menu-section>
        <transition name="submenu">
            <submenu-section :items='submenuItem.items' v-if='submenuItem.items && submenuItem.items.length' ></submenu-section>
        </transition>
    </div>
</template>

<script>
    import menuSection from './menu.vue';
    import submenuSection from './submenu.vue';
    export default{
        components: {menuSection,submenuSection},
        props: ['items'],
        data(){
            return{
                submenuItem: {}
            }
        },
        watch: {
             '$route.path':function(nv){

             }
        },
        created() {
            let _url = this.$route.path;
            let paths = _url.substring(1,_url.length).split('/');
            let _parent = this.items.find(item=>item.name==paths[0])
            if(_parent.items) {
                this.submenuItem = _parent;
            }
        },
        methods: {
            expandMenu(name) {
                let _item = this.items.find(o=>o.name==name);
                if(_item.items && this.submenuItem.name !=_item.name) {
                    this.submenuItem = _item;
                }  else {
                    this.submenuItem = {};
                }
            }
        }

    }
</script>

<style lang='scss' scoped>
    .left__container {
        display:flex;
        height:100%;
        position:relative;
        background-color: lightgreen;
    }

    .submenu-enter-active {

        transition: max-width 1s ease;
    }
    .submenu-enter {
        max-width: 0px !important;
    }
    .submenu-leave {
        max-width:200px;
    }
    .submenu-leave-active {
       max-width: 0px !important;
       transition: max-width 1s ease;
    }

</style>
