<template>
    <div class='menu__container'
        v-bind:class="{
            unactive : active
        }">
        this is right menu
    </div>
</template>
<script>
    export default {
        props:['active']
    }
</script>
<style lang='scss' scoped>
    .menu__container {
        width:400px;
        height:100vh;
        background-color: grey;
        transition:all 0.3s ease;
        argin-right: 0px;
        &.unactive {
            margin-right:-400px;
        }
    }
</style>