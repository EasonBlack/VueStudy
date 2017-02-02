<template>
    <ul class='pager__container'>
        <li v-for='i in count' @click='pagerHandle(i)'
            v-bind:class="{
                active: active == i
            }"
        >
        {{i}}
        </li>
    </ul>
</template>
<script>
    export default {
        props: ['current', 'count'],
        data: function() {
            return {
                active: 1
            }
        },
        methods: {
            pagerHandle: function(i) {
                this.active = i;
                this.$emit('pagerHandle', {val: i})
            }
        }
    }
</script>
<style lang='scss' scoped>
    .pager__container {
        list-style:none;
        display:block;
        position:absolute;
        right:50px;
        bottom:20px;
        li {
            display:inline-block;
            width:30px;
            height:30px;
            line-height:30px;
            text-align:center;
            border: 2px solid steelblue;
            border-radius: 6px;
            color: steelblue;
            margin-right:5px;
            cursor:pointer;
            &.active {
                color:white;
                background-color:steelblue;
            }
        }
    }
</style>