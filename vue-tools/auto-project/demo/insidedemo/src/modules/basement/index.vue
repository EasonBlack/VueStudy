<template>
    <div class='app__container'>
        
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

    .app__container {
        width:100vw;
        min-height:100vh;
        overflow:hidden;
    }
</style>