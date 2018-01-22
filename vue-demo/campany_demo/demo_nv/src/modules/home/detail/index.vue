<template>
    <div class='container'>
        <div class='row'>
            <detail-menus />
        </div>
        <div class='row'>
            <component v-bind:is="selectedMenu">
            </component>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import detailMenus from './menu.vue';
    import accountDetails from './accountDetails.vue';
    import customerDetails from './customerDetails.vue';
    import billHistory from './billHistory.vue';

    export default {
        components: {detailMenus, accountDetails , customerDetails, billHistory},
        computed: {
            ...mapState({
                selectedMenu: (state) => state.account_detail.selectedMenu
            })
        }
    }
</script>
<style lang='scss' scoped>
</style>