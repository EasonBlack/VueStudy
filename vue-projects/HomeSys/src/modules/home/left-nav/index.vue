<template>
    <div class='menu__container'>
        <ul>
            <parent-item v-for='menu in menus'
                         :menu='menu'
                         @activeMenu='activeMenu'
                         :activeName='activeName'></parent-item>
        </ul>
    </div>
</template>
<script>
    import parentItem from './parent_item.vue';
    export default {
        props:['menus'],
        components: {parentItem},
        data() {
            return {
                activeName: 'calendar'
            }
        },
        created: function() {
            this.activeName = this.$route.name;
            console.log(this.$route)
        },
        methods: {
            activeMenu:function(o) {
                this.activeName = o;
            }
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