<template>
    <div class='menu__container'>
        <div class='header'>
            DEMO
        </div>
        <ul>
            <parent-item v-for='menu in menus' :menu='menu'></parent-item>
        </ul>
    </div>
</template>
<script>
    import parentItem from './parent_item.vue';
    export default {
        props:['menus'],
        components: {parentItem}
    }
</script>
<style lang='scss' scoped>
    .menu__container {
        height:100vh;
        width:60px;
        background-color: rgba(black, 0.7);
        color: white;
        z-index:20;
    }
    .header {
        height:50px;
        line-height:50px;
        background-color: lightgreen;
        text-align:center;
        margin-bottom:10px;
    }
</style>