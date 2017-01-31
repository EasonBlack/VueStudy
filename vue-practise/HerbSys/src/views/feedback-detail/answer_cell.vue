<template>
    <div class='answer-cell__container'>
        <div class='answer__title'>
            {{title}}
        </div>
        <div class='answer__content'>
            <div v-for='c in contents'>
                {{c}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['title', 'contents'],
        data: function() {
            return {
            }
        }
    }
</script>
<style lang='scss' scoped>
    .answer-cell__container {
        width:100%;
        margin-bottom:10px;
        padding-left:20px;
    }
    .answer__title {
        width:100%;
        height:30px;
        line-height:30px;
        font-size:1.1em;
        padding-left:10px;
    }
    .answer__content {
        padding-left:10px;
        div {
            margin-bottom:5px;
        }
    }
</style>