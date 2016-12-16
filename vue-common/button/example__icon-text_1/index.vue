<template>
    <a class='button__wrapper' v-on:click='clickHandle'>
        <img :src="item.src ? item.src : null"/>
        <span>{{item.text}}</span>
    </a>
</template>

<script>

    export default{
        props: ['item'],
        data:function(){
            return {
            }
        },
        methods: {
            clickHandle:function() {
                this.$emit('clickHandle');
            }
        },

    }
</script>

<style lang='scss' scoped>
    .button__wrapper {
        display: inline-flex;
        align-items: center;
        height:40px;
        line-height:40px;
        padding: 0px 20px;
        background-color: white;
        color:#AFAFAF;
        img {
            width:0px;
            height:0px;
        }
        img[src] {
            width:30px;
            height:30px;
        }
    }

</style>
