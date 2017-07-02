<template>
    <li class='menu-item__container  flex__center'
        @click='activeMenu(menu.name)'
       >
        <div class='item__wrapper'
             :class="{
             }"
        >
            <label>{{menu.title}}</label>
        </div>
    </li>
</template>

<script>
    export default {
        props: ['menu'],
        methods: {
            activeMenu: function(name) {
                this.$router.push(`/${name}`)
            }
        }
    }
</script>
<style lang='scss' scoped>
    $item_height : 50;
    .menu-item__container {
        cursor: pointer;
        height:#{$item_height}px;
        z-index:15;
        &:hover label{

        }
        .item__wrapper {
            z-index:40;
            width: 100%;
            height:100%;
            display: flex;
            align-items: center;
            &.active {
                background-color: #3BAA98;
                label {
                    color: white;
                }
            }
        }
        label {
            font-size:0.8em;
            font-weight:700;
            display:inline-block;
            width: 100%;
            color: #595854;
            z-index: 35;
        }
    }
</style>