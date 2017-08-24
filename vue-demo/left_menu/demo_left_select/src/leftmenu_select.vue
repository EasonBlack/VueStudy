<template>
    <ul>
        <li v-for='item in items' >
            <div :style='{
                backgroundColor:item.color
            }'></div>
            <div @click='itemSelected(item)'>{{item.title}}xxx</div>
        </li>
    </ul>
</template>
<script>
    export default {
        props:['items'],
        methods: {
            itemSelected(item) {
                this.$emit('stopSelectMenu')
                this.$emit('menuSelectedHandle', item)
            }
        }
    }
</script>
<style lang='scss' scoped>
    ul {
        width:180px;
        background-color: #ccc;
    }
    li {
        width:100%;
        height:40px;
        line-height:40px;
        display:flex;
        border-bottom:1px solid #eee;
    }
    li:last-child {
        border-bottom:none;
    }
    li div:first-child {
        width: 30px;
        height:100%;
    }
    li div:last-child {
        flex:1 ;
        display:flex;
        align-items:center;
        justify-content:center;
    }
</style>