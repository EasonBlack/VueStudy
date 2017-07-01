<template>
    <div class='app__container'>
        <div class='header__container'>
            <header-bar></header-bar>
        </div>
        <div class='body__container'>
            <div class='left__container'>
                <left-nav></left-nav>
            </div>
            <div class='right__container'>
                 <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import leftNav from './left-nav/index.vue';
    import headerBar from './header.vue';
    export default {
	    components: {leftNav, headerBar}
    }
</script>

<style lang='scss' scoped >
    @import '~$commonstyles/_settings.variable.scss';
    .app__container {
        width:100vw;
        min-height:100vh;
        overflow:hidden;
    }

    .header__container {
        width:100vw;
        height: #{$header_height}px;
    }

    .body__container {
        width:100vw;
        display:flex;
        height: calc(100vh - #{$header_height}px);
        background-color: #{$main_grey};
    }

    .left__container {
        width:#{$left_menu_width}px;
        height:100%;
    }
    .right__container {
        flex:1;
        height:100%;
        overflow:hidden;
        overflow-y: auto;
    }
</style>