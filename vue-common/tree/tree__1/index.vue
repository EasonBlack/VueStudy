<template>
    <div class="tree__wrapper">
        <item-wrapper v-for="t in items" :item="t"></item-wrapper>
    </div>
</template>

<script>
    import itemWrapper from './item.vue'
    export default{
        components:{itemWrapper},
        props: ['items'],
        data(){
            return{}
        }
    }
</script>

<style lang='scss' scoped>
    .tree__wrapper {
        width:100%;
        height:100%;
    }
</style>
