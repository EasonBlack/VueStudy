<template>
    <ul class='container'
        v-bind:class="{
            active: active
        }">
        <li v-for='item in items'>
            {{item.title}}
        </li>
    </ul>
</template>

<script>

    export default{
        props: ['items','active']
    }
</script>

<style scoped>
    .container {
        display:block;
        position:absolute;
        top:80px;
        width:100vw;
        margin:0;
        padding:0;
        height:0px;
        overflow: hidden
    }
    .container.active {
        height:auto;
    }
    li {
        display:block;
        width:100vw;
        height:60px;
        line-height:60px;
        text-align:center;
        border-bottom:1px solid rgba(0,0,0,0.3);
    }
</style>