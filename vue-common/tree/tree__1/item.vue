<template>
    <div class="item__container">
        <div class="parent__wrapper">
            <i class="icon-plus-squared item-icon"
               :class="{
                   'icon-haschild': item.items && item.items.length > 0,
                   'icon-plus-squared': !isExpand,
                   'icon-minus-squared': isExpand
               }"  @click="expand"></i>
            {{item.title}}
        </div>
        <div class="children__wrapper" v-show="isExpand">
            <item-wrapper v-for="t in item.items" :item="t"></item-wrapper>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'item-wrapper',
        components: {
            'item-wrapper': this
        },
        props: ['item'],
        data(){
            return{
                isExpand: false
            }
        },
        methods: {
            expand() {
                this.isExpand= !this.isExpand;
            }
        }
    }
</script>

<style lang='scss' scoped>
    .item__container {
        width: 100%;
    }
    .parent__wrapper {
        width:100%;
        height:25px;
    }
    .children__wrapper {
        padding-left:20px;
    }
    .item-icon {
        display:none;
    }
    .icon-haschild {
        display: inline-block;
    }
</style>
