<template>
    <div class='cell__container'>
        <div class='cell__title'>{{title}}</div>
        <div class='cell__content'>{{content}}</div>
    </div>
</template>
<script>
    export default {
        props: ['title', 'content'],
        data: function() {
            return {}
        }
    }
</script>
<style lang='scss' scoped>
    .cell__container {
        width:100%;
        height:40px;
        display:flex;
        div {
            display:flex;
            align-items:center;
            padding-left:20px;
        }
    }
    .cell__title {
        flex: 0 0 30%;
        font-size:1.1em;
        background-color: rgba(steelblue, 0.6);
        color:white;
    }
    .cell__content {
        flex:1;
        background-color: #C0C0C0;
        font-weight: 600;
        border-bottom: 1px solid  rgba(steelblue, 0.6);
    }
</style>