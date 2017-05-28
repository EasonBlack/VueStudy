<template>
    <div
        class='item__container'
    >
        <div class='item_bar'
            :style="{
                width: item.num * 5 +'px'
             }">
             {{item.title}}
        </div>
    </div>
</template>
<script>
    export default {
        props: ['item', 'index'],
        data() {
            return {
            }
        },
        created() {
            setInterval(()=>{
                let _num = Math.floor(Math.random() * 10);
                this.$emit('update', parseInt(this.item.num) + _num, this.index);
            },2000)
        },
        computed: {

        }
    }
</script>
<style lang='scss' scoped>
    .item__container {
        position:relative;
    }
    .item_bar {
        color:white;
        background-color: steelblue;
        margin-bottom:5px;
        transition:  width 1s;
    }
</style>