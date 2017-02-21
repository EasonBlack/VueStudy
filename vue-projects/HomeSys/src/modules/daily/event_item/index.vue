<template>
    <div class='event-item__container'>
        <div  :style="{
        backgroundColor: colors[item.type-1]
         }"
        @click='clickHandle(item)'>
            {{item.name}}
        </div>
    </div>
</template>
<script>

    export default {
        props:['item'],
        data() {
            return {
               colors: ['#CF6066','#27727B','#FCCE10','#E87C25','#B5C334','#D9E5ED', '#FFC7C7', '#97866E', '#1DB496','#B4597E'],
            }
        },
        methods: {
            clickHandle: function(item) {
                this.$emit('clickHandle', {val: item});
            }
        },

    }
</script>
<style lang='scss' scoped>
    .event-item__container {
        max-width:20%;
        min-width:20%;
        padding:0 10px;
        margin-bottom:10px;
        div {
            height:30px;
            line-height:30px;
            padding-left:20px;
            color:white;
        }
    }
</style>