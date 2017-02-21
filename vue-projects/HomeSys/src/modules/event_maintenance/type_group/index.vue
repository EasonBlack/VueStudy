<template>
    <div class='type-group__container'>
        <div class='type-group__title'>{{group.name}}</div>
        <ul>
            <li v-for='item in group.items'>
                {{item.name}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: ['group'],
        data() {
            return {}
        }
    }
</script>
<style lang='scss' scoped>
    .type-group__container {
        border: 2px solid lightgreen;
    }
    .type-group__title {
        height:30px;
        line-height:30px;
        padding:0 10px;
        background-color: lightgreen;
    }
    ul {
        display:block;
        border-radius:2px;
        margin-bottom:10px;
        li {
            padding:10px;
        }
    }
</style>