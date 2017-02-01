<template>
    <ul class='pager__container'>
        <li v-for='i in count'>{{i}}</li>
    </ul>
</template>
<script>
    export default {
        props: ['current', 'count'],
        data: function() {
            return {}
        }
    }
</script>
<style lang='scss' scoped>
    .pager__container {
        list-style:none;
        display:block;

        li {
            display:inline-block;
        }
    }
</style>