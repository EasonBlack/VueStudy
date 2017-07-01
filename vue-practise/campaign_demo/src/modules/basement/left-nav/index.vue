<template>
     <ul class='menu__container'>
         <menu-wrapper v-for='menu in menus'
                    :menu='menu'  :key='menu.name'
         >
         </menu-wrapper>
     </ul>
</template>
<script>
    import { mapState } from 'vuex';
    import menuWrapper from './menu_item.vue';
    export default {
        components: {menuWrapper},
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                menus: (state) =>  state.menu.menus
            })
        }
    }
</script>
<style lang='scss' scoped>
    .menu__container {
        height:100vh;
        width: 100%;
        color: white;
        z-index:200;

    }

</style>