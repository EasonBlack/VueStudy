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
    .menu-item__container {
        cursor: pointer;
        height:100px;
        z-index:15;
        &:hover label{
            color: #3BAA98;
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
            display:inline-block;
            width: 100%;
            text-align: center;
            z-index: 35;
        }
    }
</style>