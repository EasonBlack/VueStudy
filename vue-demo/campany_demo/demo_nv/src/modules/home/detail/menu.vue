<template>
    <ul class='detail-menus nav nav-fill w-100'>
        <li class='nav-item' v-for='(menu, $index) in menus' :key='$index'>
            <a class='nav-link'  @click='selectMenu(menu)'
                :class='{active: selectedMenu==menu.id}'
            >
                {{menu.title}}
            </a>
        </li>
    </ul>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        data() {
            return {
            }
        },
        methods: {
            selectMenu(menu) {
                this.$store.commit('selectAccountDetailMenu', menu.id)
            }
        },
        computed: {
            ...mapState({
                menus: (state) => state.account_detail.menus,
                selectedMenu: (state) => state.account_detail.selectedMenu
            })
        }
    }
</script>
<style lang='scss' scoped>
    .detail-menus {
        background-color: #2C3E50;
        li {
            color: white;
            a {
                padding:10px 0;
            }
            .active {
                background-color: #E6E0E0;
                color: #000;
            }
        }
    }
</style>