<template>
     <ul class='menu__container'>
         <store-menu-item v-for='store in storelist' v-if='storelist.length'  :key='store.name' :store='store'>
            <div slot='menu' class='store__menu'>
                <menu-wrapper v-for='menu in menus'
                          :menu='menu'  :key='menu.name'
                >
                </menu-wrapper>
            </div>

         </store-menu-item>

     </ul>
</template>
<script>
    import { mapState } from 'vuex';
    import menuWrapper from './menu_item.vue';
    import storeMenuItem from './store_item.vue';
    export default {
        components: {menuWrapper, storeMenuItem},
        data() {
            return {

            }
        },
        created() {
            this.$store.dispatch('getStoreList');
        },
        computed: {
            ...mapState({
                menus: (state) =>  state.menu.menus,
                storelist: (state)=> state.store.storelist
            })
        }
    }
</script>
<style lang='scss' scoped>
    @import '~$commonstyles/_settings.variable.scss';
    .menu__container {
        height:100%;
        width: 100%;
        z-index:200;
        border-right: 1px solid #EDECEB;
    }
    .store__menu {
        padding-left: 60px;
    }

</style>