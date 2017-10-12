<template>
    <div class='menu__container'>
        <ul>
            <parent-item v-for='menu in menus'
                         :menu='menu'
                         @activeMenu='activeMenu'
                         :activeName='activeMenuName'></parent-item>
        </ul>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import parentItem from './parent_item.vue';
    export default {
        props:['menus'],
        components: {parentItem},
        data() {
            return {}
        },
        created: function() {
            this.$store.commit('setActiveMenu', this.$route.name)
        },
        methods: {
            activeMenu:function(o) {
                this.$store.commit('setActiveMenu', o)
            }
        },
        computed: {
            ...mapState({
                activeMenuName : (state)=> state.menu.activeMenu
            })
        }

    }
</script>
<style lang='scss' scoped>
    .menu__container {
        height:100vh;
        width: 100%;
        background-color: #213242;
        color: white;
        z-index:200;

    }

</style>