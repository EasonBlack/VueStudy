<template>
    <div class='header'>
        <div class='header__left'>
            <div class='header__logo flex__center'>BBBBB</div>
            <div class='header__title flex__center has__cutoff'>Manage Campaign</div>
        </div>
        <div class='header__right'>
            <div class='header__user flex__center has__cutoff'>Admin Michael</div>
        </div>
    </div>
</template>
<script>
    export default {
    }
</script>

<style lang='scss' scoped>
    @import '~$commonstyles/_settings.variable.scss';
    .header {
        padding: 0 #{$header_padding}px;
        width:100%;
        height:100%;
        display:flex;
        background-color: #{$main_blue};
        color:white;
    }
    .header__left {
        display:flex;
        flex:1;
    }
    .header__right {
        display:flex;
        flex:1;
        justify-content: flex-end;
    }
    .header__logo {
        font-size:23px;
        font-weight: bolder;
        margin-right: 30px;
    }
    .header__title {
        padding-left:20px;
    }
    .header__user {
        padding-left:20px;
    }
    .has__cutoff:before {
        content: '';
        top: 20%;
        bottom: 20%;
        left: 0;
        position: absolute;
        width: 1px;
        background-color: #009EE1;
    }
</style>
