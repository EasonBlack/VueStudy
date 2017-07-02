<template>
    <div class='store__container'>
        <div class='storemenu__container'>
            <div class='storemenu__left flex__1'>
                <div class='storemenu__logo'>
                    <img :src='store.logo' />
                </div>
                <div class='storemenu__content'>
                    <div class='storemenu__name flex__h-center'>{{store.title}}</div>
                    <div class='storemenu__address flex__h-center'>{{store.address}}</div>
                </div>
            </div>
            <div class='storemenu__right flex__center '>
                <div class="arrow__wrapper down">
                     <span class="arrow arrow__direct"></span>
                </div>
            </div>
        </div>
        <slot name='menu'></slot>
    </div>

</template>
<script>
    export default {
        props:['store']
    }
</script>
<style lang='scss' scoped>
    @import '~$commonstyles/_settings.variable.scss';
    $item_height : 100;
    .store__container {

    }
    .storemenu__container {
        width:100%;
        height:#{$item_height}px;
        display:flex;
        align-items: center;
        padding: 0px #{$header_padding}px;
        border-bottom: 1px solid #EDECEB;
    }
    .storemenu__left {
        display:flex;
    }
    .storemenu__right {
        width:50px;
    }
    .storemenu__logo {
        height:100%;
        display:flex;
        align-items: center;
        margin-right:10px;
        img {
            width:#{50 * 0.8}px;
            height:#{50 * 0.8}px;
        }
    }
    .storemenu__content {
        flex: 1;
        display:flex;
        flex-direction:column;
        .storemenu__name {
            flex: 1;
            color: #604F4A;
        }
        .storemenu__address {
            flex: 1;
            color: #7D6D67;
        }
    }


    .arrow__wrapper {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #C3BFB8;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .arrow {
        display: block;
        width:40%;
        height:40%;
        border-bottom:2px solid white;
        border-right:2px solid white;
        transition:transform 0.3s ease;
    }
    .arrow__wrapper.down  .arrow__direct {
        transform: rotate(45deg);
    }
    .arrow__wrapper.up  .arrow__direct{
        transform: rotate(225deg);
   }
</style>