<template>
    <ul class='parent'>
        <li class='item' v-for='item in items' :key='item.id' >
            <div @click.prevent.stop='activeItem(item)'>{{item.name}}</div>
            <menu-items class='child' :items='item.children' v-if='item.active'/>
        </li>
      
    </ul>
</template>
<script>
    export default {
        name: 'menu-items',
        components: { menuItems: this },
        props: ['items'],
        methods: {
            activeItem(item) {
                item.active = !item.active;
            }
        }
    }
</script>
<style lang='scss' scoped>
    .item {
        position:relative;
        width:100px;
        height:40px;
    }
    .child {
        position:absolute;
        left: 100px;
        top:0;

    }
</style>