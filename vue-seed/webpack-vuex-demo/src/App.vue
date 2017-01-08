<template>
	<div id="app">
        <router-view></router-view>
	</div>
</template>

<script>
    import Vue from 'vue';
	export default {
	}
</script>
<style lang='scss' >
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: Arial;
    }

    #app {
        width:100vw;
        min-height:100vh;
    }


</style>