<template>
    <li class='sub-item__container'>
        {{subitem.text}}
    </li>
</template>
<script>
    export default {
        props: ['subitem']
    }
</script>
<style lang='scss' scoped>
    .sub-item__container {
        height:30px;
        line-height:30px;
        color:white;
         background-color: blue;
        &:hover {
            background-color: rgba(grey, 0.5);
        }
    }
</style>