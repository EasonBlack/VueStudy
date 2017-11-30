<template>
    <div class='app__container'>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang='scss' scoped >
    @import '~$commonstyles/_settings.variable.scss';
    .app__container {
        width:100vw;
        min-height:100vh;
        overflow:hidden;
    }
</style>