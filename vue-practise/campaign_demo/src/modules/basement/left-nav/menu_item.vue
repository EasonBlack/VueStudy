<template>
    <li class='menu-item__container'>
        <div class='item__wrapper flex__center'>
            <div class='flex__left' @click='activeMenu(menu.href)'>
                 <label>{{menu.title}}</label>
            </div>
            <div class='item__wrapper_right  flex__center'>
                <div class="arrow__wrapper" v-if='menu.items'>
                    <span class="arrow down"></span>
                </div>
            </div>
        </div>
        <ul class='submenu__list' v-if='menu.items'>
            <li v-for='submenu in menu.items' @click='activeMenu(submenu.href)'>{{submenu.title}}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        props: ['menu'],
        methods: {
            activeMenu: function(name) {
                if(!name) return;
                this.$router.push(`/${name}`)
            }
        }
    }
</script>
<style lang='scss' scoped>
    @import '~$commonstyles/_settings.variable.scss';
    $item_height : 50;
    .menu-item__container {
        cursor: pointer;
        &:hover label{
        }
        .item__wrapper {
            width: 100%;
            height:#{$item_height}px;
            display: flex;
            align-items: center;
            &.active {
                background-color: #3BAA98;
                label {
                    color: white;
                }
            }
        }
        .item__wrapper_right {
            width: #{$left_menu_right_icon_width}px;
        }
        label {
            font-size:0.8em;
            font-weight:700;
            display:inline-block;
            width: 100%;
            color: #595854;
        }
    }

    .submenu__list {
        background-color: #EAEAE9;
        margin-left: -60px;
        li {
            margin-left:60px;
            font-size:0.8em;
            font-weight:700;
            height:#{$item_height}px;
            display: flex;
            align-items: center;
            color: #595854;
            padding-left:20px;
            &:before {
                content: '';
                position:absolute;
                top:calc(50% - 6px);
                left:0;
                width:6px;
                height:6px;
                border-radius:50%;
                border: 3px solid #595854;
            }
        }
    }

    .arrow__wrapper {
        width:10px;
        height:10px;
    }
    .arrow {
        display: block;
        width:100%;
        height:100%;
        border-bottom:3px solid black;
        border-right:3px solid black;
        transition:transform 0.3s ease;
    }
    .down {
        transform: rotate(45deg);
    }
    .up {
        transform: rotate(225deg);
    }
</style>